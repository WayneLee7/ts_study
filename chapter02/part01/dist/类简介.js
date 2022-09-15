"use strict";
// class定义类
class Person {
    constructor() {
        this.name = "swk";
    }
    sayHello() {
        console.log("hello");
    }
}
Person.age = 10000;
const per = new Person();
console.log(per.name);
per.sayHello();
// console.log(Person.age);
// Person.age=999
// console.log(Person.age);
