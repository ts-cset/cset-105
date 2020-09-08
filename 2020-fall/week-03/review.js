// Values and Types
//
// Number
10
-5
3.14
1.5e6
Infinity
-Infinity
NaN

// String
'Hello'
"Hello"
`Hello`

'I can\'t escape'
"new\nline"
`new
line`

`the total is ${2 + 2}`

// Boolean
true
false

// Empty
null
undefined


// Operators
// binary: arithmetic, concatenate, comparison, logical
+ - * / % **
+
< <= >= > == !=   === !==
&& ||

// unary
!
typeof

// ternary
cond ? val1 : val2


// Building Blocks
//
// Creating a variable
// create a variable called name of some type and it starts with value
let today = '2020-09-07';
const pi = 3.14;
// var

// Updating a variable
today = "Monday";

// Convert types
Number('5')  // 5
String(5)    // '5'
Boolean(5)   // true

// Get input from user
// Ask user to "message" and store answer in variable
let number = prompt('Enter a number');

// Show output
// output some message
console.log(number);


// Create a branch
// create a branch to check condition and run code
if (answer == true) {
  // run these statements
} else if (answer == false) {
  // run these instead
} else {
  // default
}

switch (today) {
  case 'monday':
    console.log('boo');
    break;
  default:
    console.log('yay');
}


// Make a loop
// create a loop using a counter that starts at start, adds 1 each cycle, until we get to end
for (let counter = 0; counter < 10; counter += 1) {
  console.log(counter);
}

let username;
while (!username) {
  username = prompt('Enter username');
}

let username;
do {
  username = prompt('Enter username');
} while (!username);
