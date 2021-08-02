
const Intern = require('../lib/Intern.js');
test('creates a name for the employee object', () => {
    const intern = new Intern('Thomas',103,'tsafulegn@gmail.com','Carleton University');

    expect(intern.getName()).toBe('Thomas');
    expect(intern.getId()).toBe(103);
    expect(intern.getEmail()).toBe('tsafulegn@gmail.com');
    expect(intern.getSchool()).toBe('Carleton University');
    expect(intern.getRole()).toBe('Intern');
})