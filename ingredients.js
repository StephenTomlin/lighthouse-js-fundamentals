var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
var read = 0;
while (read < 8) {
  console.log(ingredients[read]);
  read++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0;i<8;i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var b = 7;b>=0;b--) {
  console.log(ingredients[b]);
}