const { Circle, Square, Triangle } = require('./shapes');

test('Circle render method', () => {
  const circle = new Circle();
  circle.setColor('red');
  circle.setTextColor('black');
  circle.setText('cvs');
  expect(circle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" text-anchor="middle" fill="black">cvs</text></svg>');
});

test('Square render method', () => {
  const square = new Square();
  square.setColor('blue');
  square.setTextColor('black');
  square.setText('cvs');
  expect(square.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="150" height="150" fill="blue"/><text x="125" y="140" text-anchor="middle" fill="black">cvs</text></svg>');
});

test('Triangle render method', () => {
  const triangle = new Triangle();
  triangle.setColor('green');
  triangle.setTextColor('black');
  triangle.setText('cvs');
  expect(triangle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green"/><text x="150" y="150" text-anchor="middle" fill="black">cvs</text></svg>');
});
