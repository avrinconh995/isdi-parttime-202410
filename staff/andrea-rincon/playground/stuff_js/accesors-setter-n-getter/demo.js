var car = {
    set brand(brand) { throw new Error('cannot chande brand') },
    get brand() { return 'ferrari' },

    set model(model) { throw new Error('cannot change model') },
    get model() { return '350' }
}

console.log(car.brand, car.model)