"use strict";

const {MyMath} = require("./MyMath");
const {Component} = require("./Component");


// console.log("Hello node!");
const result = MyMath.sum(10,10)
console.log("result = ",result);
const component1 = new Component()
component1.render()