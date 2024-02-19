let selecting=document.querySelectorAll("img")[0];
let random_one=Math.floor(Math.random()*5+1)
let selector="/Dicee Challenge - Starting Files/images/dice"+random_one+".png"
selecting.setAttribute("src",selector)

let selecting_two=document.querySelectorAll("img")[1];
let random_two=Math.floor(Math.random()*5+1)
let selector_two="/Dicee Challenge - Starting Files/images/dice"+random_two+".png"
selecting_two.setAttribute("src",selector_two) 
if(random_one>random_two)
{
    document.querySelector("h1").innerHTML="player one wins"
} 
else if(random_one<random_two)
{
    document.querySelector("h1").innerHTML="player two wins"
} 
else
{
    document.querySelector("h1").innerHTML="draw"
}
