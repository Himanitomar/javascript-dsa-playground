
let firstSmallest = Infinity;
let secondSmallest = Infinity;

let array = [10,-2,-5,0,7]

function findSecondSmallestNumber(array){

for(let i = 0; i<array.length; i++)
    {
    if(array.length<2){
        console.log("Array must have two numbers")
    }

    else if(array[i]< firstSmallest){
        secondSmallest = firstSmallest;
        firstSmallest = array[i];
    }
    else if (array[i]< secondSmallest)
    {
        secondSmallest= array[i]
    }
}
return secondSmallest;

}

let result = findSecondSmallestNumber(array)
console.log("Second Smallest number is :", result);