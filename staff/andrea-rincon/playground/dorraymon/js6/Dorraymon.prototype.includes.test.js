class Dorraymon {
    constructor() {
        this.length = 0
    }

    includes(value) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return true;
            }
        } return false;
    }
}

console.log('TEST Dorraymon.prototype.includes')

console.log('CASE name the main characters of bluey')

const bluey = new Dorraymon
bluey[0] = 'Bluey'
bluey[1] = 'Bingo'
bluey[2] = 'Mum/Chili'
bluey[3] = 'Dad/Brandit'
bluey[4] = 'Indi'
bluey.length = 5

console.log(bluey.includes('Mum/Chili'))
//true

console.log(bluey.includes('Pompon'))
//false