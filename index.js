"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
}
class ItDepartment extends Department {
    constructor() {
        super(...arguments);type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
}
        this.holidays = [];
    }
}
class AdminDepartment extends Department {
    constructor() {
        super(...arguments);
        this.holidays = [];
    }
}
