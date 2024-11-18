function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.some = function (condition) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var fulfills = condition(element)

        if (fulfills) return true
    }
    return false
}




console.log('TEST Dorraymon.prototype.some')

console.log('CASE check if Fiat Punto exist in cars array')

var cars = new Dorraymon
cars[0] = { brand: 'Ferrari', model: 'Enzo' }
cars[1] = { brand: 'Fiat', model: 'Punto' }
cars[2] = { brand: 'Seat', model: 'Ibiza' }
cars.length = 3

var carCheck = cars.some(function (car) {
    return car.brand === 'Fiat' && car.model === 'Punto'
})

console.log(carCheck)
//true

console.log('CASE check if Audi A3 exist in cars array')

var cars = new Dorraymon
cars[0] = { brand: 'Ferrari', model: 'Enzo' }
cars[1] = { brand: 'Fiat', model: 'Punto' }
cars[2] = { brand: 'Seat', model: 'Ibiza' }
cars.length = 3


var carCheck = cars.some(function (car) {
    return car.brand === 'Audi' && car.model === 'A3'
})

console.log(carCheck)
//false