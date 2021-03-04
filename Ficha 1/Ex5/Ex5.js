console.log(typeof("" + 1 + 0));
console.log(typeof("" - 1 + 0));
console.log(typeof(true + false));
console.log(typeof(6 / "3"));
console.log(typeof("2" * "3"));
console.log(typeof("$" + 4 + 5));
console.log(typeof("4" - 2));
console.log(typeof("4px" - 2));
console.log(typeof(7 / 0));
console.log(typeof(" -9 " + 5));
console.log(typeof(" -9 " - 5));
console.log(typeof(null + 1));
console.log(typeof(undefined + 1));

console.log("" + 1 + 0); // 10
console.log("" - 1 + 0);// -1
console.log(true + false);// 1
console.log(6 / "3");// 2 
console.log("2" * "3");// 6
console.log("$" + 4 + 5);// $45
console.log("4" - 2);// 2
console.log("4px" - 2);// NaN
console.log(7 / 0);// Infinity
console.log(" -9 " + 5);// -9 5
console.log(" -9 " - 5);// -9-5 = -14
console.log(null + 1);// 1
console.log(undefined + 1);// NaN