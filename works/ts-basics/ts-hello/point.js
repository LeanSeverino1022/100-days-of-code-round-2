"use strict";
exports.__esModule = true;
//CLASSes, OBJECTS,CONSTRUCTORS, Access Modifiers,  Properties
var Point2 = /** @class */ (function () {
    function Point2(_x, y) {
        this._x = _x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('X: ' + this._x + ' Y: ' + this.y);
    };
    Object.defineProperty(Point2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error;
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point2;
}());
exports.Point2 = Point2;
