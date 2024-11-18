function Bingo() {
    MovableThing.call(this, document.createElement('div'))

    this.setSize(200, 100)



    var bingoRunImage = document.createElement('img')
    bingoRunImage.src = 'images/bingo-running.png'
    bingoRunImage.style.width = '300px'
    bingoRunImage.style.position = 'absolute'
    bingoRunImage.style.left = '15px'
    bingoRunImage.style.top = '14px'
    this.container.appendChild(bingoRunImage)



    var bingoJumpImage = document.createElement('img')
    bingoJumpImage.src = 'images/bingo-jump.png'
    bingoJumpImage.style.width = '550px'
    bingoJumpImage.style.position = 'absolute'
    bingoJumpImage.style.left = '15px'
    bingoJumpImage.style.right = '300px'
    bingoJumpImage.style.top = '14px'
    bingoJumpImage.style.zIndex = 1
    //bingo.appendChild(bingoJumpImage)

    this.attacking = false

    this.attackKey = ' '

    document.addEventListener('keydown', function (event) {
        console.log(event.key)
        if (event.key === this.attackKey)
            if (this.attacking) {
                this.container.removeChild(bingoRunImage)
                this.container.appendChild(bingoJumpImage)

                this.attacking = false

            } else {
                this.container.removeChild(bingoJumpImage)
                this.container.appendChild(bingoRunImage)

                this.attacking = true
            }
    }.bind(this))
}

Bingo.prototype = Object.create(MovableThing.prototype)
Bingo.prototype.constructor = Bingo

Bingo.prototype.setAttackKey = function (attackKey) {
    this.attackKey = attackKey
}
