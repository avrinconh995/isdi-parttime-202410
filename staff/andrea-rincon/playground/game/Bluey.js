function Bluey() {
    MovableThing.call(this, document.createElement('div'))

    this.setSize(200, 100)

    var blueyRunImage = document.createElement('img')
    blueyRunImage.src = 'images/bluey-jump.png'
    blueyRunImage.style.width = '190px'
    blueyRunImage.style.left = '50px'
    blueyRunImage.style.position = 'absolute'
    blueyRunImage.style.left = '15px'
    blueyRunImage.style.top = '14px'
    this.container.appendChild(blueyRunImage)

    var blueyJumpImage = document.createElement('img')
    blueyJumpImage.src = 'images/bluey-happy.png'
    blueyJumpImage.style.width = '190px'
    blueyJumpImage.style.position = 'absolute'
    blueyRunImage.style.left = '15px'
    blueyRunImage.style.top = '14px'
    //bluey.appendChild(blueyJumpImage)

    this.attacking = false

    this.attackKey = ' '

    document.addEventListener('keydown', function (event) {
        console.log(event.key)
        if (event.key === this.attackKey)
            if (this.attacking) {
                this.container.removeChild(blueyRunImage)
                this.container.appendChild(blueyJumpImage)

                this.attacking = false
            } else {
                this.container.removeChild(blueyJumpImage)
                this.container.appendChild(blueyRunImage)

                this.attacking = true
            }
    }.bind(this))
}

Bluey.prototype = Object.create(MovableThing.prototype)
Bluey.prototype.constructor = Bluey

Bluey.prototype.setAttackKey = function (attackKey) {
    this.attackKey = attackKey
}