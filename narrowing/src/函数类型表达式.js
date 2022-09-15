"use strict";
function greeter(fn) {
    fn("helloworld");
}
greeter((s) => {
    console.log(s);
});
