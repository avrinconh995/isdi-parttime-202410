console.log('TEST Array.prototype.some')
//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

console.log('CASE check if Fiat Punto exist in cars array')

var cars = [
    { brand: 'Ferrari', model: 'Enzo' },
    { brand: 'Fiat', model: 'Punto' },
    { brand: 'Seat', model: 'Ibiza' }
]

var carCheck = cars.some(function (car) {
    return car.brand === 'Fiat' && car.model === 'Punto'
})

console.log(carCheck)
//true

console.log('CASE check if Audi A3 exist in cars array')

var cars = [
    { brand: 'Ferrari', model: 'Enzo' },
    { brand: 'Fiat', model: 'Punto' },
    { brand: 'Seat', model: 'Ibiza' }
]

var carCheck = cars.some(function (car) {
    return car.brand === 'Audi' && car.model === 'A3'
})

console.log(carCheck)
//false