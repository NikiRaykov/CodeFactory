function getRandomTemp() {
    return temp = Math.random() * (-5 - 25) + 25;
}


function categorizeTemp(temp) {
    if (temp >= -5 && temp <= 10) {
        console.log("The weather is cold")
    } else {
        console.log("The weather is moderate")
    }
}

let randomTemp = getRandomTemp();
categorizeTemp(randomTemp);