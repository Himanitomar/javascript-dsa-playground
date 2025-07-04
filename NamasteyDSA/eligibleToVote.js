// Write a function which checks if candidate is allowed to vote or not

function checkAge(age){
    if(age<0){
        console.log("Invalid Input")
    }
    else if(age<18){
        console.log("Not eligble to vote")
    }
    else
    console.log("Eligble to vote")

}

checkAge(18);