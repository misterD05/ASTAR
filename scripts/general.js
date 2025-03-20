let x = 100;
let y = 100;


const env = new Enviroment(parseInt(x),parseInt(y));
let enviroment = document.getElementById('environment')
enviroment.style.display = "grid";

for (let index = 0; index < env.heigth ; index++) {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.style.border = "solid 2px black";
    console.log(index);
    box.style.width = "auto";
    enviroment.appendChild(box);
}


document.getElementsByClassName("box");