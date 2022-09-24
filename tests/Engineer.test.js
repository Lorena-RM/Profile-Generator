const Engineer = require('../lib/Engineer');

const obj = new Employee("Lorena Morales",2,"lorenarm.999@gmail.com","lorena-RM")

describe ("Engineer", () => {
    describe ("getGithub", () => {
        it('Should return github username', () => {
            expect(obj.github).toEqual("lorena-RM");
        })
    });
    describe ("getRole", () => {
        it('should return Engineer Role', () => {
            expect(obj.role).toEqual("Engineer");
        })
    });
})