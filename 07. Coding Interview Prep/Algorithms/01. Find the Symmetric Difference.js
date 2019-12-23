function sym() {
    if(arguments.length == 1) { // Base Case
        return arguments[0];
    }
    
    let c = findSymDiff(arguments[0], arguments[1]);
    if(arguments.length >= 3) {
        for(let i = 2; i < arguments.length; i++) {
            c = findSymDiff(c, arguments[i]);
        }
    }
    let finalArr = [];
    // Remove duplicates
    c.map(d => {
        if (finalArr.indexOf(d) == -1) { finalArr.push(d)}
    });
    return finalArr;
}

function findSymDiff(a, b) {
    let finalArray = [];
    a.map(d => {
        if(b.indexOf(d) == -1) {
            finalArray.push(d);
        }
    });

    b.map(d => {
        if(a.indexOf(d) == -1) {
            finalArray.push(d);
        }
    })

    return finalArray.sort((a,b) => a-b);
}


a = [1,2,3];
b = [2,3,4];
c = [4,5,6];

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));