function Decorator(constructor:Function){
    console.log("Decorator invoked");
    console.log(constructor);
}

@Decorator
class  Airplane{
     constructor(public airplaneName:string,
        private pilot:string
     ){
     }
     public pilotName(){
        console.log(this.pilot);
     }
     public get airplane(){
        return this.airplaneName
     }

}