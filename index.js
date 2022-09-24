const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const path = require("path");

const teamArray = [];

function firstQuestion() {
    console.log("    ");
    console.log("Welcome to the Team Generator!");
    console.log("use `npm run reset` to reset the dist/folder");
    console.log("    ");
    console.log("Please build your Team 🚻")
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Team Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Team Manager's Id?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the Team Manager's email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what is the Team Manager's office number?"
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
        teamArray.push(new Manager(name, id, email, officeNumber));
        console.log("    ");
        console.log(`${name} added to Team!`);
        console.log(teamArray);
        newTeamMember();
    });
}

firstQuestion();
