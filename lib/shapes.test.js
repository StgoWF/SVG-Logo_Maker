const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should render correct SVG for a circle', () => {
    const circle = new Circle('red');
    expect(circle.render()).toEqual('<circle cx="100" cy="100" r="50" fill="red" />');
  });
});

describe('Triangle', () => {
  test('should render correct SVG for a triangle', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="green" />');
  });
});

describe('Square', () => {
  test('should render correct SVG for a square', () => {
    const square = new Square('blue');
    expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="blue" />');
  });
});
