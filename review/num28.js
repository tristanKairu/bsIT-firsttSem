/* 28. Create an integer variable ranging from 1 to 100. Check if the number is in which quadrant.
Quadrant 1 is ranging from 1 to 25. Quadrant 2 is ranging from 26 to 50. Quadrant 3 is ranging from 51
to 75. Quadrant 4 is ranging from 76 to 100. Output should be “(Number variable) is in quadrant (its
quadrant).” */

x = 1000

if (x >= 1 && x <= 25){
    console.log("This variable is in Quadrant 1.")
}
else if (x >= 25 && x <= 50){
    console.log("This variable is in Quadrant 2.")
}
else if (x >= 51 && x <= 75){
    console.log("This variable is in Quadrant 3.")
}
else if (x >= 76 && x <= 100){
    console.log("This variable is in Quadrant 4.")
}
else {
    console.log("Wtf?")
}

