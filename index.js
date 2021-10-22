const inquirer = require("inquirer");
const fs = require('fs');


const html = require("./util/generateHtml");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const empArr = [];
const manArr = [];
const engArr = [];
const intArr = [];



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
            default:
                console.log('Go Team!');
                fs.writeFile(`Team.html`, html(empArr), (err) =>
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
        empArr.push(myEngineer);
        engArr.push(myEngineer);
        askEngInt();
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
        empArr.push(myManager);
        manArr.push(myManager);
        askEngInt();
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
        empArr.push(myIntern);
        intArr.push(myIntern);
        askEngInt();
    })
}

newEmp();