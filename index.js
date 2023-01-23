const Employee = require(`./lib/Employee`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

const inquirer = require("inquirer");
const fs = require("fs");

let employees = []

// User answered Manager questions.. we create Manager and save to list of employees
const yuri = new Manager("Yuri", 1, "uriyuri00@gmail.com", 206-565-4218);
employees.push(yuri)

// User selected to add Intern... we create Intern and save to list of employees
const josh = new Intern("josh", 2, "josh@gmail.com", "UCLA");
employees.push(josh)

const Don = new Intern("", 3, "Don@mail.com", "UW");
employees.push(Don)

const Lullu = new Engineer("Lullu", 4, "Lullu@mail.com", "github.com/Lullu");
employees.push(Lullu)

const Bob = new Engineer("Bob", 5, "Bob@gmail.com", "github.com/uriyuri00");
employees.push(Bob)

function createHTML(employees) {
    // Add html based on what employee type
    var html1 = `
    <head> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
    		integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        	crossorigin="anonymous">
    </head>
    <body> 
        <h1 class="display-3 $-color: $red-500">My team</h1>`;

    var html2 = "";
    for(var i = 0; i<employees.length; i++) {
        var currentEmployee = employees[i];

        // All employee types
        html2+= "Name:" + currentEmployee.getName();
        html2+= "Id:" + currentEmployee.getId();
        html2+= "email:" + currentEmployee.getEmail();

        // Specific to Employee type
        if(currentEmployee.getRole()=="Manager") {
            html2+= `<div class="container-sm"> Office Number` + currentEmployee.getOfficeNumber() + `</div>`;
        }
        if(currentEmployee.getRole()=="Intern") {
            html2+= `<div class="container-sm"> School` + currentEmployee.getSchool() + `</div>`;
        }
        if(currentEmployee.getRole()=="Engineer") {
            html2+= `<div class="container-sm"> Github` + currentEmployee.getGithub() + `</div>`;
        }
    }

    var html3 = `
    </body> `;
    
    fs.writeFile(`dist/index.html`, html1+html2+html3, ()=>{});
}

// Pass list of employees aka array
createHTML(employees);
console.log("Written HTML");

