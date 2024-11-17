type Holidays = {
    date: Date;
    reason: string;
}[];

abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected name: string) {}

    public addHolidays(holidays: Holidays){
        if(Array.isArray(holidays)){
            for (const holiday of holidays){
                this.holidays.push(holiday)
            }
        }
    }
}

class ItDepartment extends Department {
    protected holidays: Holidays = [];
    constructor(){
      super("IT Department")
    }
}

class AdminDepartment extends Department {
    protected holidays: Holidays = [];
    constructor(){
      super("Admin Department")
    }
}
const itholidays:Holidays=[
  {
    date:new Date(2024,2,10),
    reason:"It DepartmentDay"

  },
  {
    date:new Date(2024,8,15),
    reason:"Indepence Day"
  }
]
const admindepholidays:Holidays=[
  {
    date:new Date(2024,8,30),
    reason:"admin DepartmentDay"

  },
  {
    date:new Date(2024,8,15),
    reason:"Indepence Day"
  }
]
const itDepartment=new ItDepartment();
const adminDepartment=new AdminDepartment();
itDepartment.addHolidays(itholidays);
adminDepartment.addHolidays(admindepholidays);
console.log({itDepartment});
console.log({adminDepartment});