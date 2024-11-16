function isPrime(number) {
let i, flag = true;

if(number<=1){
    flag = flase
}

for(i=2;i<number-1;i++){
    if(number%i==0)
        flag = false
    break;
}

if(flag == false){
    console.log("Given number is not a prime number")
}
else
console.log("Given number is a prime number")

}

isPrime(8)