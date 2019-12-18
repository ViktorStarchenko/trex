<?php

function find_wordpress_base_path() {
    $dir = dirname(__FILE__);
    do {
        //it is possible to check for other files here
        if( file_exists($dir."/wp-config.php") ) {
            return $dir;
        }
    } while( $dir = realpath("$dir/..") );
    return null;
}

define( 'BASE_PATH', find_wordpress_base_path()."/" );
define('WP_USE_THEMES', false);
global $wp, $wp_query, $wp_the_query, $wp_rewrite, $wp_did_header;
require(BASE_PATH . 'wp-load.php');

use GFAPI;
use GFMarketo;

function my_simple_crypt( $string, $action = 'e' ) {
    // you may change these values to your own
    $secret_key = 'my_simple_secret_key';
    $secret_iv = 'my_simple_secret_iv';

    $output = false;
    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );

    if( $action == 'e' ) {
        $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
    }
    else if( $action == 'd' ){
        $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
    }

    return $output;
}

function submit_form($data, $submissionType){
    //set API keys
    $api_key = '9QsDNyeJEvr5v2N8';
    $private_key = 'fb187b4b8bdd08d';
     
    //set route
    $route = 'entries';
     
    //creating request URL
    $expires = strtotime( '+60 mins' );
    $string_to_sign = sprintf( '%s:%s:%s:%s', $api_key, 'POST', $route, $expires );
    $sig = calculate_signature( $string_to_sign, $private_key );
    $url = 'https://www.sleepmaker.com.au/gravityformsapi/' . $route . '/?api_key=' . $api_key . '&signature=' . $sig . '&expires=' . $expires;

    $rawData = json_decode($data, true);
    
    $flipped = json_decode($data, true);
               unset($flipped['dreamMatch_1']);
               unset($flipped['dreamMatch_2']);
               unset($flipped['dreamMatch_3']);
               unset($flipped['bedName']);
               unset($flipped['bedImage']);
               unset($flipped['bedLogo']);
               unset($flipped['bedDescription']);
               unset($flipped['idealFor1Image']);
               unset($flipped['idealFor1Name']);
               unset($flipped['idealFor2Image']);
               unset($flipped['idealFor2Name']);
               unset($flipped['idealFor3Image']);
               unset($flipped['idealFor3Name']);
               unset($flipped['specification']);
               unset($flipped['sizes']);

    $flipped        = array_flip($flipped);
    $flippedLookUp  = array_keys($flipped);

    if (isset($flipped['Mattress for'])) {
        $i              = array_search('Mattress for', $flippedLookUp);
        $i++;
        $MattressFor    = $flippedLookUp[$i];
    }

    if (isset($flipped['Position'])) {
        $i              = array_search('Position', $flippedLookUp);
        $i++;
        $Position    = $flippedLookUp[$i];

        if ($MattressFor == 'My partner and I '){
            $i++;
            $PositionPartner = $flippedLookUp[$i];
        }
    }

    if (isset($flipped['Mattress Feel'])) {
        $i              = array_search('Mattress Feel', $flippedLookUp);
        $i++;
        $MattressFeel    = $flippedLookUp[$i];

        if ($MattressFor == 'My partner and I '){
            $i++;
            $MattressFeelPartner = $flippedLookUp[$i];
        }
    }

    if (isset($flipped['Support'])) {
        $i              = array_search('Support', $flippedLookUp);
        $i++;
        $Support    = $flippedLookUp[$i];

        if ($MattressFor == 'My partner and I '){
            $i++;
            $SupportPartner = $flippedLookUp[$i];
        }
    }

    if (isset($flipped['Health'])) {
        $i              = array_search('Health', $flippedLookUp);
        $i++;
        $Health    = $flippedLookUp[$i];

        if ($MattressFor == 'My partner and I '){
            $i++;
            $HealthPartner = $flippedLookUp[$i];
        }
    }

    if (isset($flipped['Temperature'])) {
        $i              = array_search('Temperature', $flippedLookUp);
        $i++;
        $Temperature    = $flippedLookUp[$i];

        if ($MattressFor == 'My partner and I '){
            $i++;
            $TemperaturePartner = $flippedLookUp[$i];
        }
    }

    if (isset($flipped['Disturbance'])) {
        $i              = array_search('Disturbance', $flippedLookUp);
        $i++;
        $Disturbance    = $flippedLookUp[$i];
    }

    if (isset($flipped['Mattress Size'])) {
        $i              = array_search('Mattress Size', $flippedLookUp);
        $i++;
        $MattressSize    = $flippedLookUp[$i];
    }

    if (isset($flipped['Budget Guide'])) {
        $i              = array_search('Budget Guide', $flippedLookUp);
        $i++;
        $Budget    = $flippedLookUp[$i];
    }

    if (isset($rawData['email'])) {
        $email = $rawData['email'];
    } else {
        $email = '';
    }

    if (isset($rawData['firstName'])) {
        $firstName = $rawData['firstName'];
    } else {
        $firstName = '';
    }

    if (isset($rawData['lastName'])) {
        $lastName = $rawData['lastName'];
    } else {
        $lastName = '';
    }

    if (isset($rawData['receiveUpdates'])) {
        $receiveUpdates = $rawData['receiveUpdates'];
    } else {
        $receiveUpdates = '';
    }

    if (isset($rawData['wpmc'])) {
	error_log("Raw Data Received\n");
	error_log($rawData['wpmc']);
	$decrypt = my_simple_crypt( $rawData['wpmc'], 'd');
        $wpmc = $decrypt;
    } else {
	$wpmc = '';
	error_log("Not received wpmc");
    }

    $entries = array(
        array(
            'form_id'       => '22',
            '1'             => $rawData['bedName'], //Range          
            '2'             => $rawData['dreamMatch_1'], //DreamMatch1    
            '3'             => $rawData['dreamMatch_2'], //DreamMatch2    
            '4'             => $rawData['dreamMatch_3'], //DreamMatch3    
            '5'             => '', //RetailerRange  
            '6'             => $MattressFor, //MattressFor    
            '7'             => $Position, //Position       
            '8'             => $MattressFeel, //MattressFeel   
            '9'             => $Support, //Support        
            '10'            => $Health, //Health        
            '11'            => $Temperature, //Temperature   
            '12'            => $PositionPartner, //PositionPartner
            '13'            => $MattressFeelPartner, //MattressFeelPartner
            '14'            => $SupportPartner, //SupportPartner
            '15'            => $HealthPartner, //HealthPartner 
            '16'            => $TemperaturePartner, //TemperaturePartner
            '17'            => $Disturbance, //Disturbance   
            '18'            => $MattressSize, //MattressSize  
            '19'            => $Budget, //Budget
            '20'            => $email,//Email
            '23'            => $firstName,//FirstName
            '24'            => $lastName,//LastName
            '25'            => $receiveUpdates,//ReceiveUpdates
            '26'            => $submissionType,//SubmissionType
	        '28'	        => $wpmc, //MunchkinID
        ),
    );
     
    //json encode array
    $entry_json = json_encode( $entries );
     
    //retrieve data
    add_filter( 'https_ssl_verify', '__return_false' );
    $response = wp_remote_request( $url, array( 'method' => 'POST', 'body' => $entry_json ) );

    if ( wp_remote_retrieve_response_code( $response ) != 200 || ( empty( wp_remote_retrieve_body( $response ) ) ) ){
        //http request failed
        die( 'There was an error attempting to access the API.' . $url . var_dump($response));
    }

    //result is in the response "body" and is json encoded.
    $body = json_decode( wp_remote_retrieve_body( $response ), true );
     
    if( $body['status'] > 202 ){
        $error = $body['response'];
     
            //entry update failed, get error information, error could just be a string
        if ( is_array( $error )){
            $error_code     = $error['code'];
            $error_message  = $error['message'];
            $error_data     = isset( $error['data'] ) ? $error['data'] : '';
            $status     = "Code: {$error_code}. Message: {$error_message}. Data: {$error_data}.";
        }
        else{
            $status = $error;
        }
        die( "Could not post entries. {$status}" );
    }
     
    $data = array();
    $data['entryID'] = $body['response'][0];
    try {
        $res = GFAPI::get_entry( $data['entryID'] );
        if ( ! is_wp_error( $res ) ) {
            $res   = maybe_json_encode_list_fields( $res );
            GFMarketo::post_to_third_party($res, ['id'=> '22']);
        } else {
            error_log($res->get_error_message());
        }
    } catch (Exception $e) {
        error_log($e->getMessage());
    }

    switch ($rawData['bedName']) {
        case 'Cocoon':
            $data['postID'] = '430'; //Cocoon
            break;
        
        case 'Miracoil':
            $data['postID'] = '440'; //Miracoil
            break;

        case 'Miracoil Classic':
            $data['postID'] = '289'; //Miracoil Classic
            break;

        case 'Miracoil Advance':
            $data['postID'] = '291'; //Miracoil Advance
            break;

        case 'Lifestyle Singles':
            $data['postID'] = '445'; //Singles
            break;

        case 'Lifestyle Pocket':
            $data['postID'] = '447'; //Lifestyle
            break;

        case 'Lifestyle Classic':
            $data['postID'] = '447'; //Lifestyle
            break;

        default:
            $data['postID'] = '';
            break;
    }
    
    return($data);
}

