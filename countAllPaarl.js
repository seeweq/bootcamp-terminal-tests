module.exports = function(countregNum){
var allPaarlReg = [];
  var data = countregNum.split(", ");
  for(var i=0;i<data.length;i++){
  if(data[i].startsWith('CJ')){
  allPaarlReg.push(data[i]);
  }
}
return allPaarlReg.length;
}; //console.log(allPaarlReg);
