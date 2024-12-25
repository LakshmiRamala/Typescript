namespace Mathutil{
  export function add(a:number,b:number){
    return a+b;
  }
  export function substract(a:number,b:number){
    return a-b;
  }
}
namespace stringUtils{
  export function add(a:string,b:string){
    return a+b;
  }
  export function substract(a:string,b:string){
    return a.replace(b,"");
  }
}
console.log(Mathutil.add(3,4));
console.log(stringUtils.substract("Hello","l"));