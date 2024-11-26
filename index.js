  function scuberGreetingForFeet(someValue) {
    if (someValue <= 400) {
      return "This one is on me!"; // Free sample for rides <= 400 feet
    } else if (someValue > 400 && someValue <= 2000) {
      return "That will be twenty bucks."; // $20 for rides between 400 and 2000 feet
    } else if (someValue > 2000 && someValue <= 2500) {
      return "I will gladly take your thirty bucks."; // $30 for rides between 2000 and 2500 feet
    } else {
      return "No can do."; // Reject rides over 2500 feet
    }
  }


function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
  
}
console.log(scuberGreetingForFeet(199));  // "This one is on me!"
console.log(scuberGreetingForFeet(1500)); // "That will be 20 dollars."
console.log(scuberGreetingForFeet(2200)); // "I will gladly take your thirty bucks."
console.log(scuberGreetingForFeet(3000)); // "No can do."

console.log(ternaryCheckCity("NYC"));     // "Ok, sounds good."
console.log(ternaryCheckCity("LA"));      // "No go."

console.log(switchOnCharmFromTip("generous"));       // "Thank you so much."
console.log(switchOnCharmFromTip("not as generous"));// "Thank you."
console.log(switchOnCharmFromTip("anything else"));  // "Bye."