function palindrome(str) {
    str = str.toLowerCase().trim().replace(/[^0-9a-z]/gi,"");
    
    // console.log(str);
    for(let i = 0; i < str.length/2; i++) {
        // console.log(str[i] + " vs " + str[str.length-1-i]);
        if(str[i] != str[str.length-1 - i]) {
            return false;
        }
    }
    return true;
}

//console.log(palindrome("_eye"));