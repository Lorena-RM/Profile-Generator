const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const path = require("path");
const generatefile = require("./src/template")

const teamArray = [];

function firstQuestion() {
    console.log("    ");
    console.log("Welcome to the Team Generator!");
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
        newTeamMember();
    });
}

function newTeamMember () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "which Employee would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"],
      },
    ])
    .then(({employeeType}) => {
      if (employeeType === "I don't want to add anymore team members") {
        console.log("Your Team has been made! ✓");
        console.log(teamArray)
        buildTeam ();
        process.exit();
      } else if (employeeType === "Engineer") {
        engineerQuestions();
      }else if (employeeType === "Intern") {
        internQuestions();
      }
    });
}

function engineerQuestions () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's Id?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?"
      },
      {
        type: "input",
        name: "githubUsername",
        message: "what is the Engineer's GitHub username?"
      },
    ])
    .then(({ name, id, email, githubUsername }) => {
        teamArray.push(new Engineer(name, id, email, githubUsername));
        console.log(`${name} added to Team!`)
        newTeamMember();
    })
}

function internQuestions () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Intern's Id?"
        },
        {
          type: "input",
          name: "email",
          message: "What is the Intern's email?"
        },
        {
          type: "input",
          name: "school",
          message: "what is the Intern's school?"
        },
      ])
      .then(({ name, id, email, school }) => {
          teamArray.push(new Intern(name, id, email, school));
          console.log(`${name} added to Team!`)
          newTeamMember();
      })
}

function buildTeam () {
  fs.writeFileSync (
    path.join(path.resolve(__dirname,"dist"), "team.html"),
    generatefile(teamArray),"utf-8"
  )
}

firstQuestion();
