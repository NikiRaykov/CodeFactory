const favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"]

function randomFood() {
    const randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    return favoriteFoods[randomIndex];
}

console.log("Randomly selected food: " + randomFood());