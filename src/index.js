const fs = require("fs");
const path = require("path");
const inquirer = require('inquirer');

const existingConfig = fs.existsSync("package.json");

function buildConfig(){
    console.log("Working...");
}

if(existingConfig){
    inquirer
        .prompt([{
            type: 'confirm',
            name: 'overwrite',
            message: 'package.json already exists! Whould you like to overwrite it?',
            default: false,
        },
        ])
        .then(answers => {
            if (answers.overwrite){
                buildConfig();
            } else {
                console.log("Good BY Mr 👋");
            }
        });    
} else {
    buildConfig();
}



