var set1 = [12, 13, 6, 10];
var set2 = [13, 10, 16, 15];
var sum = 0;
for (i = 0; i < set1.length; i++) {
  for (let j = 0; j < set2.length; j++) {
    if(set2[j]==set1[i]){
        sum+=2*set2[j]
    }
    
  }

}
console.log(`the sum is ${sum}`)