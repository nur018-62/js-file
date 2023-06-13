console.log("this is rest-paramater");
//simple function with paramater

function mege(text){
    console.log(text)
};
mege("this is es6");

// functoin with default perameter
function mege1(text="this is default"){
console.log(text);
};
mege1();

// function with rest perameter 
function jug(x,y){
    console.log(`${x},${y}`);
}
jug(30,30);

// rest perameter 
function add(x,y,...z){
    console.log(`x=${x},y=${y},z=${z}`);
}
add(12,23,56,78,67,76);// thats mean they carry last value in last variable 

//spread oparator 

const one=[1,2,3];
const two=[4,5,6,7];
const number=[...one,...two];
console.log(number);