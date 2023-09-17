/* 29. Create an array consisting of five Boolean elements. If there are 3 or more than 3 trues, output
“Thank you.” If there are 3 or more than 3 falses, output “Sorry” */

let x = [true, true, false, false ,false]

let tr = 0
let fa = 0

for (let i = 0; i < x.length; i++){
    if (x[i] == true){
        tr += 1
    }
    else {
        fa += 1
    }
    if(tr >= 3){
        console.log("Thank you!")
    }
    else if (fa >= 3){
        console.log("Sorry!")
    }
}