function maybe_json_encode_list_fields( $entry ) {
        $form_id = $entry['form_id'];
        $form    = GFAPI::get_form( $form_id );
        if ( ! empty ( $form['fields'] ) && is_array( $form['fields'] ) ) {
                foreach ( $form['fields'] as $field ) {
                        /* @var GF_Field $field */
                        if ( $field->get_input_type() == 'list' ) {
                                $new_value = maybe_unserialize( $entry[ $field->id ] );

                                if ( ! is_json( $new_value ) ) {
                                        $new_value = json_encode( $new_value );
                                }

                                $entry[ $field->id ] = $new_value;
                        }
                }
        }

        return $entry;
}

function is_json( $value ) {
        if ( is_string( $value ) && in_array( substr( $value, 0, 1 ), array( '{', '[' ) ) && is_array( json_decode( $value, ARRAY_A ) ) ) {
                return true;
        }

        return false;
}

function calculate_signature( $string, $private_key ) {
    $hash = hash_hmac( 'sha1', $string, $private_key, true );
    $sig = rawurlencode( base64_encode( $hash ) );
    return $sig;
}

//$jsonData = '{"bedName":"Lifestyle Classic","bedImage":"http:\/\/sm-au-uat.uniondigital.co.nz\/Sleepmaker\/media\/Brands\/Retailer%20Specific%20Imagery\/SM-Lifestyle-Pocket_Zoned.jpg?ext=.jpg","bedLogo":"http:\/\/sm-au-uat.uniondigital.co.nz\/Sleepmaker\/media\/Brands\/logos\/17-1112-SLM-Lifestyle_190px.png?ext=.png","bedDescription":"\n                                Lifestyle has been specifically designed to conform beautifully to the body and assist with spinal alignment whilst minimising disturbance from your sleeping partner. Featuring allergy controlled premium pressure relieving comfort layers and zoned pocket springs.\n                            ","idealFor1Image":"http:\/\/sm-au-uat.uniondigital.co.nz\/Sleepmaker\/media\/Brands\/attributes\/Comfort-3-Star.png?width=200&height=200&ext=.png","idealFor1Name":"http:\/\/sm-au-uat.uniondigital.co.nzComfort","idealFor2Image":"http:\/\/sm-au-uat.uniondigital.co.nz\/Sleepmaker\/media\/Brands\/attributes\/Top-Value.png?width=200&height=200&ext=.png","idealFor2Name":"http:\/\/sm-au-uat.uniondigital.co.nzTop Value","idealFor3Image":"http:\/\/sm-au-uat.uniondigital.co.nzundefined","idealFor3Name":"http:\/\/sm-au-uat.uniondigital.co.nz","specification":"\n                                                <table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td width=\"20%\">&nbsp;<\/td>\n\t\t\t<td>\n\t\t\t<h4>Lifestyle Inner Spring<\/h4>\n\t\t\t<\/td>\n\t\t\t<td>\n\t\t\t<h4>Lifestyle Pocket<\/h4>\n\t\t\t<\/td>\n\t\t\t<td>\n\t\t\t<h4>Lifestyle Foam<\/h4>\n\t\t\t<\/td>\n\t\t\t<td>\n\t\t\t<h4>Other SleepMaker Basic Inner Spring Options<\/h4>\n\t\t\t<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<h5>Support<\/h5>\n\t\t\t<\/td>\n\t\t\t<td width=\"20%\"><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t\t<td width=\"20%\"><img alt=\"SLM-Stars-3-5.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3-5.png.aspx?width=56&amp;height=15\" title=\"SLM-Stars-3-5.png\"><\/td>\n\t\t\t<td width=\"20%\"><img alt=\"SLM-Stars-3-5.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3-5.png.aspx?width=56&amp;height=15\" title=\"SLM-Stars-3-5.png\"><\/td>\n\t\t\t<td width=\"20%\"><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<h5>Comfort &amp; Pressure Relief<\/h5>\n\t\t\t<\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3-5.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3-5.png.aspx?width=56&amp;height=15\" title=\"SLM-Stars-3-5.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<h5>Reduce Partner Distrubance<\/h5>\n\t\t\t<\/td>\n\t\t\t<td>-<\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-4.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-4.png.aspx?width=67&amp;height=15\" title=\"SLM-Stars-4.png\"><\/td>\n\t\t\t<td>-<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<h5>Reduced Aches &amp; Pains<\/h5>\n\t\t\t<\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2.png.aspx?width=34&amp;height=15\" title=\"SLM-Stars-2.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-4.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-4.png.aspx?width=67&amp;height=15\" title=\"SLM-Stars-4.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2.png.aspx?width=34&amp;height=15\" title=\"SLM-Stars-2.png\"><\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<h5>Temperature Regulating<\/h5>\n\t\t\t<\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2-5.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2-5.png.aspx?width=42&amp;height=15\" title=\"SLM-Stars-2-5.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2-5.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2-5.png.aspx?width=42&amp;height=15\" title=\"SLM-Stars-2-5.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2-5.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2-5.png.aspx?width=42&amp;height=15\" title=\"SLM-Stars-2-5.png\"><\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<h5>Price<\/h5>\n\t\t\t<\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2.png.aspx?width=34&amp;height=15\" title=\"SLM-Stars-2.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2-5.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2-5.png.aspx?width=42&amp;height=15\" title=\"SLM-Stars-2-5.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-3.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-3.png.aspx?width=49&amp;height=15\" title=\"SLM-Stars-3.png\"><\/td>\n\t\t\t<td><img alt=\"SLM-Stars-2.png\" src=\"\/getattachment\/Beds\/Miracoil\/SLM-Stars-2.png.aspx?width=34&amp;height=15\" title=\"SLM-Stars-2.png\"><\/td>\n\t\t<\/tr>\n\t<\/tbody>\n<\/table>\n\n<p>Note - Model specification varies by retail store. For&nbsp;further specification information&nbsp;please check the product range stocked&nbsp;in-store.<\/p>\n\n                                            ","sizes":"\n                                                \n                                                        <h3>List of sizes<\/h3>\n                                                        <p>\n                                                    \n                                                        Single 92 x 188cm\n                                                        <br>\n                                                    \n                                                        Long Single 92 x 203cm\n                                                        <br>\n                                                    \n                                                        King Single 107 x 203cm\n                                                        <br>\n                                                    \n                                                        Double 138 x 188cm\n                                                        <br>\n                                                    \n                                                        Queen 153 x 203cm\n                                                        <br>\n                                                    \n                                                        King 183 x 203cm\n                                                        <br>\n                                                    \n                                                        <br>\n                                                        Sizes and models may vary by store.\n                                            <\/p>\n                                                    \n                                            ","dreamMatch_1":"You indicated you were after good value and a refreshingly low price","dreamMatch_2":"Australian made quality you can trust","dreamMatch_3":"You\'re interested in a single bed with durable support","profile_1":"Mattress for","answer_1":"Myself","profile_2":"Position","answer_2":"On my stomach","profile_3":"Mattress Feel","answer_3":"Firm","profile_4":"Support","answer_4":"90-110 kgs","profile_5":"Health","answer_5":"Asthma or allergies ","profile_6":"Temperature","answer_6":"Often","profile_7":"Mattress Size","answer_7":"King (183cm x 203cm)","profile_8":"Budget Guide","answer_8":"Good quality at a good price", "email": "gravityapi@ravityapi.com", "firstName" :"gravityfirst", "lastName" : "gravitylast" }';
//$result = submit_form($jsonData, 'API Direct');


