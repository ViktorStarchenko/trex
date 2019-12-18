<?php

// Useful for troubleshooting but should be off by default

// ini_set('memory_limit','512M');
// ini_set('display_errors',true);
// error_reporting(-1);

class overdoseRest {

	public $url = "https://546-AJV-508.mktorest.com/rest/v1/";
	public $url_obj = "https://546-AJV-508.mktorest.com/rest/v1/customobjects/";
	public $auth_url = "https://546-AJV-508.mktorest.com/identity/oauth/token";
	public $apikey = array(); // API key passed to REST API type: asociative array $key => $value
	public $un = false;
	public $pw = false;
	public $auth_method = false; // Should be Basic, kerberos, NTLM etc ... or false for no auth method
	public $data = array(); // Parameters passed to REST API type: asociative array $key => $value
	public $result = false;
	public $responseCode = false;
	public $objRequest;
	public $objResponse = false;
	public $apiMethod = "";
	public $last_error = "";
	Public $client_id = "37c2b0bc-a6a5-4f20-80bd-fd79f4859703";
	public $client_secret = "zIGAQVosArIFWQs4qclNoEzO13zocV7b";
	public $credentials = array();
	public $full_url;
	public $customObj = "";

	public function __construct(){


		//Authenticate with Marketo and renew authentication if token expires
		$this->credentials['grant_type'] = "client_credentials";
		$this->credentials['client_id'] = $this->client_id;
		$this->credentials['client_secret'] = $this->client_secret;

		if(isset($_SESSION['token_expiry'])){


			if(strtotime($_SESSION['token_expiry']) < time()){

				$this->marketo_authenticate();

			}

		}else{

			$this->marketo_authenticate();

		}
		// $this->marketo_authenticate();
		$this->data = array("access_token" => $_SESSION['token']);


		/*
		REST Methods:
		POST - "CREATE"
		GET - "READ" (default)
		PUT - "UPDATE"
		PATCH - "MODIFY" The PATCH request only needs to contain changes
		DELETE
		*/


	}


	public function REST_connect($REST_method = "GET", $auth = false, $custobj = false, $format = "json"){


		if($auth){

			$rest_url = $this->auth_url;
			$params = $this->credentials;

		}elseif($custobj){

			$this->apiMethod = "";
			$rest_url = $this->url_obj.$this->customObj;
			$params = $this->data;

		}else{

			$rest_url = $this->url;
			$params = $this->data;

		}

		// convert post parameters to string for curl request
        $fields_string = "";
        foreach($params as $key=>$value) {
            $fields_string .= $key.'='.$value.'&';
        }
        $fields_string = rtrim($fields_string, '&');


        // Set header options (some API's require a content type header to be set)
		$arr_header = array('Content-Type: application/'.$format,'Content-Length: ' . strlen($this->objRequest));

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HEADER, false);
     	curl_setopt($ch, CURLOPT_HTTPHEADER, $arr_header);
     	$this->full_url = $rest_url . $this->apiMethod . ((!$auth)? ".".$format : "") . "?" . $fields_string;
		curl_setopt($ch,CURLOPT_URL, $this->full_url);

		curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
        // receive server response ...
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        if(trim(strtolower($this->auth_method)) == "basic"){
        	
        	// set basic auth details
			curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        	curl_setopt($ch, CURLOPT_USERPWD, $this->un.":".$this->pw); //Your credentials goes here

    	}else{

    		//No webserver authentication set
    		curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);

    	}

    	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $REST_method);

    	if($REST_method == "POST"){

	        // define post method
	       
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $this->objRequest);

		}
		
		//Set curl directives for HTTPS if needed
		if(strpos($rest_url, "https") !== false){
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_UNRESTRICTED_AUTH, 1);
		}

		
		$this->result = curl_exec($ch);
		$this->responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);

		// Anything other than a 200 or 201 response code is considered to be a failure
		if($this->responseCode == 200 || $this->responseCode == 201){


			// Add additional formats in the switch statement if you need them
			switch($format){
				
				case "json" :
					// Convert json response to PHP object
					$this->objResponse = json_decode($this->result);
					break;

				case "xml" :
					// Convert xml response to PHP object
					$this->objResponse = simplexml_load_string($this->result);
					break;
				default:
					// placeholder default clause
					break;

			}
			if($auth){
				// set session token expiry to expiry time - 5 seconds
				$_SESSION['token_expiry'] = time() + ($this->objResponse->expires_in - 5);
				$_SESSION['token'] = $this->objResponse->access_token;
			}

			$this->last_error = "Success!";

			return true;

		}else{

			// Get message and desciption of Marketo error response code
			$objError = $this->get_error_message();

			$this->last_error = (new \DateTime())->format('d-m-Y H:i:s'). " failed REST request to: ".$rest_url. $this->apiMethod . "." . $format . "?".$fields_string;
			$this->last_error .= "\n\n". "Response code = ".$this->responseCode;
			$this->last_error .= "\n\n". "Error message = ".$objError->msg;
			$this->last_error .= "\n\n". "Error description = ".$objError->desc;
			$this->last_error .= "\n\n". "Authentication = ".$this->auth_method;
			$this->last_error .= ($this->auth_method)? "\n\n" . "UN = ".$this->un . "PW = ".$this->pw : "";
			$this->last_error .= (!empty($this->apikey))? "\n\n" . key($this->apikey) . ":" . reset($this->apikey) : "";

			error_log($this->last_error);

			return false;

		}
		

	}


	public function display_response(){

		// show last error
		echo "<p>" . nl2br($this->last_error) . "<p>";
		echo "<p> token: " . $_SESSION['token'] . "<p>";

	}

	public function get_error_message(){

		$objError = new stdClass;
		$objError->msg = '';
		$objError->desc = '';

		// Respose code error message and descriptions, needed to get meaningful information to troubleshoot Marketo REST requests

		switch ($this->responseCode) {
			case 413:
				$objError->msg = 'Request Entity Too Large';
				$objError->desc = 'Payload exceeded 1MB limit.';
				break;
			case 414:
				$objError->msg = 'Request-URI Too Long';
				$objError->desc = 'URI of the request exceeded 8k. The request should be retried as a POST with param _method=GET in the URL, and the rest of the querystring in the body of the request.';
				break;
			case 502:
				$objError->msg = 'Bad Gateway';
				$objError->desc = 'The remote server returned an error. Likely a timeout. The request should be retried with exponential backoff.';
				break;
			case 600:
				$objError->msg = 'Empty access token';
				$objError->desc = 'An Access Token parameter was not included in the request.';
				break;
			case 601:
				$objError->msg = 'Access token invalid';
				$objError->desc = 'An Access Token parameter was included in the request, but the value was not a valid access token.';
				break;
			case 602:
				$objError->msg = 'Access token expired';
				$objError->desc = 'The Access Token included in the call is no longer valid due to expiration.';
				break;
			case 603:
				$objError->msg = 'Access denied';
				$objError->desc = 'Authentication is successful but user doesn’t have sufficient permission to call this API. Additional permissions may need to be assigned to the user role.';
				break;
			case 604:
				$objError->msg = 'Request timed out';
				$objError->desc = 'The request was running for too long, or exceeded the time-out period specified in the header of the call.';
				break;
			case 605:
				$objError->msg = 'HTTP Method not supported';
				$objError->desc = 'GET is not supported for Sync Leads endpoint, POST must be used.';
				break;
			case 606:
				$objError->msg = 'Max rate limit ‘%s’ exceeded with in ‘%s’ secs';
				$objError->desc = 'The number of calls in the past 20 seconds was greater than 100';
				break;
			case 607:
				$objError->msg = 'Daily quota reached';
				$objError->desc = 'Number of calls today exceeded the subscription’s quota. The default subscription quota is 10,000/day.';
				break;
			case 608:
				$objError->msg = 'API Temporarily Unavailable';
				$objError->desc = '';
				break;
			case 609:
				$objError->msg = 'Invalid JSON';
				$objError->desc = 'The body included in the request is not valid JSON.';
				break;
			case 610:
				$objError->msg = 'Requested resource not found';
				$objError->desc = 'The URI in the call did not match a REST API resource type. This is often due to an incorrectly spelled or incorrectly formatted request URI';
				break;
			case 611:
				$objError->msg = 'System error';
				$objError->desc = 'All unhandled exceptions';
				break;
			case 612:
				$objError->msg = 'Invalid Content Type';
				$objError->desc = 'If you see this error, add a content type header specifying JSON format to your request. For example, try using “content type: application/json”. Please see this StackOverflow question for more details.';
				break;
			case 613:
				$objError->msg = 'Invalid Multipart Request';
				$objError->desc = 'The multipart content of the POST was not formatted correctly';
				break;
			case 614:
				$objError->msg = 'Invalid Subscription';
				$objError->desc = 'The destination subscription cannot be found or is unreachable.  This usually indicates temporary inaccessibility.';
				break;
			case 615:
				$objError->msg = 'Concurrent access limit reached';
				$objError->desc = 'At most 10 requests can be processed by any subscription at a time. This will be returned if there are already 10 requests for the subscription ongoing.';
				break;
			case 701:
				$objError->msg = '%s cannot be blank';
				$objError->desc = 'The reported field must not be empty in the request';
				break;
			case 702:
				$objError->msg = 'No data found for given search scenario';
				$objError->desc = 'No records matched the given search parameters';
				break;
			case 703:
				$objError->msg = 'Feature is not enabled for the subscription';
				$objError->desc = 'A beta feature that has not been in enabled in a user’s subscription';
				break;
			case 704:
				$objError->msg = 'Invalid date format';
				$objError->desc = 'A date was specified that was not in the correct format';
				break;
			case 709:
				$objError->msg = 'Business Rule Violation';
				$objError->desc = 'The call cannot be fulfilled because it violates a requirement to create or update an asset, e.g. trying to create an email without a template. It is also possible to get this error when trying to:
							\nRetrieve content for landing pages that contain social content.
							\nClone a program that contains certain asset types (see Program Clone for more information).';
			case 710:
				$objError->msg = 'Parent Folder Not Found';
				$objError->desc = '	The specified parent folder could not be found';
				break;
			case 711:
				$objError->msg = 'Incompatible Folder Type';
				$objError->desc = 'The specified folder was not of the correct type to fulfill the request';
				break;
			case 1001:
				$objError->msg = "Invalid value ‘%s’. Required of type ‘%s’";
				$objError->desc = 'Error is generated whenever parameter value has type mismatch. For example string value specified for integer parameter.';
				break;
			case 1002:
				$objError->msg = "Missing value for required parameter ‘%s’";
				$objError->desc = 'Error is generated when required parameter is missing from the request';
				break;
			case 1003:
				$objError->msg = 'Invalid data';
				$objError->desc = 'When the data submitted is not a valid type for the given endpoint or mode; such as when id is submitted for a lead with action designated as createOnly or when using Request Campaign on a batch campaign.';
				break;
			case 1004:
				$objError->msg = 'Lead not found';
				$objError->desc = 'For syncLead, when action is “updateOnly” and if lead is not found';
				break;
			case 1005:
				$objError->msg = 'Lead already exists';
				$objError->desc = 'For syncLead, when action is “createOnly” and if lead already exists';
				break;
			case 1006:
				$objError->msg = 'Field ‘%s’ not found';
				$objError->desc = 'An included field in the call is not a valid field.';
				break;
			case 1007:
				$objError->msg = 'Multiple leads match the lookup criteria';
				$objError->desc = 'Multiple leads match the lookup criteria. Updates can only be performed when the key matches a single record';
				break;
			case 1008:
				$objError->msg = 'Access denied to partition ‘%s’';
				$objError->desc = 'The user for the custom service does not have access to a workspace with the partition where the record exists.';
				break;
			case 1009:
				$objError->msg = 'Partition name must be specified';
				$objError->desc = '';
				break;
			case 1010:
				$objError->msg = 'Partition update not allowed';
				$objError->desc = 'The specified record already exists in a separate lead partition.';
				break;
			case 1011:
				$objError->msg = 'Field ‘%s’ not supported';
				$objError->desc = 'When lookup field or filterType specified with unsupported standard fields (ex: firstName, lastName ..etc)';
				break;
			case 1012:
				$objError->msg = 'Invalid cookie value ‘%s’';
				$objError->desc = '';
				break;
			case 1013:
				$objError->msg = 'Object not found';
				$objError->desc = 'Get object (list, campaign ..etc) by id will return this error code';
				break;
			case 1014:
				$objError->msg = 'Failed to create Object';
				$objError->desc = 'Failed to create Object (list, ..etc)';
				break;
			case 1015:
				$objError->msg = 'Lead not in list';
				$objError->desc = 'The designated lead is not a member of the target list';
				break;
			case 1016:
				$objError->msg = 'Too many imports';
				$objError->desc = 'There are too many imports queued. A maximum of 10 is allowed';
				break;
			case 1017:
				$objError->msg = 'Object already exists';
				$objError->desc = 'Creation failed because the record already exists';
				break;
			case 1018:
				$objError->msg = 'CRM Enabled';
				$objError->desc = 'The action could not be carried out, because the instance has a native CRM integration enabled.';
				break;
			case 1019:
				$objError->msg = 'Import in progress';
				$objError->desc = 'The target list is already being imported to';
				break;
			case 1020:
				$objError->msg = 'To many clone to program';
				$objError->desc = 'The subscription has reached the alotted uses of cloneToProgramName in Schedule Program for the day';
				break;
			case 1021:
				$objError->msg = 'Company update not allowed';
				$objError->desc = 'Company update not allowed during syncLead';
				break;
			case 1022:
				$objError->msg = 'Object in use';
				$objError->desc = 'Delete is not allowed when an object is in use by another object';
				break;
			case 1025:
				$objError->msg = 'Program status not found';
				$objError->desc = 'A status was specified to Change Lead Program Status that did not match a status available for the program’s channel.';
				break;
			case 1026:
				$objError->msg = 'Custom object not enabled';
				$objError->desc = 'The action could not be carried out, because the instance does not have custom objects integration enabled.';
				break;
			case 1029:
				$objError->msg = 'Too many jobs in queue';
				$objError->desc = 'Subscriptions are allowed a maximum of 10 bulk extract jobs in the queue at any given time.';
				break;
			case 1035:
				$objError->msg = 'Unsupported filter type';
				$objError->desc = 'In some subscriptions, the following Bulk Lead Extract filter types are not supported:  updatedAt, smartListId, smartListName.';
				break;
			default:
				# code...
				break;
		}


		return $objError;


	}

	public function marketo_authenticate(){

		$this->REST_connect("GET", true);

	}


}

