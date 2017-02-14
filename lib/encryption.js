'use strict';

const getPK = require("rsa-pem-from-mod-exp");
const crypto = require('crypto');

const cloverEncrypt = function (data) {

  const data = {
    modulus: "24130287975021244042702223805688721202041521798556826651085672609155097623636349771918006235309701436638877260677191655500886975872679820355397440672922966114867081224266610192869324297514124544273216940817802300465149818663693299511097403105193694390420041695022375597863889602539348837984499566822859405785094021038882988619692110445776031330831112388738257159574572412058904373392173474311363017975036752132291687352767767085957596076340458420658040735725435536120045045686926201660857778184633632435163609220055250478625974096455522280609375267155256216043291335838965519403970406995613301546002859220118001163241",
    exponent: "415029",
    prefix: "00008099",
    card: "4242424242424242"
  }
  if (typeof data !== "object") {
    return "incorrect format, please pass an object"
  }

  if ((data.modulus === undefined) || (data.exponent === undefined) || (data.prefix === undefined) || (data.card === undefined)) {
    return "missing a parameter";
  }


  var key = getPK(data.modulus, data.exponent);
  var cipher = crypto.createCipher('aes192', 'a password');

  // create key with fromClover.modulus fromClover.exponent
  var prefixedCard = fromClover.prefix + testData.cardNumber + ""

  var encrypted = cipher.update(key, 'utf8', 'base64');
      encrypted += cipher.final('base64');
  console.log("CLOVER",encrypted);

  var hash = crypto.createHmac('sha256', prefixedCard)
                    .update('I love cupcakes')
                    .digest('base64');
  console.log(hash);
  return hash
}
exports.cloverEncrypt = cloverEncrypt
