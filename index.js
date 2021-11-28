const inquirer = require("inquirer");
const fs = require('fs');



const html = require("./util/generateHtml");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeA = [];
const managerA = [];
const engineerA = [];
const internA = [];



function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Engineer", "Manager", "Intern", "Team Complete!"]
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
            default:
                console.log('Go Team!');
                fs.writeFile(`Team.html`, html(employeeA), (err) =>
                err ? console.error(err) : console.log('HTML Created!')
                );
        }
    })
}

function engineer() {
    inquirer.prompt([
        {
        message:"What is your name?",
        type: "input",
        name:"engName",
        },{
        message:"What is the your employee ID?",
        type: "input",
        name:"engId"
        },{
        message:"What is the your E-Mail?",
        type: "input",
        name:"engEmail"
        },{
        message:"What is the your GitHub Username?",
        type: "input",
        name:"engGitHub"
        }
    ]).then(engAnswers => {
        const myEngineer = new Engineer(engAnswers.engName, engAnswers.engId, engAnswers.engEmail, engAnswers.engGitHub);
        employeeA.push(myEngineer);
        engineerA.push(myEngineer);
        askQuestion();
    })

}

function manager() {
    inquirer.prompt([
        {
        message:"What is the your Name?",
        type: "input",
        name:"manName",
        },{
        message:"What is the your employee ID?",
        type: "input",
        name:"manId"
        },{
        message:"What is your E-Mail?",
        type: "input",
        name:"manEmail"
        },{
        message:"What is the your Office Number?",
        type: "input",
        name:"manOffice"
        }
    ]).then(manAnswers => {
        const myManager = new Manager(manAnswers.manName, manAnswers.manId, manAnswers.manEmail, manAnswers.manOffice);
        employeeA.push(myManager);
        managerA.push(myManager);
        askQuestion();
    })
}

function intern() {
    inquirer.prompt([
        {
        message:"What is tyour Name?",
        type: "input",
        name:"intName",
        },{
        message:"What is your Employee ID?",
        type: "input",
        name:"intId"
        },{
        message:"What is your E-Mail?",
        type: "input",
        name:"intEmail"
        },{
        message:"What is your School?",
        type: "input",
        name:"intSchool"
        }
    ]).then(intAnswers => {
        const myIntern = new Intern(intAnswers.intName, intAnswers.intId, intAnswers.intEmail, intAnswers.intSchool);
        employeeA.push(myIntern);
        internA.push(myIntern);
        askQuestion();
    })
}

askQuestion();