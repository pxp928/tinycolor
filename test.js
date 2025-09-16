const { TinyColor } = require('@ctrl/tinycolor');

function runTests() {
  console.log('Running TinyColor Tests...\n');
  
  // Test 1: Color creation
  console.log('Test 1: Color Creation');
  const red = new TinyColor('#ff0000');
  console.log(`✓ Red: ${red.toString()}`);
  
  // Test 2: Color conversion
  console.log('\nTest 2: Color Conversion');
  console.log(`✓ Red as RGB: ${red.toRgbString()}`);
  console.log(`✓ Red as HSL: ${red.toHslString()}`);
  console.log(`✓ Red as HSV: ${red.toHsvString()}`);
  
  // Test 3: Color manipulation
  console.log('\nTest 3: Color Manipulation');
  const lightRed = red.lighten(20);
  const darkRed = red.darken(20);
  console.log(`✓ Light red: ${lightRed.toString()}`);
  console.log(`✓ Dark red: ${darkRed.toString()}`);
  
  // Test 4: Color analysis
  console.log('\nTest 4: Color Analysis');
  console.log(`✓ Red is dark: ${red.isDark()}`);
  console.log(`✓ Red is light: ${red.isLight()}`);
  console.log(`✓ Red brightness: ${red.getBrightness()}`);
  
  console.log('\n✅ All tests completed!');
}

runTests();