// This works, but the prompt wants us to allow for unlimited inputs--basically using arguments
function sym(a, b) {
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

console.log(sym([1, 2, 3], [5, 2, 1, 4]));