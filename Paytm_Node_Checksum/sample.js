/* More Details: https://developer.paytm.com/docs/checksum/#node */

var PaytmChecksum = require("./PaytmChecksum");

var paytmParams = {};

/* Generate Checksum via Array */

/* initialize an array */
paytmParams["MID"] = "Techno95881765134052";
paytmParams["ORDERID"] = "TEST510";

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, "AevQFT1M!!wA&eCh");
paytmChecksum.then(function(result){
	console.log("generateSignature Returns: " + result);
	var verifyChecksum =  PaytmChecksum.verifySignature(paytmParams, "AevQFT1M!!wA&eCh",result);
	console.log("verifySignature Returns: " + verifyChecksum);
}).catch(function(error){
	console.log(error);
});

/* Generate Checksum via String */

/* initialize JSON String */ 
body = "{\"mid\":\"Techno95881765134052\",\"orderId\":\"TEST510\"}"

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(body, "AevQFT1M!!wA&eCh");
paytmChecksum.then(function(result){
	console.log("generateSignature Returns: " + result);
	var verifyChecksum =  PaytmChecksum.verifySignature(body, "AevQFT1M!!wA&eCh",result);
	console.log("verifySignature Returns: " + verifyChecksum);
}).catch(function(error){
	console.log(error);
});