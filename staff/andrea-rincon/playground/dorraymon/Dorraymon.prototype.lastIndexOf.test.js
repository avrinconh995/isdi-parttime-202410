function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.lastIndexOf = function (index) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === index) {
            return i;
        }
    }
    return -1;
}




console.log('TEST Dorraymon.prototype.lastIdexOf');


console.log('CASE find the index of the last position of character The Bluey')

var bluey = new Dorraymon
bluey[0] = 'Bingo'
bluey[1] = 'Bluey'
bluey[2] = 'Bombom'
bluey[3] = 'Chloe'
bluey[4] = 'Coco'
bluey.length = 5

console.log(bluey.lastIndexOf('Chloe'));
//3

console.log(bluey.lastIndexOf('Chilli'))
//-1
