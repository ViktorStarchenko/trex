<?php

include '../submit.php';

function json_response($code = 200, $message = null)
{
    // clear the old headers
    header_remove();
    // set the actual code
    http_response_code(intval($code));
    // set the header to make sure cache is forced
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    // treat this as json
    header('Content-Type: application/json');
    $status = array(
        200 => '200 OK',
        400 => '400 Bad Request',
        422 => 'Unprocessable Entity',
        500 => '500 Internal Server Error'
        );
    // ok, validation error, or failure
    header('Status: '.$code);
    // return the encoded json
    return json_encode(array(
        'status' => $code < 300, // success or not?
        'message' => $message
        ));
}

if (!empty($_POST) && $_SERVER['REQUEST_METHOD'] == 'POST'){
	$json_string = json_encode($_POST);
	$tmpfname = tempnam("retailer","retailer-");
	$file_handle = fopen($tmpfname, 'w');
	fwrite($file_handle, $json_string);
	fclose($file_handle);

    $data = submit_form($json_string, 'findRetailer');

	echo json_response(200, array(
	  'redirect_url' => array('https://www.sleepmaker.com.au/stockists?post_id='.$data['postID'].'&entry_id='.$data['entryID'])
 	 ));

} else {
	echo json_response(400, 'Error! Please POST data as per documentation');
}

?>
