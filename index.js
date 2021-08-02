// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const totalEmployees = require('./src/totalEmployees.js');

// Creating a global array to store employee informtion
let employeeArr = [];

// QUESTIONS FOR TEAM COMPOSITION
// Add a Manager team
function promptManager() {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers name? (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the team managers full name!")
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team managers id?(Required)',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the team managers ID!")
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email address? (Required)',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the team managers email adress!")
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the team managers office number!")
                }
            }
        },
        {
            type: 'list',
            name: 'employeeAddingOption',
            message: 'Which type of team members would like to add? (Required)',
            choices: ['Engineer', 'Intern', ' I do not want to add any more team members']
        }
    ]).then(function (answer) {
        let manager = new Manager(answer.managerName,answer.managerId,answer.managerEmail,answer.officeNumber);
        
        // constructing an array of object recieved from the properties
        employeeArr.push(manager);

        // Check for possible enter for other team members
        if (answer.employeeAddingOption === "Engineer") {
            return promptEngineer();
        } else if (answer.employeeAddingOption === "Intern") {
            return promptIntern();
        } else {
             return totalEmployees(employeeArr);
        }
    })
};

// Add a new engineer team
function promptEngineer() {
    console.log(`
    =================
    `);

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the team engineers full name? (Required)',
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the team engineers full name!")
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the team engineers id? (Required)',
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please ente the id for the team engineers ID!")
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the team engineers email? (Required)',
            validate:engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the email for the team engineer!")
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the team engineers Github username? (Required)',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter the Github username for the team engineer!")
                }
            }
        },
        {
            type: 'list',
            name: 'employeeAddingOption2',
            message: 'Which type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern', ' I do not want to add any more team members']
        }
    ])
    .then(function (answer) {
        let engineer = new Engineer(answer.engineerName,answer.engineerId,answer.engineerEmail,answer.engineerGithub);
        // constructing an array of object recieved from the properties
        employeeArr.push(engineer);

        // Check for possible enter for other team members
        if (answer.employeeAddingOption2 === "Engineer") {
            return promptEngineer();
        } else if (answer.employeeAddingOption2 === "Intern") {
            return promptIntern();
        } else {
            return totalEmployees(employeeArr);
        }
    })
};

// Adding a new intern team
function promptIntern ()  {
    console.log(`
    =================
    `);

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the team Interns full name? (Required)',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter the teams intern full name!")
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the teams Intern ID? (Required)',
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter the team interns ID!")
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the team Interns Email Address? (Required)',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter intern email!")
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the teams Intern school name? (Required)',
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter the teams intern school name!")
                }
            }
        },
        {
            type: 'list',
            name: 'employeeAddingOption3',
            message: 'Which type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern', ' I do not want to add any more team members']
        }
    ])
    .then(function (answer) {
       let intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
         // Check for possible enter for other team members
        employeeArr.push(intern);

        // Check for possible enter for other team members
        if (answer.employeeAddingOption3 === "Engineer") {
            return promptEngineer();
        } else if (answer.employeeAddingOption3 === "Intern") {
            return promptIntern();
        } else {
            return totalEmployees(employeeArr);
        }
    })
};

// Render the promot function, generate template for HTML and write the file
promptManager()
    .then(employeeArr => {
        return generateTeam(employeeArr);
    })
    .then( team => {
        console.log("success")
        return writeFile(team);
    })
    .catch(err => {
        console.log(err);
    }) ;

