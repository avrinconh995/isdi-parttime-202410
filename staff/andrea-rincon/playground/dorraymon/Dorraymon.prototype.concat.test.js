function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.concat = function () {
    var result = new Dorraymon
    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }
    for (var j = 0; j < arguments.length; j++) {
        var values = arguments[j]
        if (values instanceof Dorraymon) {
            for (var i = 0; i < values.length; i++) {
                result[result.length] = values[i]
                result.length++
            }
        } else {
            result[result.length] = values
            result.length++
        }
    }
    return result
}

console.log('TEST Dorraymon.prototype.concat')

console.log('CASE merge fruits and vegetables')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits[3] = 'banana'
fruits[4] = 'cherry'
fruits.length = 5

var veggies = new Dorraymon
veggies[0] = 'lettuce'
veggies[1] = 'onion'
veggies[2] = 'garlic'
veggies[3] = 'carrot'
veggies[4] = 'lentice'
veggies.length = 5
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', length: 5 }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', 2: 'garlic', 3: 'carrot', 4: 'lentice', length: 5 }
var food = fruits.concat(veggies)
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', 9: 'lentice', length: 10 }

