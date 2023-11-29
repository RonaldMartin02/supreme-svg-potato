// Parent Shape class
class Shape {
    constructor() {
      this.color = ''; // Default color
      this.text = '';  // Default text
      this.textColor = '';  // Default text
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      this.text = text;
    }
    setTextColor(textColor) {
      this.textColor = textColor;
    }

  }
  
  // Circle class extends Shape
  class Circle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  // Square class extends Shape
  class Square extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="150" height="150" fill="${this.color}"/><text x="125" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  // Triangle class extends Shape
  class Triangle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  // Export the classes for use in other files
  module.exports = { Circle, Square, Triangle };
  