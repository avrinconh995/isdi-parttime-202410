var root = document.body.querySelector('#root')

//fondo
// var body = document.body;
// body.style.margin = '0';
// body.style.padding = '0';
// body.style.backgroundSize = 'cover';
// body.style.width = '100%';
// body.style.height = '100vh';
// body.style.backgroundImage = 'url("images/Patiobluey.png")';
// body.style.backgroundPosition = 'center';
// body.style.backgroundRepeat = 'no-repeat';


root.style.backgroundImage = 'url("images/Patiobluey.png")';
root.style.backgroundSize = 'cover';
root.style.backgroundPosition = 'center';
root.style.backgroundRepeat = 'no-repeat';
root.style.width = '100%';  // Asegúrate de que el contenedor ocupe todo el ancho
root.style.height = '100vh';

var bluey = new Thing(document.createElement('div'))
bluey.setSize(200, 100)


//bluey.style.backgroundColor = 'green'

root.appendChild(bluey.container)



var blueyRunImage = document.createElement('img')
blueyRunImage.src = 'images/bluey-jump.png'
blueyRunImage.style.width = '200px'
blueyRunImage.style.left = '50px'
blueyRunImage.style.position = 'absolute'
bluey.container.appendChild(blueyRunImage)



var blueyJumpImage = document.createElement('img')
blueyJumpImage.src = 'images/bluey-happy.png'
blueyJumpImage.style.width = '200px'
blueyJumpImage.style.position = 'absolute'
//bluey.appendChild(blueyJumpImage)

bluey.setXY(0, 500)

var STEP = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'k') {
        bluey.container.removeChild(blueyRunImage)
        bluey.container.appendChild(blueyJumpImage)
    } else if (event.key === 'n') {
        bluey.container.removeChild(blueyJumpImage)
        bluey.container.appendChild(blueyRunImage)
    } else if (event.key === 'ArrowUp') {
        bluey.moveY(-STEP)
    } else if (event.key === 'ArrowDown') {
        bluey.moveY(STEP)
    } else if (event.key === 'ArrowLeft') {
        bluey.moveX(-STEP)
    } else if (event.key === 'ArrowRight') {
        bluey.moveX(STEP)
    }
})

var bingo = new Thing(document.createElement('div'))
bingo.setSize(200, 100)


//bingo.style.backgroundColor = 'green'

root.appendChild(bingo.container)


var bingoRunImage = document.createElement('img')
bingoRunImage.src = 'images/bingo-running.png'
bingoRunImage.style.width = '300px'
//bingoRunImage.style.right = '100px'
//bingoRunImage.style.position = 'absolute'
bingo.container.appendChild(bingoRunImage)



var bingoJumpImage = document.createElement('img')
bingoJumpImage.src = 'images/bingo-jump.png'
bingoJumpImage.style.width = '550px'
bingoJumpImage.style.position = 'absolute'
//bingo.appendChild(bingoJumpImage)

bingo.setXY(0, 500)

var STEP = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'l') {
        bingo.container.removeChild(bingoRunImage)
        bingo.container.appendChild(bingoJumpImage)
    } else if (event.key === 'm') {
        bingo.container.removeChild(bingoJumpImage)
        bingo.container.appendChild(bingoRunImage)
    } else if (event.key === 'w') {
        bingo.moveY(-STEP)
    } else if (event.key === 's') {
        bingo.moveY(STEP)
    } else if (event.key === 'a') {
        bingo.moveX(-STEP)
    } else if (event.key === 'd') {
        bingo.moveX(STEP)
    }
})




