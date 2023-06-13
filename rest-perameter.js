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