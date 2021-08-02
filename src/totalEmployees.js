const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
const Manager = require('../lib/Manager.js');
const Intern = require('../lib/Intern.js');


// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        console.log(manager.getName());
        console.log(manager.getEmail());
        console.log(manager.getId());
        console.log(manager.getRole());
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2> 
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>           
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>
            `;
    };
    
    // create the html for the engineers
    const generateEngineer = engineer => {
        
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>  
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>         
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub address: <a href="www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        </div>
            `;
    };

    // create the html for interns
    const generateIntern = intern => {
        
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>  
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>        
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School Name: ${intern.getSchool()}</li>
            </ul>
        </div>
        </div>
            `;
    };

    const html = [];

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            html.push(generateManager(team[i]));
        } else if (team[i].getRole()=== 'Engineer') {
            html.push(generateEngineer(team[i]));
        } else { 
            html.push(generateIntern(team[i]));
        };
    };
    
    html.join('');
    return html;
};

// export function to generate the html page

function totalEmployees(team) {

    fs.writeFile('./output/team.html', writeFile(team), err => {
       
        console.log(team);
        if (err) {
            return console.log(err)
        } else {
            console.log("successfully page is created dynamically")
        };
    });

};

const writeFile = (team) => {
    
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="https://kit.fontawesome.com/20b7bd973d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>My Team Page</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-dark">
            <div class="container">
                <h1 class="display-4 text-light">My Team</h1>
                <h1 class="display-4 text-light"><i class="fas fa-users"></i></h1>
            </div>
        </div>
        <!-- Start of Cards -->
        <div class = "container">
            <div class="col-md-12">
                <div class="row">
    ${generateTeam(team)}
    </body>
    </html>
     
    `;
};

module.exports = totalEmployees;
