class Ctor{
    s:string
    constructor(s:string){
        this.s=s
    }
}

  
type SomeConstructor={
   new (s:string):Ctor
}

function fn(ctor:SomeConstructor){
   new ctor('hello')
}