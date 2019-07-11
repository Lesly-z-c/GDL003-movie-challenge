window.api = {
    findMovies : (search, page) => {
        const movies = `http://www.omdbapi.com/?s=${search}&type=movie&page=${page}&apikey=31a448c5`;
        fetch(movies)

        .then( response => response.json() )
        .then( data => console.log(data) )

    }
};

//window.api.findMovies('sailor moon',1);

function print_character(Search) {

    return '<div class="card">' +
                `<img src="${Search.Poster}">` +
                '<div class="container">' +
                    `<h4>Name: ${Search.Title}</h4>` +
                    `<p>Status: ${Search.Year}</p>` +
                '</div>' +
            '</div>';
    
}