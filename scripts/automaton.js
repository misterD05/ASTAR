class Automaton{

    expandable = [];
    expanded = [];
    colorNew = "red"; 
    colorOld = "yellow";

    constructor(x, y, env, goalX, goalY){
        this.initalX = x;
        this.initialY = y;
        this.env = env;
        this.goalX = goalX;
        this.goalY = goalY;
    }

    getSuccessors(state){
        let successors = [];
        let x = state.x;
        let y = state.y;
        x++;
        if(x < this.env.width){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }
        x-=2;
        if(x >= 0){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }
        x++;
        y++;
        if(y < this.env.height){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }
        y -= 2;
        if(y >= 0){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }

        this.removeExpandedSuccessors(successors);

        return successors;
    }

    removeExpandedSuccessors(successors){
        for (let i = 0; i < this.expanded.length; i++){
            for (let j = 0; j < successors.length; j++){
                if(this.expanded[i].isEqual(successors[j])){
                    if(successors[j].g < this.expanded[i].g){
                        this.expanded[i].g = successors[j].g;
                        this.expanded[i].previous = successors[j].previous;
                    }
                    successors.splice(j, 1);
                }
            }
        }
        for (let i = 0; i < this.expandable.length; i++){
            for (let j = 0; j < successors.length; j++){
                if(this.expandable[i].isEqual(successors[j])){
                    if(successors[j].g < this.expandable[i].g){
                        this.expandable[i].g = successors[j].g;
                        this.expandable[i].previous = successors[j].previous;
                    }
                    successors.splice(j, 1);
                }
            }
        }
    }

    getPosLowestF(){
        let minF = 1000000;
        let posMinF = 0;
        for(let i = 0; i < this.expandable.length; i++){
            if(this.expandable[i].f() < minF){
                minF = this.expandable[i].f();
                posMinF = i;
            }
        }
        return posMinF;
    }

    aStar(){
        this.expandable.push(new State(this.initalX, this.initialY, 0, this.heuristic(this.initalX, this.initialY), null));
        do{
            let posMinF = this.getPosLowestF();
            console.log("PosMinF: " + posMinF);
            console.log("heuristics: " + this.expandable[posMinF]);
            if(this.expandable[posMinF].h == 0){
                let path = [];
                let state = this.expandable[posMinF];

                while(state.previous != null){
                    path.push(state);
                    state = state.previous;
                }

                return path.reverse();
            }
            let successors = this.getSuccessors(this.expandable[posMinF]);
            this.expanded.push(this.expandable[posMinF]);
            this.expandable.splice(posMinF, 1);
            this.expandable = this.expandable.concat(successors);
        }while(this.expandable.length > 0);
        return [];
    }

    heuristic(stateX, stateY){
        return Math.abs(stateX - this.goalX) + 
        Math.abs(stateY - this.goalY);
    }


}