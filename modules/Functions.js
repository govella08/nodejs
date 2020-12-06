
/**
 * This shows how you can export resources from a file one by one
 * But there is another way in which you can export all the resources at once
 */

function myFunction () {
  console.log('This function comes from a module');
}

var myString = "This string comes from the module too";

// Exporting the function myFunction
module.exports.myFunction = myFunction;

// Exporting the string myString
module.exports.myString = myString;