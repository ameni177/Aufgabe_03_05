let pa = document.getElementById("paragraph");
let b1 = document.getElementById("textcolor");
let b2= document.getElementById("backgroundcolor");
b1.onclick = function()
{
    pa.style.color="red";
}

b2.onclick = function()
{
    pa.style.backgroundColor="yellow";
}