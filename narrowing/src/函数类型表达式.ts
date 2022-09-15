function greeter(fn:(a:string)=>void){
    fn("helloworld")
}
greeter((s:string)=>{
    console.log(s);
})