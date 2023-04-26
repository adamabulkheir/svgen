//Importing these classes from the shapes folder
const {circle, triangle, square} = require("./generateSvg");

//Testing to see a circle with a blue background
describe('circle', () => {
    test('circle test with a blue color background', () => {
        const shape = new circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(<circle cx='150' cy='115' r='80' fill='blue'/>);
    });
});

//Testing to see a triangle with a green background
describe('triangle', () => {
    test('triangle test with a green color background', () => {
        const shape = new triangle();
        shape.setColor('green');
        expect(shape.render()).toEqual(<polygon points='150, 18 244, 182 56, 182' fill='green'/>);
    });
});

//Testing to see a square with a red background
describe('square', () => {
    test('square test with a yellow color background', () => {
        const shape = new square();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(<rect x='90' y='40' width='160' height='160' fill='yellow'/>);
    });
});