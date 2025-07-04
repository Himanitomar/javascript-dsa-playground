//Write a function to find the second lalrgest number in an arry

let firstLargestNumber, secondLargestNumber;
let array = [12,9,0,7,8,6,8]
function secondLargest(array){

for(let i = 0; i< array.length; i++){

if(array.length<2){
        console.log("Array should have min 2 elements");
    }
if(array[i] > firstLargestNumber){
    secondLargestNumber= firstLargestNumber;
    firstLargestNumber= array[i];
}
else(array[i] > secondLargestNumber && array[i]!= firstLargestNumber) // checks if array has dublicates elements
{
    secondLargestNumber = array[i];
}
}
return secondLargestNumber;
}

let result = secondLargest(array)
console.log("Second largest number is :", result);