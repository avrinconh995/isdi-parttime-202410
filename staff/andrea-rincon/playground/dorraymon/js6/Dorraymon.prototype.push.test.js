class Dorraymon {
    constructor() {
        this.length = 0
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            const argument = arguments[i]
            this[this.length] = argument
            this.length++
        }
    }
}


console.log('TEST Dorraymon.prototype.push.test')

console.log('CASE add character to sponge bob characters')
{
    const chars = new Dorraymon
    chars[0] = 'Sponge Bob'
    chars[1] = 'Patrick Star'
    chars[2] = 'Squidward Tentacles'
    chars[3] = 'Gary Snail'
    chars.length = 4

    const length = chars.push('Sheldon Plankton')
    console.log(length)

    //5
    console.log(chars)
    //Dorraymon {0:'Sponge Bob', 1:'Patrick Star', 2:'Squidwar Tentacles',3: 'Gary Snail', 4:'Sheldon Plankton', length:5]
}

console.log('CASE add various html tags')

{
    const tags = new Dorraymon
    tags[0] = 'html'
    tags[1] = 'head'
    tags[2] = 'body'
    tags.length = 3

    const length = tags.push('h1', 'p', 'table', 'img', 'video')

    console.log(length)
    //8

    console.log(tags)
    //Dorraymon {0:'html',1:'head',2:'body',3"'h1',4:'p',5:'table',6:'img',7:'video', lenght:8]

}