const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const employee = require('./lib/employee');

const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];

function ManagerQuestions() {
    console.log('Welcome to Team Profile Generator');
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is your name?",
            },
            {
                name: "id",
                type: "input",
                message: "what is team manager's employee Id?",
            },
            {
                name: "email",
                type: "input",
                message: "What is manager's email?",
            },
            {
                name: "officeNumber",
                type: "input",
                message: "What is team manager's office number?",
            }
            ])
        .then(function(answers){
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber );
            employees.push(manager);
            AddMember()
        })
};
function EngineerQuestions() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is your name?",
            },
            {
                name: "id",
                type: "input",
                message: "what is team manager's employee Id?",
            },
            {
                name: "email",
                type: "input",
                message: "What is manager's email?",
            },
            {
                name: "github",
                type: "input",
                message: "What is Engineer's Github Id?",
            }
            ])
        .then(function(answers){
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github );
            employees.push(engineer);
            AddMember()
        })
};
function InternQuestions() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is your name?",
            },
            {
                name: "id",
                type: "input",
                message: "what is team manager's employee Id?",
            },
            {
                name: "email",
                type: "input",
                message: "What is manager's email?",
            },
            {
                name: "school",
                type: "input",
                message: "What is Intern's school?",
            }
            ])
        .then(function(answers){
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school );
            employees.push(intern);
            AddMember()
        })
};

function AddMember(){
    inquirer
        .prompt([
            {
                name: "AddTeamMember",
                type: "list",
                message: "Do you want to add team member of finish?",
                choices: ["Add an Engineer", "Add an Intern", "Finish"],
              },
        ])
        .then((answers) => {
            if(answers.AddTeamMember  === "Add an Engineer"){
                EngineerQuestions();
            } else if(answers.AddTeamMember === "Add an Intern"){
                InternQuestions();
            } else {
                createHTML(employees);
            }
        })
};

function createHTML(employees) {
    const teamMembers =  employees.map(employee => {
                
            return `
            <div class="card col-3 rounded-3" style="background-color: rgb(218, 198, 226);>
                <div class="card-title text text-white" style="margin: 10px; background-color: rgb(109, 82, 184); padding: 10px;">
                    <h4 class="name">${employee.getName()}</h4>
                    <h5 class="job-title">${employee.getRole()}</h5>
                </div>
                <div class="card-text">
                    <p>Employee ID: ${employee.getId()} </p>
                    <p>Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></p>
                    <p>${employee.getRole()==="Intern" ? "School: " + employee.getSchool(): employee.getRole()==="Manager" ? "Office Number: " + employee.getOfficeNumber(): "GitHub: " + "<a href='https://github.com/" + employee.getGithub() + "' target='_blank'>" + employee.getGithub() + "</a>"} </p>
                </div>
            </div> `
        });
    
         
    

    const Html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container-fluid" style="background-color: rgb(51, 39, 83); padding: 30px;">
            <h1 class="text-center" style="color: white;">My Team</h1>
        </div>
        <div class="row text-center justify-content-between" style="margin: 100px;"">
           ${teamMembers.join('')}
        </div>
    </body>
    </html>`;


   fs.writeFile('dist/index.html', Html, 'utf-8', ()=>{console.log('Success!');});
};

ManagerQuestions();
// createHTML(employees);