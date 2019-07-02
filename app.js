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
console.log("Now lets remove red...");
movieVillains.splice(movieVillains.indexOf("Red"), 1);
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log("Now lets replace Mew-Two with Jiren...");
movieVillains.splice(movieVillains.indexOf("Mew-Two"), 1, "Jiren");
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log("Now lets reverse the array...");
movieVillains.reverse();
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);
console.log("Now lets \"pop\" the front of the array...");
movieVillains.shift();
console.log(`Array of Villains (step ${step++}): ${movieVillains}.`);

function testConstructor(testName, testData) {
  return {name: testName,
          data: testData};
}

var testObj = testConstructor("Test Object", testConstructor("Test Data", "Test Jibberish"));

console.log(testObj);
