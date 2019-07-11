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


function print_character(Search) {

    return '<div class="card">' +
                `<img src="${Search.Poster}">` +
                '<div class="container">' +
                    `<h4>Name: ${Search.Title}</h4>` +
                    `<p>Status: ${Search.Year}</p>` +
                '</div>' +
            '</div>';
 
 }


document.getElementById("btnOfSeasons").addEventListener("click",showPagesOfSeasons);
document.getElementById("btnOfCharacters").addEventListener("click",showCharacters);

