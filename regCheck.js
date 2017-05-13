module.exports = function(regNum, location){
  var Registration =regNum.endsWith(location);
  console.log('Registration' + " " + location);
  return Registration;
};
