// TODO: Figure out how you can implement this with linear logic instead of jumping around and bug squashing

const VALUE = [["PENNY", .01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

function checkCashRegister(price, cash, cid) {
    let sum = 0;
    for(let i = 0; i < cid.length; i++) {
        sum += cid[i][1];
    }
    let changeNeeded = Math.round((cash-price)*100)/100;
    let changeGiven = [];
    let numCoins = cid.map((d,i) => [d[0],Math.round(d[1]/VALUE[i][1])]);

    console.log("Change Needed: " + changeNeeded);
    if(changeNeeded > sum) {
        return { status: "INSUFFICIENT_FUNDS", change: []};
    }

    if(changeNeeded == sum) {
        return { status: "CLOSED", change: cid};
    }

    for(let i = VALUE.length-1; i >= 0; i-- ) {
        if(VALUE[i][1] <= changeNeeded) {
            if(cid[i][1] < changeNeeded) {
                changeGiven.push([cid[i][0], cid[i][1]]);
                changeNeeded = Math.round((changeNeeded % cid[i][1])*100)/100;
            } else {
                changeGiven.push([cid[i][0], Math.floor(changeNeeded/VALUE[i][1])*VALUE[i][1]]);
                changeNeeded = Math.round((changeNeeded - Math.floor((changeNeeded/VALUE[i][1]))*VALUE[i][1])*100)/100;
            }
            console.log(changeGiven);
            console.log(changeNeeded);
            if(isNaN(changeNeeded)) {
                return { status: "INSUFFICIENT_FUNDS", change: []};
            }
        }
    }
    return { status: "OPEN", change: changeGiven };
  }
  

  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));