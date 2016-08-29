function ageCalculator(name,yearofBirth,currentYear) {
  age = currentYear - yearofBirth
  return (name + "is" + age + "years old.");
}
console.log(ageCalculator(Stephen,1993,2016));