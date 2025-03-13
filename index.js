const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries);

// .reduce() iterates over each element in batteryBatches.
// total is the accumulator that starts at 0.
// batch represents each number in the array.
// Each iteration adds the current batch value to total.