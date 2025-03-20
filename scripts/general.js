const env = new Enviroment(100,100);
let enviroment = document.getElementById('environment')
enviroment.style.display = "grid";
let box = document.createElement('div');
box.setAttribute('class', 'box');
box.style.border = "solid 2px black";
console.log(str(env.heigth))
console.log(parseInt(env.heigth))

for (let index = 0; index < env.heigth ; index++) {
    
    console.log(index);
    box.style.width = "auto";
    enviroment.appendChild(box);
}


document.getElementsByClassName("box");