"use strict";
/**
 * * The Extract utility type lets us check a union type for a specific members, and returns a new type based on what is left over. It's the opposite type of the Exclude type.
 *
 * * Syntax: Extract<UnionType or EnumType, ExtractedMembers>
 */
exports.__esModule = true;
/**
 * * Example 2
 */
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var testObj = {
    animationDirection: Direction.Down,
    animationDuration: 0.7
};
var user = {
    name: 'Bablu Ahmed',
    age: 30
};
