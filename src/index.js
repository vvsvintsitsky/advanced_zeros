module.exports = function getZerosCount(number, base) {
  var zeroes = 0;  
  
  var primerArray = [];
  var primer = 2;
  var restBase;
  var isPrimer = true;
  var primerPower;
  while(primer <= base) {
    primerPower = 0;
    restBase = base;
    primerArray.forEach(element => {
        if((primer % element.pr) == 0) {
          isPrimer = false;
        }
    });
    if(isPrimer && (restBase%primer == 0)) {
      while(restBase%primer == 0) {
        restBase /= primer;
        primerPower++;
      }
      primerArray.push({pr : primer, pw : primerPower});
    }
    isPrimer = true;
    primer++;    
  }
  
  zeroes = 99999999999999;
  for(var i = 0; i < primerArray.length; i++) {
    primer = primerArray[i].pr;
    var tempZeroes = 0;
    var tempNumber = number;
    while(tempNumber/primer > 1) {
      tempZeroes += (tempNumber - tempNumber % primer) / primer;
      tempNumber /= primer;
    }
    tempZeroes = (tempZeroes - tempZeroes % primerArray[i].pw) / primerArray[i].pw;
    if(tempZeroes < zeroes) {
      zeroes = tempZeroes;
    }
  }
  
  return zeroes;
}