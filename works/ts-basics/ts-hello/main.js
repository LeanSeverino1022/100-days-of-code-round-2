"use strict";
// typescript - statically compiled language. for big projects, make sw robust. benefit is ts offers the ability to add static types to your Javascript code. Javascript is a dynamically typed language, which is one of its best or one of its worst features, depending on who you ask. IDE support. Browser compatibility with its transpiler which means you can use latest js features es6 for example
exports.__esModule = true;
var point_1 = require("./point");
// 
var count = 5;
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
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
// 3. Arrow functions - already learned on some other resources
//4. CUSTOM TYPES IN TS 
//instead of doing something like this
var drawPoint = function (x, y, a, b, c, d, e) {
    //...
};
//what if a lot of params are needed? not good sol, right? so we need interfaces.
var drawPoint2 = function (point) {
    //...
};
drawPoint2({
    x: 1,
    y: 2
});
var drawPoint3 = function (point) {
    //..
};
drawPoint3({
    x: 1,
    y: 2
});
var point2 = new point_1.Point2(5, 6);
var x = point2.x;
point2.x = 20;
point2.draw();
//ACCESS MODIFIERS IN CONSTRUCTOR PARAMETERS
// you can do constructor(private x?: number, private y?: number)
