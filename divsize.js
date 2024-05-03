let d = document.getElementById("d");
let bg = document.getElementById("gr");
let bk = document.getElementById("kl");
bg.onclick= function()
{
    d.setAttribute("class",  "divgross");
}
bk.onclick= function()
{
    d.setAttribute("class",  "divklein");
}