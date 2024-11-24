interface Person{
  name:string,
  age:number
  email:string,
  phoneNumber:number,
}
interface addressPerson extends Person{
  address:string
}
const  person:Person={
   name:"Lakshmi",
   age:22,
   email:"naga@1425",
   phoneNumber:9014992165
};
const person2:addressPerson={
  name:"Lakshmi",
   age:22,
   email:"naga@1425",
   phoneNumber:9014992165,
   address:"Hydeabad"
}
console.log({person,person2});