let x = 100;
let y = 100;


const env = new Enviroment(parseInt(x),parseInt(y));
let enviroment = document.getElementById('environment')
enviroment.style.display = "grid";
enviroment.style.gridTemplateColumns =  "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto ";

for (let index = 0; index < env.heigth * env.width ; index++) {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.style.background = "#F8FFE5"
    box.style.border = "solid 2px black";
    console.log(index);
    box.style.width = "auto";
    enviroment.appendChild(box);
}


document.getElementsByClassName("box");