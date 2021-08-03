const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
const Manager = require('../lib/Manager.js');
const Intern = require('../lib/Intern.js');

// export function to generate the html page

function totalEmployees(employeeArr) {

    fs.writeFile('./output/team.html', createHTML(employeeArr), err => {
       
        console.log(employeeArr);
        if (err) {
            return console.log(err)
        } else {
            console.log("successfully, Your HTML page is created dynamically")
        };
    });
};

const createHTML = (employeeArr) => {
    
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="https://kit.fontawesome.com/20b7bd973d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>My employeeArr Page</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-red">
            <div class="container">
                <h1 class="display-4 text-light">My team</h1>
                <h1 class="display-4 text-light"><i class="fas fa-users"></i></h1>
            </div>
        </div>
        <!-- Start of Cards -->
        <div class = "container">
            <div class="col-md-12">
                <div class="row">
    ${generateTeamHtml(employeeArr)}
    </body>
    </html>
     
    `;
};

//create the employeeArr overall html
const generateTeamHtml = employeeArr => {

    // create the html for the engineers
    const generateEngineerHtml = engineer => {
        
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
    const generateInternHtml = intern => {
        
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
     // create the manager html
     const generateManagerHtml = manager => {
        
        return `
        <div class="card employee-card">
        <div class="card-header bg-blue">
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
    // crearing an array to collect the html from each team 
    // First array will collect the manager and then the engineers html to have a asending way of creatng the html section
    // Second array will collect the html from interns 
    const htmlArr = [];
    const htmlInternArr=[];
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].getRole() === 'Manager') {   
            htmlArr.push(generateManagerHtml(employeeArr[i]));
        } else if (employeeArr[i].getRole()=== 'Engineer') {
            htmlArr.push(generateEngineerHtml(employeeArr[i]));
        } else { 
            htmlInternArr.push(generateInternHtml(employeeArr[i]));
        };
    };

    // This concatnated array will sort the team page or html section to line up from manager to intern
    let finalHtmlArr=htmlArr.concat(htmlInternArr);
    return  finalHtmlArr.join('');
};

module.exports = totalEmployees;
