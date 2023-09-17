/* 25. Create an array composing of 2 elements with integer data types. First element should have higher
value than the second element. Make the value of the second element equal or greater than the first
element just by adding 2 each time it runs in a for-loop. Then output the array */

x = [16,5]

for (let i = x[1]; i<x[0]; i+=2){

    x[1] += 2;
}
console.log(x)
