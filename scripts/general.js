const env = new Enviroment(100,100);
console.log("ciao")
let enviroment = document.getElementsByClassName("environment");
enviroment.style.display = "grid";
let box = document.createElement('div');
box.setAttribute('class', 'box');
box.style.border = "solid 2px black";

for (let index = 0; index < env.heigth; index++) {
    box.style.heigth = "" + enviroment.heigth/env.heigth + "px";
    box.style.width = "auto";
    enviroment.appendChild(box);
    console.log(index);
}