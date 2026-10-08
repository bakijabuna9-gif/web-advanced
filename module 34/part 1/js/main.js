//function printName() {
//   document.write("John");
//  document.write("<br>");
//    setTimeout(function(){document.write("Ana");},3000);
//   document.write("Bob");
//}

//printName();

var colors = ['red','green','blue','purpule']

function changeBgColor(){
    document.querySelector('body').style.background = 
    color[Math.floor(Math.random()*colors.length)]
}

var names = ['John','Ana','Bob','Mark']

function changeNames(){
    document.querySelector('p').innerHTML =
    names[Math.floor(Math.random()*names.length)]
}

setInterval(changeBgColor,1000)
setInterval(changeNames,1000)