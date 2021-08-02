
const Manager = require('../lib/Manager.js');

test('creates a name for the employee object', () => {
    const manager = new Manager('Thomas',100,'tsafulegn@gmail.com','room 303');

    expect(manager.getName()).toBe('Thomas');
    expect(manager.getId()).toBe(100);
    expect(manager.getEmail()).toBe('tsafulegn@gmail.com');
    expect(manager.getOfficeNumber()).toBe('room 303');
    expect(manager.getRole()).toBe('Manager');

})