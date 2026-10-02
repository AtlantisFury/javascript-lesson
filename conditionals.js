/* 
	? Logic & Conditionals
	* conditionals allow us to check for a... condition
	* it always resolves to a truthy value
	* this condition is called an expression
	* we can chain multiple conditions using logic gates
	* if a condition isn't truthy, it will be skipped
	* if we have multiple chained conditions, once one is met, we leave
*/

/* 
	? If Conditional
	* syntax:
	* if (expression) { code block where we do something }
*/

let temp = 36

// expression true, we execute code block
if (temp > 30) {
	console.log("Summer weather")
}

// expression false, we don't execude code block
if (temp < 20) {
	console.log("Autumn weather")
}

/* 
	? Else Conditional
	* chains a fallback if expression fails
	* useful for when we cannot predict another expression
*/

/* 
	? Else If Conditional
	* allows to check for another explicit expression
    * else must always be last in the chain
*/

let tempScale = 2555

if (tempScale === "F") {
	console.log("Fahrenheit")
} else if (tempScale === "C") {
	console.log("Celsius")
} else {
	console.log(`The value is ${tempScale}`)
}

temp = 10

/* 
	? Why should we chain? Can't I just throw bunch of ifs?
	* example of a logic error (an error that does not throw an exception)
*/

if (temp > 30) {
	console.log("Hot")
}

if (temp < 25) {
	console.log("Pleasant")
}

if (temp < 20) {
	console.log("Cooling off")
}

if (temp < 15) {
	console.log("Winter is coming")
}

/* 
	? Logic Operators
	* used to consolidate multiple expressions into one
	* in the order of importance/execution
	* NOT
		* denoted by != or !==
		* flips the expression
	* AND
		* denoted by &&
		* both sides must be true for whole expression to be true
	* OR
		* denoted by ||
		* either side must be true for whole express to be true
*/

temp = 25
tempScale = "C"

if (tempScale === "C" && temp >= 30) {
	console.log("hot summer day")
} else if (tempScale === "F" && temp >= 30) {
	console.log("winter is here")
}

let age = 64.0

if (age < 13) {console.log("Ticket Price: $8")}
else if (age >= 13 && age <= 64) {console.log("Ticket Price: $12")}
else if (age > 64) {console.log("Ticket Price: $7")}
else console.log("Age Value Error - Check Input")