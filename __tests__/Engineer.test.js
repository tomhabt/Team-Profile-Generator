const Engineer = require('../lib/Engineer.js');

test('creates a name for the employee object', () => {
    const engineer = new Engineer('Thomas',102,'tsafulegn@gmail.com','http.github.com');

    expect(engineer.getName()).toBe('Thomas');
    expect(engineer.getId()).toBe(102);
    expect(engineer.getEmail()).toBe('tsafulegn@gmail.com');
    expect(engineer.getGithub()).toBe('http.github.com');
    expect(engineer.getRole()).toBe('Engineer');

})