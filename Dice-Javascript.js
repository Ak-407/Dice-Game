// dice 1
var a;
a= Math.random();
a=a*6;
a=Math.floor(a);
a=a+1;

var dice1 = "inverted-dice-"+a+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", dice1);

// dice 2
var b;
b= Math.random();
b=b*6;
b=Math.floor(b);
b=b+1;

var dice2 = "inverted-dice-"+b+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", dice2);

if (b>a) {
    var title = document.querySelector("h1").innerHTML="2nd Win ----->>>";
}
else if (a>b) {
    var title = document.querySelector("h1").innerHTML="<<<----- 1st Win";
}
else{
    var title = document.querySelector("h1").innerHTML="----Tie----";
}
// refresh button
document.querySelector("button").addEventListener('click', () => {window.location.reload(true)});