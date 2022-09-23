const Employee = require('../lib/Employee');

const obj = new Employee("Lorena Morales", 01, "lorenarm.999@gmail.com");

describe ("Employee", () => {
    describe ("getName", () => {
        it('should return Employee name', () => {
            expect(Employee.name).toEqual("Lorena Morales");
        })
    });
    describe ("getId", () => {
        it('should return Employee Id', () => {
            expect(Employee.id).toEqual(01);
        })
    });
    describe ("getEmail", () => {
        it('should return Employee Email', () => {
            expect(Employee.email).toEqual("lorenarm.999@gmail.com");
        })
    });
    describe ("getRole", () => {
        it('should return Employee Role', () => {
            expect(Employee.role).toEqual("Employee");
        })
    });
}) 