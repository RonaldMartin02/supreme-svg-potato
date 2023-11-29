
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

async function promptUser() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: function (input) {
          return input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ]);
  
    return userInput;
  }
  function generateShape(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
  
    let selectedShape;
    switch (shape) {
      case 'circle':
        selectedShape = new Circle();
        break;
      case 'square':
        selectedShape = new Square();
        break;
      case 'triangle':
        selectedShape = new Triangle();
        break;
      default:
        // Handle unexpected shape
        break;
    }
  
    selectedShape.setText(text);
    selectedShape.setTextColor(textColor);
    selectedShape.setColor(shapeColor);
  
    const svgData = selectedShape.render();
  
    return svgData;
  }
  function writeToFile(data) {
    fs.writeFile("logo.svg", data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
}
async function run() {
    const userInput = await promptUser();
    const svgData = generateShape(userInput);
    writeToFile(svgData);
  }
  
  run();