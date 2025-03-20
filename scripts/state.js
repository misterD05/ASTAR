class State{

    constructor(x, y, g, h, previous){
        this._x = x;
        this._y = y;
        this._g = g;
        this._h = h;
        this._previous = previous;
    }



    g(){
        if(this.previous != null){
            return this.previous.g() + 1;
        }
        return 0;
    }

    f(){
        return this.g + this.h;
    }

    isEqual(state){
        return state.x == this.x && state.y == this.y; 
    }

}