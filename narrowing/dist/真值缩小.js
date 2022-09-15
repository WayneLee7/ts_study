"use strict";
// function printAll(strs:string|string[]|null){
//     if(strs && typeof strs==='object'){
//         for(const s of strs){
//             console.log(s);
//         }
//     }else if(typeof strs === "string"){
//         console.log(strs);
//     }else{
//     }
// }
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(e => {
            return e * factor;
        });
    }
}
console.log(multiplyAll([2, 3], 3));
