function longest<Type extends{length:number}>(a:Type,b:Type){
    if(a.length>=b.length){
        return a
    }else{
        return b
    }
}

longest([1,2],[2,343,341])
longest('l','d')
// longest(1,2)  XXXXXXXX