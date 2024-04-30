// Base Shape class to handle common properties and methods
class Shape {
    constructor(color) {
      this.color = color;  // Color of the shape
    }
  }
  
  // Circle class extending the base Shape class
  class Circle extends Shape {
    // Method to render the SVG representation of the circle
    render() {
      return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  // Triangle class extending the base Shape class
  class Triangle extends Shape {
    // Method to render the SVG representation of the triangle
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  // Square class extending the base Shape class
  class Square extends Shape {
    // Method to render the SVG representation of the square
    render() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  // Export the classes so they can be used in other files
  module.exports = { Circle, Triangle, Square };
  