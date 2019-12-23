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
    
    return c;
}

function findSymDiff(a, b) {
    let finalArray = [];
    a.map(d => {
        if(b.indexOf(d) == -1 && finalArray.indexOf(d) == -1) { // Check for symdif & not a dup
            finalArray.push(d);
        }
    });

    b.map(d => {
        if(a.indexOf(d) == -1 && finalArray.indexOf(d) == -1) {
            finalArray.push(d);
        }
    })

    return finalArray.sort((a,b) => a-b);
}