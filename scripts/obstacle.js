class Obstacle{
    constructor(x1,y1,x2,y2){
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
    }


    isUnder(x,y){
        return (x >= x1 && x <= x2) && (y >= y1 && y <= y2);
    }
}