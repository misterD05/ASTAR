import Enviroment from "./enviroment.js";
const env = new Enviroment(100,100);

var canva = document.getElementById("enviroment");
var context = canva.getContext("2d");


context.fillStyle = "#FF0000";
context.fillRect(0,0,20,20);
