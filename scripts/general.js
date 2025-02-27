const env = new Enviroment(100,100);

var canva = document.getElementById("enviroment");
var context = canva.getContext("2d");


function drawEnv(width, heigth, widtCell, heigthCell){
    
    context.lineWidth = 1;
    for (let x = 0; x < width; x += 10) {
        for (let y = 0; y < heigth; y += 10) {
            context.strokeRect(x,y,30,30);
        }
    }
}


console.log(env.width);

drawEnv( env.width, env.heigth, window.width/env.width, window.height/env.height);

