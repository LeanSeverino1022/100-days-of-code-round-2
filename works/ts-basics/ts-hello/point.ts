
//CLASSes, OBJECTS,CONSTRUCTORS, Access Modifiers,  Properties
export class Point2 {

    constructor(private _x?: number, private y?: number ){
    }

    draw() {
        console.log('X: ' + this._x + ' Y: ' + this.y);
    }  
   
    get x() {
        return this._x;
    }

    set x(value){
        if(value < 0){
            throw new Error
        }

        this._x = value;
    }
}