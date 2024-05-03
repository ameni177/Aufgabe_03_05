let beinaus = document.getElementById("einaus");
let image = document.getElementById("im");
beinaus.onclick = function()
{
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }

}
