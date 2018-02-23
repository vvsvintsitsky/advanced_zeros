module.exports = function getZerosCount(number, base) {
  var zeroes = 0;  
  /*if((base%2) != 0) {
    poweredFive = 10;
    while(number/poweredFive > 1) {
      zeroes += (number - number % poweredFive) / poweredFive;
      poweredFive = Math.pow(10, ++i);
    }
    return zeroes;
  } else {*/

  /*var primerArray = [];
  var primer = 2;
  var power = 0;
  var restBase = base;
  var notAPrimer;
  while(primer < base) {
    if(restBase%primer == 0) {
      while(restBase%primer == 0) {
        power++;
        restBase /= primer;
      }
      primerArray.push({pr : primer, pw : power});
      power = 0;
      primer++;
      primerArray.forEach(element => {
        
      });
    }
    
  }*/


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
  primer = primerArray[primerArray.length - 1].pr;

  
  while(number/primer > 1) {
    zeroes += (number - number % primer) / primer;
    number /= primer;
  }

  var biggestPrimerPower = primerArray.pop().pw;
  if(biggestPrimerPower > 1) {
    zeroes = (zeroes - zeroes % biggestPrimerPower) / biggestPrimerPower;
    //zeroes = Math.round(zeroes);
  } else if (primerArray.length != 0) {
    //smallestPrimerPower = primerArray.shift().pw;
    //zeroes = zeroes - ((zeroes - (zeroes % smallestPrimerPower)) / smallestPrimerPower);
  }


  return zeroes;
}