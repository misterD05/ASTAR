const env = new Enviroment(100,100);
console.log("ciao")
let enviroment = document.getElementById('environment')
enviroment.style.display = "grid";
let box = document.createElement('div');
box.setAttribute('class', 'box');
box.style.border = "solid 2px black";

for (let index = 0; index < env.heigth; index++) {
    
    box.style.width = "auto";
    enviroment.appendChild(box);
    console.log(index);
}


document.getElementsByClassName("box");