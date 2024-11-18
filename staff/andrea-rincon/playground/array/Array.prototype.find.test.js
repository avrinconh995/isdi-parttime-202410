console.log('TEST Array.prototype.find')
//instancias devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve .

console.log('CASE find Europa country visited')

var country = [
    { name: 'Alemania', city: 'Dusseldorf' },
    { name: 'Italy', city: 'Torino' },
    { name: 'Italy', city: 'Milan' },
    { name: 'Italy', city: 'Florencia' },
    { name: 'Luxemburgo', city: 'Luxemburgo' }
];

var city = country.find(function (city) {
    //if (country.name === 'Italy)
    //return true

    // return false
    return city.name === 'Alemania'
});

console.log(city)
//{name:'Alemania', city: 'Dusseldorf'}

console.log('TEST Array.prototype.find')

console.log('CASE Find sponge bob in characters')

var characters = [
    { name: 'Mickey Mouse', icon: '🐭' },
    { name: 'Tweety', icon: '🐥' },
    { name: 'Sponge Bob', icon: '🧽' },
    { name: 'Coyote', icon: '🦊' }
]
var character = characters.find(function (character) {
    return character.name === 'Sponge Bob'
})
console.log(character)
// { name: 'Sponge bob, icon: '🐥'}

console.log('CASE Find pink panther in characters')

var characters = [
    { name: 'Mickey Mouse', icon: '🐭' },
    { name: 'Tweety', icon: '🐥' },
    { name: 'Sponge Bob', icon: '🧽' },
    { name: 'Coyote', icon: '🦊' }
]
var character = characters.find(function (character) {
    return character.name === 'pink panther'
})
console.log(character)
// undefined