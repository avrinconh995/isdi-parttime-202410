class Dorraymon {
    constructor() {
        this.length = 0
    }

    pop() {
        if (this.length <= 0) {
            return undefined
        }
        const lastelement = this[this.length - 1]
        this.length--
        delete this[this.length]
        return lastelement
    }

}


console.log('TEST Dorraymon.prototype.pop')

console.log('CASE remove the last characters from Sheriff Labrador')
{
    const sheriff = new Dorraymon
    sheriff[0] = 'Sheriff Labrador'
    sheriff[1] = 'Sheriff Dobie'
    sheriff[2] = 'Sheriff Papillon'
    sheriff[3] = ['Rubi', 'Cornelia']
    sheriff.length = 4

    console.log(sheriff)
    // Dorraymon {0: 'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon', 3: ['Rubi', 'Cornelia']}

    const sheriffRemoved = sheriff.pop()
    console.log(sheriffRemoved)
    //['Rubi', 'Cornelia']

    console.log(sheriff)
    // Dorraymon {0:'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon', length:3}
}

console.log('TEST Dorraymon.prototype.pop')

console.log('CASE remove the last characters from Sheriff Labrador')

{
    const sheriff = new Dorraymon
    sheriff[0] = 'Sheriff Labrador'
    sheriff[1] = 'Sheriff Dobie'
    sheriff[2] = 'Sheriff Papillon'
    sheriff[3] = 'Rubi'
    sheriff[4] = 'Cornelia'
    sheriff.length = 5

    console.log(sheriff)
    // Dorraymon {0: 'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon', 3: 'Rubi', 4:'Cornelia', length:5}

    const sheriffRemoved = sheriff.pop()
    console.log(sheriffRemoved)
    //'cornelia

    console.log(sheriff)
    // Dorraymon {0:'Sheriff Labrador', 1: 'Sheriff Dobie', 2: 'Sheriff Papillon', 3:'Rubi', length:4}
}