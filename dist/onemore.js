"use strict";

var test = [Symbol('asdf'), Symbol('fdas')];
test.forEach(function (thing) {
  console.log(thing);
});