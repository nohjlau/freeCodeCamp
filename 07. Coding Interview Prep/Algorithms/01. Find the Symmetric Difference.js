function sym() {
    let args = Array.prototype.slice.call(arguments);
    return args.reduce(findSymDiff);
}

function findSymDiff(a, b) {
    let finalArray = [];
    a.map(d => {
        if(b.indexOf(d) == -1 && finalArray.indexOf(d) == -1) { // Check for symdif & not a dup)
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