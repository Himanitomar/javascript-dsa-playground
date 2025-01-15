
// Closures is a combination of function  bundelled together with refernces to its surrounding state. 
//OR function along with it's lexical scope form a Closures
//OR closures gives function access to its Outer Scope


function closuresExample(){
    var nameOfCity = "Eindhoven";
    function displayNameOfTheCity(){
        console.log(`Name of the city is ${nameOfCity}`);
        console.log(nameOfCity);
    }
    displayNameOfTheCity();
}
closuresExample();


/*
 * BeforeES6 var has ----> Function-scoped or Global Scoped.
 * Blocks with curly braches {} do not create scope
 * 
 * 
 * */


if(Math.random()>0.6){
    var x= 4;
}else {
    var x =5 ;
}

console.log(x);

/**
 * The above should throw error but doesnt because x is treated as global variable. 
 * If we change the type to const or let we will get Reference error x is not defined.
 * This is because const and let are blocked scope
 */



