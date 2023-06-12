function nam (first, second){
    const rel=first + second;
    return rel;
};
const main= nam("Nurul","Amin");
console.log(main);


function calculator(){
    const one=40;
    const two=30;
    const result=one+two;
    return result;// one function has a one retrun.
}
const add=calculator();
console.log(add);


//Nested functio


function jug(){
    const num=40;
    return num*calculator()+"this is value";// it's called nested function add a word in function;

};
console.log(jug());

// input perameter in functon 

function addNumber(main,sub,threed){
    const One=main;
    const two=sub;
    const three=threed;
    return One+two+three;
}
console.log(addNumber(30,40,50));

// withOut variable

function min(main2,main3,main4){
    main2;
    main3;
    main4;
    const as= main2+main3+main4;// with out variable in function
    return as;
};
console.log(min(3,3,3));

