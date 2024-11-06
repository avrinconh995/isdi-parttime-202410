console.log('TEST Array.prototype.forEach')
//El forEach()método de Arrayinstancias ejecuta una función proporcionada una vez para cada elemento de la matriz.

console.log('CASE display each spooky character in array')

var spookyCharacters = [
    { name: 'Vampire', icon: '🧛' },
    { name: 'Zombie', icon: '🧟‍♀️' },
    { name: 'Ghost', icon: '👻' },
    { name: 'Skeleton', icon: '🩻' }
]

var displaySpookyCharacters = spookyCharacters.forEach(function (spookyCharacter) {
    console.log(spookyCharacter.icon)
})

console.log(displaySpookyCharacters)
//'🧛'
// '🧟‍♀️'
// '👻'
// '🩻'

console.log('CASE display The Bluey characters in Array')

var theBluey = [
    { name: 'Bingo', age: '4' },
    { name: 'Bluey', age: '6' },
    { name: 'Tía Trixi', age: '30' },
    { name: 'Brandit', age: '36' },
    { name: 'Chili', age: '34' }
]

var blueyCharacters = theBluey.forEach(function (blueyCharacter) {
    console.log(blueyCharacter)
})

console.log(blueyCharacters)
//{name: 'Bingo', age: '4'},
//{name: 'Bluey', age: '6'},
//{name: 'Tía Trixi', age: '30'},
//{name: 'Brandit', age: '36'},
//{name: 'Chili', age:'34'}
