let x = 100;
let y = 100;


const env = new Enviroment(parseInt(x),parseInt(y));
let enviroment = document.getElementById('environment')
enviroment.style.display = "grid";
let box = document.createElement('div');
box.setAttribute('class', 'box');
box.style.border = "solid 2px black";
console.log(String(env.heigth));
console.log(parseInt(env.heigth));

for (let index = 0; index < env.heigth ; index++) {
    
    console.log(index);
    box.style.width = "auto";
    enviroment.appendChild(box);
}


document.getElementsByClassName("box");