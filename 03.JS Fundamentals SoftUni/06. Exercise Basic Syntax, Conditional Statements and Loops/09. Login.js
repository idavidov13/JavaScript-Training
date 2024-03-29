// You will be given a string representing a username. The correct password will be that username reversed. Until you
// receive the correct password print on the console: "Incorrect password. Try again.". When you receive the
// correct password print: "User {username} logged in."
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the
// program.
// The input comes as an array of strings - the first string represents username and each subsequent string is a
// password.
// Examples
// Input Output
// ['Acer','login','go','let me in','recA'] Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User Acer logged in.
// ['momo','omom'] User momo logged in.
// ['sunny','rainy','cloudy','sunny','not
// sunny']
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User sunny blocked!
function login(input) {
  let index = 0;
  let username = input[index];
  let reverseUsername = username.split("").reverse().join("");
  index++;
  let password = "";
  let entryNum = 1;
  while (entryNum <= 4) {
    password = input[index];
    index++;
    if (password === reverseUsername) {
      console.log(`User ${username} logged in.`);
      flag = false;
      break;
    } else if (entryNum < 4 && password !== reverseUsername) {
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${username} blocked!`);
    }
    entryNum++;
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
