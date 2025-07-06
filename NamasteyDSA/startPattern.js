
function startPattern(n){

    for(let i =0; i<n; i++){
        let row = " ";
        for(let j = 0;j<n; j++){
            row = row + " *"
        }
        console.log(row);
    }
}

startPattern(4)


//Note: Learning Point - console.log() adds a \n after printing hence the code which I learned in 12 class for C++ is different and will not work in JavaScript.


function secondStarPattern(n){
    for(let i =0;i <n;i++){
        let row = " ";
        for(let j =0;j<i+1;j++){ 
                row = row + "*"
        }
        console.log(row);
    }
}

secondStarPattern(4)


function thirdStarPattern(n){
    for(let i =0; i<n;i++){
        let row = " ";
        for(let j=0; j<n-i;j++){
            row = row + " *"
        }
        console.log(row);
    }
}
thirdStarPattern(4)