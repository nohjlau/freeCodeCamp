let ten = false;
let eleven = false;
let startsOne = false;
let permittedChars = false;
let correctParentheses = true;
let countLeft = 0;
let countRight = 0;

function telephoneCheck(str) {
    let digits = 0;
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(parseInt(str[i]))) {
            digits++;
        }
        if(str[i] == "(") {
            countLeft++;
        }
        if(str[i] == ")") {
            countRight++;
        }
    }
    if (digits == 10 ) {
        ten = true;
    }
    if (digits == 11) {
        eleven = true;
    }
    startsOne = str[0] == 1 ? true : false;
    
    if(str.match(/[a-z\*\.\;\?]/gi) == null) {
        permittedChars = true;
    }

    if((str[0] == "(" && str[4] != ")") || (str[1] == "(" && str[5] != ")")) {
        correctParentheses = false;
    }

    if(!ten && !eleven) {
        return false;
    } else if (!permittedChars || !correctParentheses) {
        return false;
    } else if (eleven && !startsOne) {
        return false
    } else if (countLeft != countRight || countLeft > 1 || countRight > 1) {
        return false;
    } else {
        return true;
    }
    
}

console.log(telephoneCheck("555-5555"));