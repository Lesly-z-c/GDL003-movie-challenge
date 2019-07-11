document.getElementById("homePage").style.display = "block";
document.getElementById("btnOfPage1").style.display = "none";
document.getElementById("btnOfPage2").style.display = "none";
document.getElementById("btnOfPage3").style.display = "none";

let showPagesOfSeasons = () => {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("btnOfSeasons").style.display = "none";
    document.getElementById("btnOfPage1").style.display = "block";
    document.getElementById("btnOfPage2").style.display = "block";
    document.getElementById("btnOfPage3").style.display = "block";
    document.getElementById("btnOfCharacters").style.display = "none";
}

let showCharacters = () => {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("btnOfSeasons").style.display = "none";
    document.getElementById("btnOfCharacters").style.display = "none";
}



 let episodes = window.example.computeStats(search);
const Seasons = document.querySelector(".allseason");
let output = " ";
 Seasons.forEach(search =>
{
    output += `
    <div class = "season billboard">
    <div class = "season card"> 
    <p>poster: ${search.Poster}</p>
    <p>title: ${search.Title}</p>
    <p>year: ${search.Year}</p>
    `
})

Seasons.innerHTML = output;

document.getElementById("btnOfSeasons").addEventListener("click",showPagesOfSeasons);
document.getElementById("btnOfCharacters").addEventListener("click",showCharacters);

