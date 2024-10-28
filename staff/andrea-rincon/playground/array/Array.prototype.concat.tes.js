console.log('TEST Array.prototype.concat')

console.log('CASE merge fruits and veggies')

var fruits = ['apple', 'orange', 'lemon', 'banana', 'cherry']
var veggies = ['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
var food = fruits.concat(veggies)
console.log(fruits)
//['apple','orange', 'lemon', 'banana', 'cherry']
console.log(veggies)
//['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
console.log(food)
//['apple', 'orange', 'lemon', 'banana', 'cherry', 'letucce', 'onion', 'garlic', 'carrot', 'lentice']


console.log('CASE merge fruits and veggies and meats')

var fruits = ['apple', 'orange', 'lemon']
var veggies = ['lettuce', 'onion']
var meats = ['cow', 'salmon', 'pig']
var food = fruits.concat(veggies, meats)
console.log(fruits)
//['apple','orange','lemon']
console.log(veggies)
//['lettuce','onion']
console.log(meats)
//['cow', 'salmon', 'pig']
console.log(food)
//['apple', 'orange', 'lemon', 'lettuce', 'onion', 'cow', 'salmon', 'pig']