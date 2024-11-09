"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
}
class ItDepartment extends Department {
    constructor() {
        super(...arguments);
        this.holidays = [];
    }
}
class AdminDepartment extends Department {
    constructor() {
        super(...arguments);
        this.holidays = [];
    }
}
