function convertToRoman(num) {
  // Create arrays for the Roman numeral symbols and their corresponding values
  var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  var romanNumeral = ""; // Initialize the variable to store the Roman numeral representation
  
  // Iterate through the Roman numeral symbols and values
  for (var i = 0; i < romanSymbols.length; i++) {
    // While the current value can be subtracted from the number
    while (num >= romanValues[i]) {
      romanNumeral += romanSymbols[i]; // Add the corresponding symbol to the Roman numeral
      num -= romanValues[i]; // Subtract the value from the number
    }
  }
  
  return romanNumeral;
}

console.log(convertToRoman(36)); // Output: XXXVI
