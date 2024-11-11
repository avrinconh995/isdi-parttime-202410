var root = document.body.querySelector('#root')

var body = document.body;
body.style.margin = '0';
body.style.padding = '0';
body.style.backgroundSize = 'cover';
body.style.width = '100%';
body.style.height = '100vh';
body.style.backgroundImage = 'url("images/Patiobluey.png")';
body.style.backgroundPosition = 'center';
body.style.backgroundRepeat = 'no-repeat';


//root.style.backgroundImage = 'url("images/Patiobluey.png")';
//root.style.backgroundSize = 'cover';
//root.style.backgroundPosition = 'center';
//root.style.backgroundRepeat = 'no-repeat';
//root.style.width = '100%';  // Asegúrate de que el contenedor ocupe todo el ancho
//root.style.height = '100vh';

var bluey = document.createElement('div')
bluey.style.width = '200px'
bluey.style.height = '100px'
//bluey.style.backgroundColor = 'green'
bluey.style.position = 'absolute'
root.appendChild(bluey)



var blueyRunImage = document.createElement('img')
blueyRunImage.src = 'images/bluey-jump.png'
blueyRunImage.style.width = '200px'
blueyRunImage.style.left = '50px'
blueyRunImage.style.position = 'absolute'
bluey.appendChild(blueyRunImage)



var blueyJumpImage = document.createElement('img')
blueyJumpImage.src = 'images/bluey-happy.png'
blueyJumpImage.style.width = '200px'
blueyJumpImage.style.position = 'absolute'
//bluey.appendChild(blueyJumpImage)

var blueyCoords = {
    x: 0,
    y: 500
}
bluey.style.left = blueyCoords.x + 'px'
bluey.style.top = blueyCoords.y + 'px'

var STEP = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'k') {
        bluey.removeChild(blueyRunImage)
        bluey.appendChild(blueyJumpImage)
    } else if (event.key === 'n') {
        bluey.removeChild(blueyJumpImage)
        bluey.appendChild(blueyRunImage)
    } else if (event.key === 'ArrowUp') {
        blueyCoords.y -= STEP

        bluey.style.top = blueyCoords.y + 'px'
    } else if (event.key === 'ArrowDown') {
        blueyCoords.y += STEP

        bluey.style.top = blueyCoords.y + 'px'
    } else if (event.key === 'ArrowLeft') {
        blueyCoords.x -= STEP

        bluey.style.left = blueyCoords.x + 'px'
    } else if (event.key === 'ArrowRight') {
        blueyCoords.x += STEP

        bluey.style.left = blueyCoords.x + 'px'
    }
})

var bingo = document.createElement('div')
bingo.style.width = '200px'
bingo.style.height = '100px'
//bingo.style.backgroundColor = 'green'
bingo.style.position = 'absolute'
root.appendChild(bingo)


var bingoRunImage = document.createElement('img')
bingoRunImage.src = 'images/bingo-running.png'
bingoRunImage.style.width = '300px'
//bingoRunImage.style.right = '100px'
//bingoRunImage.style.position = 'absolute'
bingo.appendChild(bingoRunImage)



var bingoJumpImage = document.createElement('img')
bingoJumpImage.src = 'images/bingo-jump.png'
bingoJumpImage.style.width = '550px'
bingoJumpImage.style.position = 'absolute'
//bingo.appendChild(bingoJumpImage)

var bingoCoords = {
    x: 0,
    y: 250
}
bingo.style.left = bingoCoords.x + 'px'
bingo.style.top = bingoCoords.y + 'px'

var STEP = 10

document.addEventListener('keydown', function (event) {
    if (event.key === 'l') {
        bingo.removeChild(bingoRunImage)
        bingo.appendChild(bingoJumpImage)
    } else if (event.key === 'm') {
        bingo.removeChild(bingoJumpImage)
        bingo.appendChild(bingoRunImage)
    } else if (event.key === 'w') {
        bingoCoords.y -= STEP

        bingo.style.top = bingoCoords.y + 'px'
    } else if (event.key === 's') {
        bingoCoords.y += STEP

        bingo.style.top = bingoCoords.y + 'px'
    } else if (event.key === 'a') {
        bingoCoords.x -= STEP

        bingo.style.left = bingoCoords.x + 'px'
    } else if (event.key === 'd') {
        bingoCoords.x += STEP

        bingo.style.left = bingoCoords.x + 'px'
    }
})




