var text = "The best school in the world is Digital School!";
var result = text.search("Digital School");
document.getElementById("result1").innerHTML = result;

var text = "The best school in the world is Digital School!";
var result = text.search(/Digital School/);
document.getElementById("result2").innerHTML = result;

var text = "The best school in the world is Digital School!";
var result = text.replace(/Digital School/,"Another school");
document.getElementById("result3").innerHTML = result;

var text = "abcdef";
var regex = new RegExp('abcd');
document.getElementById("result4").innerHTML = regex.test(text);

var text = "My school is the best school in the world!";
var regex = /school/g;
document.getElementById("result5").innerHTML = text.match(regex);

var text = "Digital school is the best school in the world!";
var regex = /i/g;
document.getElementById("result6").innerHTML = text.match(regex);

var text = "Digital school is the best school in the world!";
var regex = /[abc]/g;
document.getElementById("result7").innerHTML = text.match(regex);

var text = "Digital school is in top 10 best schools of the world!";
var regex = /[0-9]/g;
document.getElementById("result8").innerHTML = text.match(regex);

var text = "My school is the best school in the world!";
var regex = /(top|best|school)/g;
document.getElementById("result9").innerHTML = text.match(regex);

var text = "100 percent";
var regex = /\d/g;
//digits
document.getElementById("result10").innerHTML = text.match(regex);

var text = "My school is the best school in the world!";
var regex = /\s/g;
document.getElementById("result11").innerHTML = text.match(regex);

var text = "Heeey, how are you?";
var regex = /e+/g;
document.getElementById("result12").innerHTML = text.match(regex);

var text = "so, I hope we'll see each othe again soon...";
var regex = /so*/g;
document.getElementById("result13").innerHTML = text.match(regex);

var text = "hey, hi, hiii!!!";
var regex = /hi?/g;
document.getElementById("result14").innerHTML = text.match(regex);

var text = "hello,helloo,helooo!!!";
var regex = /o{3}/h;
document.getElementById("result15").innerHTML = text.match(regex);

var text = "hello, helloo, hellooo, helloooo, heloooooooooooo!!!";
var regex = /o{3, 5}/g;
document.getElementById("result16").innerHTML = text.match(regex);

var text = "bestfriend boyfriend girlfriend";
var regex = /end&/g;
document.getElementById("result17").innerHTML = text.match(regex);

var text = "cat,catalog,category";
var regex = /^cat/g;
document.getElementById("result18").innerHTML = text.match(regex);