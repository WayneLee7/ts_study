"use strict";
function dosomething(fn) {
    console.log(fn.description + 'returned' + fn(1));
}
function fn1(n) {
    console.log(n);
    return true;
}
fn1.description = 'hello';
dosomething(fn1);
