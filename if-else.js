console.log("this is if else stement");

const pass=10203040;
const type=1020300;
if(pass===type){//=== that means equal type and index
    console.log("this is right password");// if true output this is right 
}else{
    console.log("try again");//if else output try again
}


const num=3000;
if(num>=80 && num<=100){
    console.log('A+');
}
else if(num>=70 && num<80){
    console.log("A");
}else if(num>=60 && num<70){
    console.log("A-");
}else if(num>=50 && num<60){
    console.log("B+");
}else if(num>=40 && num<50){
    console.log("B");
}else if (num>=33 && num<40){
    console.log("pass");
}else if(num<33){
    console.log("You are fail");
}else{
     console.log("invalid num");
};
        