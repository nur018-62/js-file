console.log("this is arrow function");


let students={
    name:"anisul islam",
    Id:101,
    cgpa:3.23,
}
for (let x in students){
    console.log(x);// output key
   console.log(students[x]);//output value
   console.log(`${x}:${students[x]}`)// output key and value mix 
}

const studentName=()=>students.filter((x)=>x.cgpa>3).map((y)=>y.name);
console.log(studentName);







/*output with filter 
//function studentsname(){
     students.filter (function(x){
        return x.cgpa>3
    }).map(function(y){
        return y.name;
    })
}
console.log(studentsname());*/

