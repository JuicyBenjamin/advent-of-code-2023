/*
  Combining the first digit and the last digit (in that order) to form a single two-digit number.

  For example:

  1abc2
  pqr3stu8vwx
  a1b2c3d4e5f
  treb7uchet
  In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
*/

// Create number variable that holds count
// Loop over all of the calibration values
// Convert string to array with split('') method
// Do a loop, check each entry if typeof == number
// First hit gets += to string variable
// Do a loop that pops and returns last entry, check if typeof == number
// First hit get += string variable
// Transform string variable to number variable and += on the number variable