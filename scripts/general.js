let x = 10;
let y = 10;


const env = new Enviroment(parseInt(x),parseInt(y));
let enviroment = document.getElementById('environment')
let obstacle = new Obstacle(1,1,7,7);
//let obstacle2 = new Obstacle(,,24,12);

env.addObstacle(obstacle);
//env.addObstacle(obstacle2);
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


for(let o of env.obstacles){
    for (let i = 0; i < (o.x2 - o.x1); i++) {
        for (let j = 0; j < (o.y2 - o.y1);j ++) {
            arrGrid[i*10 + j].style.background = "black";
        }        
    }
}

for(let s of path){
    setTimeout(500, function (s){
        if(!p == null){
            arrGrid[p.x * 10 + p.y].style.background = bot.colorOld;
        }
        arrGrid[s.x * 10 + s.y].style.background = bot.colorNew;
    })

    p = s;
}


console.log(document.getElementsByClassName("box")[0].offsetHeigth);