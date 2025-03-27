let x = 10;
let y = 10;


const env = new Enviroment(parseInt(x),parseInt(y));
let enviroment = document.getElementById('environment')
let obstacle = new obstacle
enviroment.style.display = "grid";
enviroment.style.gridTemplateColumns =  "auto auto auto auto auto auto auto auto auto auto";// auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto ";

for (let index = 0; index < env.heigth * env.width; index++) {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.style.background = "#F8FFE5"
    box.style.border = "solid 1px black";
    console.log(index);
    box.style.width = "auto";
    enviroment.appendChild(box);
}

const bot = new Automaton(0,0,env, new State(25,25,1,0,null));
const arrGrid = document.getElementsByClassName('box');
const path = bot.aStar();
let p = null;


for(let s of path){
    setTimeout(500, function (s){
        if(!p == null){
            arrGrid[p.x * 10 + p.y].style.background = bot.colorOld;
        }
        arrGrid[s.x * 10 + s.y].style.background = bot.colorNew;
    })

    p = s;
}


console.log(document.getElementsByClassName("box")[0].offsetHeigth());