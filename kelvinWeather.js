// The following line will make a constant variable and set it to 293 
const kelvin = 0;

// To convert celsius to kelvin we will subtract it by 273
const celsius = kelvin - 273;

// The following formula is used to calculated the temperature in fahrenheit
let fahrenheit = celsius * (9/5) + 32 ;

// since the value of fahrenheit is usally a decimal we convert it to an int using the floor function
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
