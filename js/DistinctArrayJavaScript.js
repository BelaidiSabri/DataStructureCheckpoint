var set1 = [3, 1, 7, 9, 1];
var set2 = [2, 4, 1, 9, 3];
var sum = 0;
for (i = 0; i < set1.length; i++) {
  if (set1.includes(set2[i]) == false) {
    console.log(set2[i]);
    sum += set2[i];
  }
  if (set2.includes(set1[i]) == false) {
    console.log(set1[i]);
    sum += set1[i];
  }
}
console.log(`the sum is ${sum}`);
