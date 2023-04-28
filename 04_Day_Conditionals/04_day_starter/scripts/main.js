// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')


let age_user = prompt("Enter your age: ")
const my_age = 18
console.log(age_user >= 18 ? "You are old enough to drive" : `You are left with ${18-age_user} years to drive`)
if (age_user > my_age) {
    console.log(`You are ${age_user-my_age} years older than me`)
} else if (age_user < my_age) {
    console.log(`I am older than you`)
} else {
    console.log("Equal")
}


function daysInMonth(month, year) {
    // Check if month is February
    if (month === 1) {
      // Check if year is leap year
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    } else {
      // Get the number of days in the month for non-February months
      return new Date(year, month + 1, 0).getDate();
    }
  }
  
  // Example usage
  console.log(daysInMonth(1, 2023)); // Output: 28 (February 2023 has 28 days)
  console.log(daysInMonth(3, 2023)); // Output: 31 (March 2023 has 31 days)
  