function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.find = function (condition) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var fulfills = condition(element)

        if (fulfills) return element
    }

    //return undefined
}


console.log('TEST Dorraymon.prototype.find')

console.log('CASE find Europa country visited ')

var country = new Dorraymon
country[0] = { name: 'Alemania', city: 'Dusseldorf' }
country[1] = { name: 'Italy', city: 'Torino' }
country[2] = { name: 'Italy', city: 'Milan' }
country[3] = { name: 'Italy', city: 'Florencia' }
country[4] = { name: 'Luxemburgo', city: 'Luxemburgo' }
country.length = 5

var countrys = country.find(function (countrys) {
    return countrys.name === 'Luxemburgo'
})

console.log(countrys)
//Dorraymon { name: 'Luxemburgo', city: 'Luxemburgo' }

console.log('CASE find pink panther in characters')

var characters = new Dorraymon
characters[0] = { name: 'Mickey Mouse', icon: '🐭' }
characters[1] = { name: 'Tweety', icon: '🐥' }
characters[2] = { name: 'Sponge Bob', icon: '🧽' }
characters[3] = { name: 'Coyote', icon: '🦊' }

var character = characters.find(function (character) {
    return character.name === 'pink panther'
})
console.log(character)
// undefined