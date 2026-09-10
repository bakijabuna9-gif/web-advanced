//Functions

//function showMessage(){
//    alert("This message is inside the showMwssage() function");
//
//}

//showMessage();

//funksini me parametra
function sum(number1,number2,numri3,numri4){
   return number1 + number2 + numri3 + numri4;
}

console.log(sum(25,5,10,2));

function pjestimi(numri1,numri2){
    return numri1/numri2
}

console.log(pjestimi(30,10));

//fahrenheit to celsius
function toCelsius(f){
    return (5/9) * (f-32);
}

console.log("54 fahrenhet is equal to " + toCelsius(54) + "celsius");

var rezultati = toCelsius(54);

console.log("54 fahrenheit is equal to " + rezultati + "celsius");

funciton toSeconds(minutes){
    return minutes * 60;
}


console.log(toSeconds(2));
console.log(toSeconds(23));

//Objektet - objects
var car = {
    name:"Mercedes",
    color:"red",
    year:2020,
    kilometres:0,
    startEngine:function(){
        alert("VROOOMMM!!!")
    },
    get getKilometres(){
        return this.kilometres;
    },
    set setKilometres(km){
        this.kilometres = km;
    }

};

console.log(car.getKilometres);
car.setKilometres = 100;
console.log(car.getKilometres);

var school = {
    name:"Digital School",
    subject:"Programming",
    students:1500,
    year:2016
};

//alert(car.name);
//alert(car.color)
//alert.startEngine();
//alert(school.name)

var computer = new Object();

computer.name = "Lenevo";
computer.CPU = "Intel core 17";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";

computer.type = function(){
    return this.name + "," + this.CPU + "," + this.RAM + "," + "," + this.GPU;
}

alert(computer.GPU);

alert(computer.type())

delete computer.GPU;

alert(computer.GPU);

function Computer(name,CPU,RAM,GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM;
    this GPU = GPU;
}

var computer1 = new Computer("macbook","m1","8gb","5600M gpu");
var compiter2 = new Computer