const Employee = require('../lib/Employee');

const obj = new Employee("Lorena Morales",1,"lorenarm.999@gmail.com")

describe ("Employee", () => {
    describe ("getName", () => {
        it('should return Employee name', () => {
            expect(obj.name).toEqual("Lorena Morales");
        })
    });
    describe ("getId", () => {
        it('should return Employee Id', () => {
            expect(obj.id).toEqual(1);
        })
    });
    describe ("getEmail", () => {
        it('should return Employee Email', () => {
            expect(obj.email).toEqual(obj.email);
        })
    });
    describe ("getRole", () => {
        it('should return Employee Role', () => {
            expect(obj.role).toEqual("Employee");
        })
    });
}) 