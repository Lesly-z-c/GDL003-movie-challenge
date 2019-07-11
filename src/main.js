//fetch(http://http://www.omdbapi.com/#parameters)
document.getElementById("homePage").style.display = "block";


let showMoviesOfActor = () => {
    let actorSelect;
    actorSelect = document.getElementById("nameOfActor").value;
    document.getElementById("homePage").style.display = "none";
    
}
let showNameOfActor = () => {
    actorSelect = document.getElementById("nameOfActor").value;
    moviesOfActorPage.innerHTML = actorSelect;
}

document.getElementById("nameOfActorForSearch").addEventListener("click",showMoviesOfActor);

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
