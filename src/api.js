window.api = {
    findMovies : (search, page) => {
        if(search=="") {
            search = "amor"
        };
        const url = `http://www.omdbapi.com/?s=${search}&type=movie&page=${page}&apikey=31a448c5`;
        /*en este fetch se hace la peticion ajax a la url que le estamos dando y regresa una promesa el .then
        acomoda la informacion en json y el segundo .then me trae el arreglo de peliculas*/
        return fetch(url).then( response => response.json() )
                    .then( data => {
                       return data.Search;
                       //imprimir errores
                    }).catch(error => console.error(error));            
    }
};

function print_movie(movie) {

    return '<div class="card">' +
                `<img src="${movie.Poster}">` +
                '<div class="container">' +
                    `<h4>Name: ${movie.Title}</h4>` +
                    `<p>Year: ${movie.Year}</p>` +
                '</div>' +
            '</div>';
 
 }
