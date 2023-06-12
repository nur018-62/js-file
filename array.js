console.log("array");
//make array
var car=["BMW","TOYOTA"];
console.log("this car name"+" "+car[0]);// index staert from o,1,2,3,4,5,,6,7,8,9

var miniCar=["SUZUKI","HONDA","HERO",[300,44444,666]];
var carName=miniCar[0];
var carPrice=miniCar[3][0];
console.log(carName+carPrice);


//array with new syestem
var empoyers=new Array(
    "Nasim",
    "lukman",
    "roni"
)
console.log("his name is "+" "+empoyers[0]);
console.log("his name is"+" "+empoyers[1]);


// new array 

var man=[];
man[0]="Noyon";
man[1]="shahed"
console.log(man[0])

//object use in array
var manus=[];
manus[0]={name:"lukman Husain",age:22};// this is object use in array method
console.log(manus[0].name);
console.log(manus[0].age);
