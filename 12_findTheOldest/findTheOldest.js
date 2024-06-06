const assignAge = function(person) {
    let age = "";
    if (person.yearOfDeath === undefined) {
      age = ((new Date()).getFullYear()) - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    console.log("ages: " + person.name + "=" + age);
    return age;
  }
  
// console.log(assignDeath(arr)); // works!

const findTheOldest = function(arr) {
  const oldestArray = arr.toSorted((a, b) => (assignAge(a) > assignAge(b)) ? -1 : 1);
  const oldest = oldestArray[0];
  // console.log(oldestArray);
  console.log(oldest);
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
