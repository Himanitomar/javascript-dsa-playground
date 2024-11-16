function reverseArray(arr,start,end){

    while(start < end){
        var temp = arr[start]
        arr[start]= arr[end]
        arr[end]= temp
        start++
        end--
    }    
}

function printArray(arr,size){
    for(var i= 0;i<size; i++){
        console.log(arr[i])
    }
}

var arr =[1,2,3,4,5]
var n =5

reverseArray(arr,0,n-1)
printArray(arr,n)