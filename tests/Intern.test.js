const Intern = require('../lib/Intern');

const obj = new Intern("Lorena Morales",3,"lorenarm.999@gmail.com","Denver University");

describe ("Intern", () => {
    describe ("getSchool", () => {
        it('Should return Interns School', () => {
            expect(obj.school).toEqual("Denver University");
        })
    });
    describe ("getRole", () => {
        it('should return Engineer Role', () => {
            expect(obj.role).toEqual("Intern");
        })
    });
})