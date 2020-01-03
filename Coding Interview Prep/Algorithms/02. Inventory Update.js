function updateInventory(arr1, arr2) {
    // Convert our arrays into objects to update and then convert back into array.
    let inventory = {};
    for(let i = 0; i < arr1.length; i++) {
        if(!inventory.hasOwnProperty(arr1[i][1])) {
            inventory[arr1[i][1]] = arr1[i][0];
        }
    }

    for(let i = 0; i < arr2.length; i++) {
        if(inventory.hasOwnProperty(arr2[i][1])) {
            inventory[arr2[i][1]] += arr2[i][0];
        } else {
            inventory[arr2[i][1]] = arr2[i][0];
        }
    }

    var updatedInventory = [], keys = [];
    for (let key in inventory) {
        keys.push(key);
    }
    
    keys = keys.sort();
    for(let i = 0; i < keys.length; i++) {
        updatedInventory.push([inventory[keys[i]], keys[i]]);
    }
    return updatedInventory;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];