var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.holidays = [];
        return _this;
    }
    return ItDepartment;
}(Department));
var AdminDepartment = /** @class */ (function (_super) {
    __extends(AdminDepartment, _super);
    function AdminDepartment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.holidays = [];
        return _this;
    }
    return AdminDepartment;
}(Department));
console.log("hi");
