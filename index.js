// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
// Import shape classes from the 'shapes' module
const { Circle, Triangle, Square } = require('./lib/shapes');

// Asynchronous function to create the logo based on user input
async function createLogo() {
  // Prompt the user for input using 'inquirer'
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like for your logo?',
      choices: ['Circle', 'Triangle', 'Square'] // Options for the shape of the logo
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color should the shape be?', // Asks for the color of the shape
      default: 'blue' // Default color if the user does not specify one
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:', // Prompts for the logo text
      validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters.' // Validation to ensure text is no more than 3 characters
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color should the text be?', // Asks for the color of the text
      default: 'white' // Default text color
    }
  ]);

  const { shape, shapeColor, text, textColor } = answers;
  let svgShape;
  let textX, textY; // Variables for text coordinates

  // Determine the shape and text position based on user selection
  switch (shape) {
    case 'Circle':
      svgShape = new Circle(shapeColor);
      textX = '100'; // Center horizontally for circle
      textY = '100'; // Center vertically for circle
      break;
    case 'Triangle':
      svgShape = new Triangle(shapeColor);
      textX = '150'; // Center horizontally for triangle
      textY = '110'; // Adjust vertically for triangle
      break;
    case 'Square':
      svgShape = new Square(shapeColor);
      textX = '100'; // Center horizontally for square
      textY = '100'; // Center vertically for square
      break;
  }

  // Generate the SVG content using template literals
  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${svgShape.render()}
  <text x="${textX}" y="${textY}" font-family="Arial" font-size="20" fill="${textColor}" text-anchor="middle">${text}</text>
</svg>`;

  // Write the SVG content to a file named 'logo.svg'
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg'); // Log to console when the file is successfully created
}

// Call the function to run the program
createLogo();
