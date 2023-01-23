const Employee = require(`./lib/Employee`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

const inquirer = require("inquirer");
const fs = require("fs");

var employees = []

// User answered Manager questions.. we create Manager and save to list of employees
var yuri = new Manager("Yuri", 1, "uriyuri00@gmail.com", 01);
employees.push(yuri)

// User selected to add Intern... we create Intern and save to list of employees
var josh = new Intern("josh", 2, "josh@gmail.com", 02);
employees.push(josh)

var Don = new Intern("", 3, "Don@mail.com", 03);
employees.push(Don)

var Lullu = new Engineer("Lullu", 4, "Lullu@mail.com", 04);
employees.push(Lullu)

var Bob = new Engineer("Bob", 5, "Bob@gmail.com", 05);
employees.push(Bob)

function createHTML(employees) {
    // Add html based on what employee type
    var html1 = `
    <h1>My team</h1>
    <main> `;

    var html2 = "";
    for(var i = 0; i<employees.length; i++) {
        var currentEmployee = employees[i];

        // All employee types
        html2+= "Name:" + currentEmployee.getName();

        // Specific to Employee type
        if(currentEmployee.getRole()=="Manager") {
            html2+= "Office Number" + currentEmployee.getOfficeNumber();
        }
        if(currentEmployee.getRole()=="Intern") {
            html2+= "School" + currentEmployee.getSchool();
        }
    }

    var html3 = `
    </main> `;
    
    fs.writeFile(`dist/index.html`, html1+html2+html3, ()=>{});
}

// Pass list of employees aka array
createHTML(employees);
console.log("Written HTML");
