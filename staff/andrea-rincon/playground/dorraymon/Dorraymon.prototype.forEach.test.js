function Dorraymon() {
    this.length = 0;
}

Dorraymon.prototype.forEach = function (condition) {
    for (var i = 0; i < this.length; i++) {
        condition(this[i]);
    }
};



console.log('TEST Dorraymon.prototype.forEach')
//El forEach()método de Arrayinstancias ejecuta una función proporcionada una vez para cada elemento de la matriz.

console.log('CASE display each spooky character in array')

var spookyCharacters = new Dorraymon
spookyCharacters[0] = { name: 'Vampire', icon: '🧛' }
spookyCharacters[1] = { name: 'Zombie', icon: '🧟‍♀️' }
spookyCharacters[2] = { name: 'Ghost', icon: '👻' }
spookyCharacters[3] = { name: 'Skeleton', icon: '🩻' }
spookyCharacters.length = 4

var displaySpookyCharacters = spookyCharacters.forEach(function (spookyCharacter) {
    console.log(spookyCharacter.icon)
})

console.log(displaySpookyCharacters)
//'🧛'
// '🧟‍♀️'
// '👻'
// '🩻'

console.log('CASE display The Bluey characters in Array')

var theBluey = new Dorraymon
theBluey[0] = { name: 'Bingo', age: '4' }
theBluey[1] = { name: 'Bluey', age: '6' }
theBluey[2] = { name: 'Tía Trixi', age: '30' }
theBluey[3] = { name: 'Brandit', age: '36' }
theBluey[4] = { name: 'Chili', age: '34' }
theBluey.length = 5

var blueyCharacters = theBluey.forEach(function (blueyCharacter) {
    console.log(blueyCharacter)
})

console.log(blueyCharacters)
//{name: 'Bingo', age: '4'},
//{name: 'Bluey', age: '6'},
//{name: 'Tía Trixi', age: '30'},
//{name: 'Brandit', age: '36'},
//{name: 'Chili', age:'34'}

var blueyCharacters = theBluey.forEach(function (blueyCharacter) {
    console.log(blueyCharacter.age)
})

console.log(blueyCharacters)
// Dorraymon 0:{ age: '4'},
// Dorratmon 1:{ age: '6'},
// Dorratmon 2:{ age: '30'},
// Dorratmon 3:{ age: '36'},
// Dorratmon 4:{'34'} 
