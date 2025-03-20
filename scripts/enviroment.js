class Enviroment{
    obstacles = [];

    cosntructor(width, heigth){
        this._width = width;
        this._heigth = heigth;
    }


    addObstacle(o){
        this.obstacles.push(o);
    }


    underObstacle(x, y){
        for (const o of this.obstacles) {
            if(o.isUnder(x, y)){
                return true;
            }
        }

        return false;
    }

}