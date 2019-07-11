window.api = {
    findMovies : (search, page) => {
        const movies = `http://www.omdbapi.com/?s=${search}&type=movie&page=${page}&apikey=31a448c5`;
        fetch(movies)
        .then( response => response.json() )
        .then( data => console.log(data) )



    

    
    }
};

window.api.findMovies('sailor moon',1);