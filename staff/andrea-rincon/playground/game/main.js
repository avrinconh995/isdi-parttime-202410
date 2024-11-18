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

var bluey = new Bluey
bluey.setMovingKeys('w', 's', 'a', 'd')
bluey.setAttackKey('z')
root.appendChild(bluey)
bluey.setXY(300, 500)

var bluey2 = new Bluey
bluey2.setMovingKeys('ñ', '.', ',', '-')
root.appendChild(bluey2)
bluey2.setXY(300, 400)


var bingo = new Bingo
bingo.setMovingKeys('i', 'k', 'j', 'l')
bingo.setAttackKey('x')
root.appendChild(bingo)
bingo.setXY(0, 500)

var bingo2 = new Bingo
bingo2.setMovingKeys('t', 'g', 'f', 'h')
root.appendChild(bingo2)
bingo2.setXY(0, 800)






