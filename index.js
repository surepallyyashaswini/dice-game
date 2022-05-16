var randomNo=Math.floor(Math.random()*6)+1;
var randimg="dice"+randomNo+".png";
var randomimgsrc="images/"+randimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsrc);
var randomNo2=Math.floor(Math.random()*6)+1;
var randimg2="dice"+randomNo2+".png";
var randomimgsrc2="images/"+randimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsrc2);
if(randomNo>randomNo2){
    document.querySelector("h1").innerHTML="player 1 wins";

}
else if(randomNo2>randomNo){
    document.querySelector("h1").innerHTML="player2 wins";

}
else{
    document.querySelector("h1").innerHTML="draw ";
}
