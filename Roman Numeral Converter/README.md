# Roman Numeral Converter

This is a JavaScript function that converts a given number into a Roman numeral representation.

## Problem Statement

Given a number, the task is to convert it into a Roman numeral. The Roman numeral system uses specific symbols to represent numbers. The symbols and their corresponding values are:

| Roman Numeral | Arabic Numeral |
| ------------- | -------------- |
| M             | 1000           |
| CM            | 900            |
| D             | 500            |
| CD            | 400            |
| C             | 100            |
| XC            | 90             |
| L             | 50             |
| XL            | 40             |
| X             | 10             |
| IX            | 9              |
| V             | 5              |
| IV            | 4              |
| I             | 1              |

The function should return the Roman numeral representation of the given number. All Roman numerals should be provided in upper-case.

## Usage

The function `convertToRoman(num)` takes a number (`num`) as input and returns its Roman numeral representation.

Example:
```javascript
console.log(convertToRoman(36)); // Output: XXXVI
