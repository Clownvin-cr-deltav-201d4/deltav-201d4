var movieVillains = ["Joker", "Thanos", "Mew-Two", "Red", "Jafar"];
var step = 1;

console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log(`First index: ${movieVillains[0]}.`);
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log("Adding \"Evil Superman\"...");
movieVillains.push("Evil Superman");
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log(`Array length: ${movieVillains.length}`);
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log("Popping tail...")
movieVillains.pop(movieVillains.length - 1);
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log(`Contains Red: ${movieVillains.includes("Red")}.`);
