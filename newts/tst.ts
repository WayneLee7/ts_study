// let mySum: (x: number, y: number) => number 

// // mySum= function (x: number, y: number): number {
// //     return x + y;
// // };

// // interface SearchFunc {
// //     (source: string, subString: string): boolean;
// // }

// // let mySearch: SearchFunc;
// // mySearch = function(source: string, subString: string) {
// //     return source.search(subString) !== -1;
// // }

// // function buildName(firstName: string, lastName: string = 'Cat') {
// //     return firstName + ' ' + lastName;
// // }
// // let tomcat = buildName('Tom', 'Cat');
// // let tom = buildName('Tom');

// // function reverse(x: number | string): number | string | void {
// //     if (typeof x === 'number') {
// //         return Number(x.toString().split('').reverse().join(''));
// //     } else if (typeof x === 'string') {
// //         return x.split('').reverse().join('');
// //     }
// // }‘
// // class ApiError extends Error {
// //     code: number = 0;
// // }
// // class HttpError extends Error {
// //     statusCode: number = 200;
// // }

// // function isApiError(error: Error) {
// //     if (typeof (error as ApiError).code === 'number') {
// //         return true;
// //     }
// //     return false;
// // }
// // class ApiError extends Error {
// //     code: number = 0;
// // }
// // class HttpError extends Error {
// //     statusCode: number = 200;
// // }

// // function isApiError(error: Error) {
// //     if (error instanceof ApiError) {
// //         return true;
// //     }
// //     return false;
// // }
// // interface ApiError extends Error {
// //     code: number;
// // }
// // interface HttpError extends Error {
// //     statusCode: number;
// // }

// // function isApiError(error: Error) {
// //     if (error instanceof ApiError) {
// //         return true;
// //     }
// //     return false;
// // }
// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }

// let tom: Cat = {
//     name: 'Tom',
//     run: () => { console.log('run') }
// };
// let animal: Animal = tom;
// // console.log(animal);

//  class Error1{
//    private name:string
//     static age:number =12
//     constructor(name:string){
//         this.name=name
//     }
//     // getName(){
//     //     return this.name
//     // }
//     // setName(val:string){
//     //     this.name=val
//     // }
//     get name1(){
//         return this.name
//     }
//     set name1(val){
//         this.name=val
//     }
// }
// class Pr extends Error1 {
//     run(){
//         console.log("ppp");
//     }
// }
// let p1 = new Pr("hha")
// p1.name1='dd'

// console.log(p1.name1);




// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }

// let tom: Cat = {
//     name: 'Tom',
//     run: () => { console.log('run') }
// };
// let animal: Animal = tom;

// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }

// function testAnimal(animal: Animal) {
//     return (animal as Cat);
// }
// function testCat(cat: Cat) {
//     return (cat as Animal);
// }

// interface Cat {
//     run(): void;
// }
// interface Fish {
//     swim(): void;
// }

// function testCat(cat: Cat) {
//     return (cat as any as Fish);
// }


// function toBoolean(something: any): boolean {
//     return something as boolean;
// }

// toBoolean(1);
// // 返回值为 1

// function getCacheData(key: string): any {
//     return (window as any).cache[key];
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom = getCacheData('tom') as Cat;
// tom.run();

// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }

// const animal: Animal = {
//     name: 'tom'
// };
// let tom = animal as Cat;



// function getCacheData<S>(key: string): S {
//     return (window as any).cache[key];
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom = getCacheData<Cat>('tom');
// tom.run();
//  class Error1{
//    private name:string
//     static age:number =12
//     constructor(name:string){
//         this.name=name
//     }
//     getName(){
//         return this.name
//     }
//     setName(val:string){
//         this.name=val
//     }
//     get name1(){
//         return this.name
//     }
//     set name1(val){
//         this.name=val
//     }
// }

// let b: Boolean = new Boolean(1);
// let e: Error = new Error('Error occurred');
// let d: Date = new Date();
// // let r: RegExp = /[a-z]/;

// console.log(e);


// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//     if (typeof n === 'string') {
//         return n;
//     } else {
//         return n();
//     }
// }


// type EventNames = 'click' | 'scroll' | 'mousemove';
// function handleEvent(ele: Element, event: EventNames) {
//     // do something
// }

// handleEvent(document.getElementById('hello'), 'click');  

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface PointInstanceType {
    x: number;
    y: number;
}

// 等价于 interface Point3d extends PointInstanceType
interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};