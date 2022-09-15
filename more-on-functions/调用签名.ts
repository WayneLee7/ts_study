type DescribableFunction={
    description:string;
    (someArg:number):boolean
}

function dosomething(fn:DescribableFunction){
    console.log(fn.description+'returned'+fn(1));
}


function fn1(n:number){
    console.log(n);
    return true
}

fn1.description='hello'
dosomething(fn1)
