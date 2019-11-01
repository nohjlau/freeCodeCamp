function rot13(str) { // LBH QVQ VG!
    let arr = [];
    arr = str.split("");
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i].match(/\w/)) {
           newArr = newArr + (convert(arr[i]));
        } else {
            newArr = newArr + str[i];
        }
        
    }
    return newArr;
  }
  function convert(c) {
      const ASCII_A = 65;
      const ALPHABET_SIZE = 26;
      const ROT_13 = 13;
      let car = c.charCodeAt(0);
      car = car + ROT_13;
      if(car >= ASCII_A + ALPHABET_SIZE) {
          car = ASCII_A + (car-(ASCII_A + ALPHABET_SIZE));
      }
      return String.fromCharCode(car);
  }

//   console.log(rot13("SERR CVMMN!"));