class Dorraymon {
    constructor() {
        this.length = 0
    }

    some(condition) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            const fulfills = condition(element)

            if (fulfills) return true
        }
        return false
    }
}



console.log('TEST Dorraymon.prototype.some')

console.log('CASE check if Fiat Punto exist in cars array')

{
    const cars = new Dorraymon
    cars[0] = { brand: 'Ferrari', model: 'Enzo' }
    cars[1] = { brand: 'Fiat', model: 'Punto' }
    cars[2] = { brand: 'Seat', model: 'Ibiza' }
    cars.length = 3

    const carCheck = cars.some(function (car) {
        return car.brand === 'Fiat' && car.model === 'Punto'
    })

    console.log(carCheck)
    //true
}

console.log('CASE check if Audi A3 exist in cars array')

{
    const cars = new Dorraymon
    cars[0] = { brand: 'Ferrari', model: 'Enzo' }
    cars[1] = { brand: 'Fiat', model: 'Punto' }
    cars[2] = { brand: 'Seat', model: 'Ibiza' }
    cars.length = 3


    const carCheck = cars.some(function (car) {
        return car.brand === 'Audi' && car.model === 'A3'
    })

    console.log(carCheck)
    //false
}