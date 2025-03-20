const env = new Enviroment(100,100);
let enviroment = document.getElementById('environment')
enviroment.style.display = "grid";
let box = document.createElement('div');
box.setAttribute('class', 'box');
box.style.border = "solid 2px black";
console.log("ciao")

for (let index = 0; index < env.height; index++) {
    
    box.style.width = "auto";
    enviroment.appendChild(box);
    console.log(index);
}


document.getElementsByClassName("box");