/**
*
* EXAMPLE OF HOW TO USE:
*
**/

// // Check to make sure an endpoint fields are accessible via the API before trying to post to it
// // e.g.
// // leads database

// // Intantiate object lead

// // Create object for lead generation Marketo
// $obj_lead = new  StdClass();
// $obj_lead->action = "createOrUpdate";
// $obj_lead->lookupField = "email";
// $input = array(array("email" => "nikolai@gmail.com", "firstName" => "Nikolai Mouraviev", "postalCode" => "04828"));
// $obj_lead->input = $input;

// // Json encode lead object to send to Marketo
// $lead = json_encode($obj_lead);

// // load and fire the lead API request
// $objRest = new overdoseRest();
// $objRest->objRequest = $lead;
// $objRest->apiMethod = "leads"; // API method
// $objRest->REST_connect("POST");


// // Create object for Marketo custom object creation
// $obj_custObj = new  StdClass();
// $obj_custObj->action = "createOrUpdate";
// $obj_custObj->dedupeBy = "dedupeFields";
// $input = array(array("emailAddress" => "nikolai@gmail.com", "recordID" => '"'.$objRest->objResponse->result[0]->id.'"'));
// $obj_custObj->input = $input;

// // Json encode custom object to send to Marketo
// $custObj = json_encode($obj_custObj);

// // Load and fire the custom object request
// $objRest->objRequest = $custObj;
// $objRest->customObj = "warrantyRegistration_c";
// $objRest->REST_connect("POST", false, true);



?>
