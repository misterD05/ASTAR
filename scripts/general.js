const env = new Enviroment(100,100);

let enviroment = document.getElementsByClassName("environment");
let box = "<div class='box'></div>";
box.style.border = "solid 2px black";

for (let index = 0; index < env.heigth; index++) {
    box.style.heigth = "" + enviroment.heigth/env.heigth + "px";
    box.style.width = "auto";
    enviroment.appendChild(box);
}