/* 15. Create a number then create an if-else statement if it is visible by both 5 and 3, or only visible by 5,
or only visible by 3. Lastly, output should be “(Number variable) is divisible by both 5 and 3” or “by 5” or
“by 3” */


a = 15

if (a %5 == 0 && a %3 == 0){
    console.log(a, "is divisible by both 5 and 3")
}

else if (a %5 == 0){
    console.log(a, "is divisible by both 5")
}
else if (a %3 == 0){
    console.log(a, "is divisible by both 3")
}

