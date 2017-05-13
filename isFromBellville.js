module.exports = function(regNum){

  var Registration = regNum.startsWith('CY');
  console.log(Registration);
  return Registration;
}
