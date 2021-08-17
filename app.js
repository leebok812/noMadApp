const age = 96;

function calculateKrAge(AgeOfForeigner){
   return AgeOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);


const calculator = {
    plus : function (a,b) {
        return a + b;
    },
    minus : function (a,b) {
        return a - b;
    },
    multiply: function (a,b) {
        return a * b;
    },
    divide : function (a,b) {
        return a / b;
    },
    power : function (a,b) {
        return a ** b;
    }
}

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const multiplyResult = calculator.multiply(10, minusResult);
const divideResult = calculator.divide(multiplyResult, plusResult);
const powerResult = calculator.power(divideResult,minusResult);