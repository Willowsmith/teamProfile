const inquirer = require("inquirer");
const html = require("./util/generateHtml");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];



function newEmp() {
    inquirer.prompt({
        name: "name",
        message: "What is your name?",
        type: "input"
    }).then(({ name }) => {
        console.log(name);
        const me = new Employee(name);
        console.log(employees);
        askEmail();
    })
}

function askEmail() {
    inquirer.prompt({
        name: "email",
        message: "What is your email address?",
        type: "input"
    }).then(({ email }) => {
        console.log(email);
        const em = new Employee(email);
        askId();
    })
}

function askId() {
    inquirer.prompt({
        name: "id",
        message: "What is your employee id?",
        type: "input"
    }).then(({ id }) => {
        console.log(id);
        const id = new Employee(id);
        askQuestion();
    })
}

function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Engineer", "Manager", "Intern"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Engineer":
                console.log("Engineer!")
                engineer();
                break;
            case "Manager":
                console.log("Manager!")
                manager();
                break;
            case "Intern":
                console.log("intern!")
                intern();
                break;
        }
    })
}

function engineer() {
    inquirer.prompt({
        name: "github",
        message: "What is your github address?",
        type: "input"
    }).then(({ github }) => {
        console.log(github);
        const git = new Engineer(git);
    })
}

function manager() {
    inquirer.prompt({
        name: "officeNumber",
        message: "What is your office number?",
        type: "input"
    }).then(({ officeNumber }) => {
        console.log(officeNumber);
        const on = new Manager(on);
    })
}

function intern() {
    inquirer.prompt({
        name: "school",
        message: "What school did you go to?",
        type: "input"
    }).then(({ school }) => {
        console.log(school);
        const school = new Intern(school);
    })
}

newEmp();