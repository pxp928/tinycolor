const { TinyColor } = require('@ctrl/tinycolor');

console.log('TinyColor Test Project');
console.log('=====================');

// Test basic color creation and manipulation
const color1 = new TinyColor('#ff0000');
console.log('Red color:', color1.toString());
console.log('Red as HSL:', color1.toHslString());
console.log('Red brightness:', color1.getBrightness());

// Test color operations
const color2 = new TinyColor('blue');
console.log('\nBlue color:', color2.toString());
console.log('Blue complementary:', color2.complement().toString());
console.log('Blue lighter:', color2.lighten(20).toString());

// Test color validation
const colors = ['#ff0000', 'invalid-color', 'rgb(255, 0, 0)', 'hsl(120, 100%, 50%)'];
console.log('\nColor validation:');
colors.forEach(color => {
  const tc = new TinyColor(color);
  console.log(`${color}: ${tc.isValid() ? 'valid' : 'invalid'}`);
});
