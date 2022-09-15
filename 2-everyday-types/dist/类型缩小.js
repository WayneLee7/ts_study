"use strict";
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
// console.log(padLeft(1, "aaa"));
console.log(new Array(1));
