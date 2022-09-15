// class定义类
class Person{
    name:string="swk"
   static readonly age:number=10000
   sayHello(){
    console.log("hello");
   }
}
const per=new Person()
console.log(per.name);
per.sayHello()
// console.log(Person.age);
// Person.age=999
// console.log(Person.age);
