
let boton_busqueda = document.getElementById('Busqueda');
let boton_previous = document.getElementById('boton_prev');
let boton_next = document.getElementById('boton_next');
let resultado = document.getElementById('resultado');
let texto = document.getElementById('buscar-texto');
let current_page = 1;

boton_busqueda.addEventListener('click',()=> {
    let busqueda = texto.value;
    //promesa que regresa el fetch
    window.api.findMovies(busqueda, current_page).then( movies => {
        movies.forEach(movie => {
          let card = print_movie(movie);
          resultado.innerHTML += card;
        });
    });
});

boton_previous.addEventListener('click',()=> {
    let busqueda = texto.value;
    //promesa que regresa el fetch
    current_page = current_page -1;
    window.api.findMovies(busqueda, current_page).then( movies => {
        movies.forEach(movie => {
          let card = print_movie(movie);
          resultado.innerHTML += card;
        });
    });
});

boton_next.addEventListener('click',()=> {
    let busqueda = texto.value;
    //promesa que regresa el fetch
    current_page = current_page +1;
    window.api.findMovies(busqueda, current_page).then( movies => {
        movies.forEach(movie => {
          let card = print_movie(movie);
          resultado.innerHTML += card;
        });
    });
});

