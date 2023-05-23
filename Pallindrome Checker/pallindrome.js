function palindrome(str) {
  // Step 1: Remove non-alphanumeric characters and convert to lowercase
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Step 2: Reverse the string
  var reversedStr = cleanStr.split("").reverse().join("");
  
  // Step 3: Check if the reversed string is equal to the original string
  return cleanStr === reversedStr;
}

console.log(palindrome("eye")); // Output: true
