console.log("object");
var car={
    name:"BMW",
    color:"white",
    price:"1 core"
}
console.log("This is car name:"+car.name);
console.log("this is color of car"+car.color);
console.log("this is car price"+car.price);

// object in function 
var bus={
    name:"Hanif",
    nam:function(){
        return this.name;//"this means a object"
    }
}
console.log(bus.nam());


// 2nd type of object

var miniCar={};
miniCar.name="Toyota";
miniCar.color="red";
console.log(miniCar.name);
console.log("this is color"+miniCar.color);