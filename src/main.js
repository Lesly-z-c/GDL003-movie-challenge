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