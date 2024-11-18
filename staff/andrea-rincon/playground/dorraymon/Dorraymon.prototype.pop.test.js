function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.pop = function () {
    if (this.length <= 0) {
        return undefined
    }
    var lastelement = this[this.length - 1]
    this.length--
    delete this[this.length]
    return lastelement
}




console.log('TEST Dorraymon.prototype.pop')

console.log('CASE remove the last characters from Sheriff Labrador')

var sheriff = new Dorraymon
sheriff[0] = 'Sheriff Labrador'
sheriff[1] = 'Sheriff Dobie'
sheriff[2] = 'Sheriff Papillon'
sheriff[3] = ['Rubi', 'Cornelia']
sheriff.length = 4

console.log(sheriff)
// Dorraymon {0: 'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon', 3: ['Rubi', 'Cornelia']}

var sheriffRemoved = sheriff.pop()
console.log(sheriffRemoved)
//['Rubi', 'Cornelia']

console.log(sheriff)
// Dorraymon {0:'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon'}

console.log('TEST Dorraymon.prototype.pop')

console.log('CASE remove the last characters from Sheriff Labrador')

var sheriff = new Dorraymon
sheriff[0] = 'Sheriff Labrador'
sheriff[1] = 'Sheriff Dobie'
sheriff[2] = 'Sheriff Papillon'
sheriff[3] = 'Rubi'
sheriff[4] = 'Cornelia'
sheriff.length = 5

console.log(sheriff)
// Dorraymon {0: 'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon', 3: 'Rubi', 4:'Cornelia', length:5}

var sheriffRemoved = sheriff.pop()
console.log(sheriffRemoved)
//'cornelia

console.log(sheriff)
// Dorraymon {0:'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon', 3:'Rubi'}