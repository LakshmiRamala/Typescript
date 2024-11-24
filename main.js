const obj={
    name:"Lakshmi",
    read(){
        console.log(this)
    }
}
obj.read();
function Hello(){
    console.log(this);
}
Hello();