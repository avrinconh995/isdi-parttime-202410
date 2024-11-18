class Dorraymon {
    constructor() {
        this.length = 0
    }

    indexOf(index) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === index) {
                return i;
            }
        }
        return -1;
    }
}

console.log('TEST Dorraymon.prototype.indexOf')

console.log('CASE meet the kids characters of Bluey')

const characters = new Dorraymon
characters[0] = 'Bluey'
characters[1] = 'Bingo'
characters[2] = 'Pompon'
characters[3] = 'Indi'
characters[4] = 'Coco'
characters[5] = 'Chloe'
characters.length = 6

console.log(characters.indexOf('Bingo'))
//1

console.log(characters.indexOf('Chloe'))
//5

