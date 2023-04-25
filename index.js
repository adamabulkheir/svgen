const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/generateSvg')

function init() {
    const questions = [
        {
            type: 'input',
            name: 'char',
            message: "please input up to 3 desired characters",
        },
        {
            type: 'list',
            name: 'shape',
            message: "please sekect a desired shape",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: 'input',
            name: 'color',
            message: "please input a desired color by keyword or hex number",
        },
    ];

    inquirer.prompt(questions).then((answers)=>{
        const svg = generateSvg(answers.char, answers.shape, answers.color);
        fs.writeFile('examples/logo.svg', svg, (err)=> {
            if (err) throw err;
            console.log('logo successfully generated');
        });
    }); 

}


init();