class Dorraymon {
    constructor() {
        this.length = 0
    }


    concat() {
        const result = new Dorraymon
        for (const i = 0; i < this.length; i++) {
            result[i] = this[i]
            result.length++
        }
        for (const j = 0; j < arguments.length; j++) {
            const values = arguments[j]
            if (values instanceof Dorraymon) {
                for (const i = 0; i < values.length; i++) {
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
}

console.log('TEST Dorraymon.prototype.concat')

console.log('CASE merge fruits and veggies')
{
    const fruits = new Dorraymon
    fruits[0] = 'apple'
    fruits[1] = 'orange'
    fruits[2] = 'lemon'
    fruits[3] = 'banana'
    fruits[4] = 'cherry'
    fruits.length = 5

    const veggies = new Dorraymon
    veggies[0] = 'lettuce'
    veggies[1] = 'onion'
    veggies[2] = 'garlic'
    veggies[3] = 'carrot'
    veggies[4] = 'lentice'
    veggies.length = 5

    const food = fruits.concat(veggies)

    console.log(fruits)
    // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', length: 5 }
    console.log(veggies)
    // Dorraymon { 0: 'lettuce', 1: 'onion', 2: 'garlic', 3: 'carrot', 4: 'lentice', length: 5 }

    console.log(food)
    // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', 9: 'lentice', length: 10 }
}


console.log('CASE merge fruits and veggies and meats')

{
    const fruits = new Dorraymon
    fruits[0] = 'apple'
    fruits[1] = 'orange'
    fruits[2] = 'lemon'
    fruits.length = 3

    const veggies = new Dorraymon
    veggies[0] = 'lettuce'
    veggies[1] = 'onion'
    veggies.length = 2

    const meats = new Dorraymon
    meats[0] = 'cow'
    meats[1] = 'salmon'
    meats[2] = 'pig'
    meats.length = 3

    const food = fruits.concat(veggies, meats)

    console.log(fruits)
    //Dorraymon { 0: 'apple',1:'orange' ,2: 'lemon', length:3 }
    console.log(veggies)
    //Dorraymon {0: 'lettuce', 1:'onion', length:2}
    console.log(meats)
    //Dorraymon {0: 'cow', 1:'salmon', 2:'pig', length:3}
    console.log(food)
    ///Dorraymon { 0: 'apple',1:'orange' ,2: 'lemon',3: 'lettuce', 4:'onion', 5:'cow', 6:'salmon', 7:'pig',lenght:8}
}

console.log('CASE merge fruits and veggies and meats and milkies')

{
    const fruits = new Dorraymon
    fruits[0] = 'apple'
    fruits[1] = 'orange'
    fruits[2] = 'lemon'
    fruits.length = 3

    const veggies = new Dorraymon
    veggies[0] = 'lettuce'
    veggies[1] = 'onion'
    veggies.length = 2

    const meats = new Dorraymon
    meats[0] = 'cow'
    meats[1] = 'salmon'
    meats[2] = 'pig'
    meats.length = 3

    const milkies = new Dorraymon
    milkies[0] = 'cheese'
    milkies[1] = 'yogurt'
    milkies.length = 2

    const food = fruits.concat(veggies, meats, milkies)
    console.log(fruits)
    // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
    console.log(veggies)
    // Dorraymon { 0: 'lettuce', 1: 'onion', length: 2 }
    console.log(meats)
    // Dorraymon { 0: 'cow', 1: 'salmon', 2: 'pig', length: 3 }
    console.log(milkies)
    // Dorraymon { 0: 'cheese', 1: 'yogurt', length: 2 }
    console.log(food)
    // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'lettuce', 4: 'onion', 5: 'cow', 6: 'salmon', 7: 'pig', 8: 'chees', 9: 'yogurt', length: 10 }
}

console.log('CASE merge fruits and veggies and meats and milkies')

{

    const fruits = new Dorraymon
    fruits[0] = 'apple'
    fruits[1] = 'orange'
    fruits[2] = 'lemon'
    fruits.length = 3
    const veggies = new Dorraymon
    veggies[0] = 'lettuce'
    veggies[1] = 'onion'
    veggies.length = 2
    const meats = new Dorraymon
    meats[0] = 'cow'
    meats[1] = 'salmon'
    meats[2] = 'pig'
    meats.length = 3
    const milkies = new Dorraymon
    milkies[0] = 'cheese'
    milkies[1] = 'yogurt'
    milkies.length = 2
    const drinks = new Dorraymon
    drinks[0] = 'beer'
    drinks[1] = 'wine'
    drinks[2] = 'champagne'
    drinks.length = 3
    const food = fruits.concat(veggies, meats, milkies, drinks)
    console.log(fruits)
    // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
    console.log(veggies)
    // Dorraymon { 0: 'lettuce', 1: 'onion', length: 2 }
    console.log(meats)
    // Dorraymon { 0: 'cow', 1: 'salmon', 2: 'pig', length: 3 }
    console.log(milkies)
    // Dorraymon { 0: 'cheese', 1: 'yogurt', length: 2 }
    console.log(drinks)
    // Dorraymon { 0: 'beer', 1: 'wine', 2: 'champagne', length: 3 }
    console.log(food)
    // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'lettuce', 4: 'onion', 5: 'cow', 6: 'salmon', 7: 'pig', 8: 'chees', 9: 'yogurt', 10: 'beer', 11: 'wine', 12: 'champagne', length: 13 }

    // TODO CASE concat non-dorraymon element (HINT use instanceof)
}