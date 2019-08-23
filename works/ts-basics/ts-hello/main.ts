import { Point2 } from './point';

let count = 5;
count = 2;

// let a:number;
// let b:boolean;
// let c:string;
// let d:any;
// let e:number[] = [1,2,3];
// let f: any[] = [2,true,'a'];

// enum Color {Red = 0 , Green = 1, Blue = 2 };
// let backgroundColor = Color.Blue;


// 2. TYPE ASSERTIONS

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// 3. Arrow functions - already learned on some other resources



//instead of doing something like this
let drawPoint = (x,y, a, b, c, d, e) => {
    //...
}

//what if a lot of params are needed? not good sol, right? so we need interfaces.
let drawPoint2 = (point: {x: number, y: number }) => {
    //...
}
    
drawPoint2({
    x: 1,
    y: 2
})

//4.5 INTERFACES - a structure that defines the contract in your application. 

//define an interface. Note pascal case for interface. The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking.
interface Point {
    x: number,
    y: number,

}

let drawPoint3 = (point: Point) => {
    //..
}

drawPoint3({
    x: 1,
    y: 2
})


let point2 = new Point2(5,6);
let x = point2.x;
point2.x = 20;
point2.draw();


//ACCESS MODIFIERS IN CONSTRUCTOR PARAMETERS
// you can do constructor(private x?: number, private y?: number)



