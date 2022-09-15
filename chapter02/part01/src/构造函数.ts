// class Dog{
//     name='王CIA';
//     age=3;
//     bark(){
//         alert('www')
//     }
// }

// const dog=new Dog()
// console.log(dog);


class Dog{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
const dog = new Dog("旺财",5) 