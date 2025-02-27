class State{

    constructor(x, y, g, h, previous){
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.previous = previous;
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