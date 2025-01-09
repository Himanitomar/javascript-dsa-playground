function repeatTruth(name){

    for(let i =1; i<=10;i++){
        console.log(`${i}${name} do not know how to code \n`);
    }
return name;
   
}
const newName =
repeatTruth("Himani");

const eachletter = newName.split('');
console.log(eachletter)
console.log(eachletter[2]);

for(let i = 0; i<eachletter.length;i++){
    if(i%2==0){
        console.log(`#$%${eachletter[i]}*&^%$ \n`)
    }
}

for(let n of eachletter){
    if(n % 2 == 0){
        console.log(`${eachletter} *#*`)
    }
}
