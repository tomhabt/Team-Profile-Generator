
const Employee = require('../lib/Employee.js');

test('creates a name for the employee object', () => {
    const employee = new Employee('Thomas',101,'tsafulegn@gmail.com');

    expect(employee.getName()).toBe('Thomas');
    expect(employee.getId()).toBe(101);
    expect(employee.getEmail()).toBe('tsafulegn@gmail.com');
    expect(employee.getRole()).toBe('Employee');

})

