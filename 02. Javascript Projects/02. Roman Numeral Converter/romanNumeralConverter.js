function convertToRoman(num) {
    var romanChar = "";
    let counter = 1;

    // No remainder case
    switch(num) {
        case 1:
            return "I";
            break;
        case 10:
            return "X";
            break;
        case 100:
            return "C";
            break;
        case 1000:
            return "M";
            break;
        default:
            break;
    }
    while(num > 1) {
        // console.log(Math.floor(num%10, 0));
        romanChar = charConvert(Math.floor(num%10, 0), counter) + romanChar;
        num = num/10;
        counter++;
    }
    return romanChar;
}

function charConvert(num, position) {
    //position = 1, 10s, 100s, 1000s, 10000s
    switch(position) {
        case 1:
            switch(num) {
                case 1:
                    return "I";
                    break;
                case 2:
                    return "II";
                    break;
                case 3:
                    return "III";
                    break;
                case 4:
                    return "IV";
                    break;
                case 5:
                    return "V";
                    break;
                case 6:
                    return "VI";
                    break;
                case 7:
                    return "VII";
                    break;
                case 8:
                    return "VIII";
                    break;
                case 9:
                    return "IX";
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch(num) {
                case 1:
                    return "X";
                    break;
                case 2:
                    return "XX";
                    break;
                case 3:
                    return "XXXX";
                    break;
                case 4:
                    return "XL";
                    break;
                case 5:
                    return "L";
                    break;
                case 6:
                    return "LX";
                    break;
                case 7:
                    return "LXX";
                    break;
                case 8:
                    return "LXXX";
                case 9:
                    return "XC";
                    break;
                default:
                    break;
            }
            break;
        case 3:
            switch(num) {
                case 1:
                    return "C";
                    break;
                case 2:
                    return "CC";
                    break;
                case 3:
                    return "CCC";
                    break;
                case 4:
                    return "CD";
                    break;
                case 5:
                    return "D";
                    break;
                case 6:
                    return "DC";
                    break;
                case 7:
                    return "DCC";
                    break;
                case 8:
                    return "DCCC";
                    break;
                case 9:
                    return "CM";
                    break;
                default:
                    break;
            }
            break;
        case 4:
            switch(num) {
                case 1:
                    return "M";
                    break;
                case 2:
                    return "MM";
                    break;
                case 3:
                    return "MMM";
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return "";
}
// console.log(convertToRoman(10));