const Manager = require('../lib/Manager');

const obj = new Manager("Lorena Morales",3,"lorenarm.999@gmail.com",25)

describe ("Manager", () => {
    describe ("getOfficeNumber", () => {
        it('Should return Managers Office Number', () => {
            expect(obj.officeNumber).toEqual(25);
        })
    });
    describe ("getRole", () => {
        it('should return Engineer Role', () => {
            expect(obj.role).toEqual("Manager");
        })
    });
})