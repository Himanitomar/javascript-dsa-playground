function numbertoWords(input){
    const numberMap ={
        1: "One",
        2: "Two",
        3:"Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        0: "Zero"
    };
    return input.split(',').map(num => numberMap[num.trim()]).join(' ');
}


const input = "8,9,2,3"

const output = numbertoWords(input);

console.log(output);