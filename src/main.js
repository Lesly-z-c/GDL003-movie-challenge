
let button_search = document.getElementById('search_button');
let button_previous = document.getElementById('button_prev');
let button_next = document.getElementById('button_next');
let result = document.getElementById('result');
let text = document.getElementById('search_text');
let current_page = 1;

document.addEventListener('DOMContentLoaded',()=> {

  let search = "amor";
  //promesa que regresa el fetch
  window.api.findMovies(search, current_page).then( movies => {
    result.innerHTML = "";
    movies.forEach(movie => {
      let card = print_movie(movie);
      result.innerHTML += card;
    });
  });
});


button_search.addEventListener('click',()=> {
    let search = text.value;
    //promesa que regresa el fetch
    current_page = 1;
    window.api.findMovies(search, current_page).then( movies => {
      result.innerHTML = "";
        movies.forEach(movie => {
          let card = print_movie(movie);
          result.innerHTML += card;
        });
    });
});

button_previous.addEventListener('click',()=> {
    let search = text.value;
    //promesa que regresa el fetch
    current_page = current_page -1;
    window.api.findMovies(search, current_page).then( movies => {
      result.innerHTML = "";
        movies.forEach(movie => {
          let card = print_movie(movie);
          result.innerHTML += card;
        });
    });
});

button_next.addEventListener('click',()=> {
  scroll_top();
    let search = text.value;
    //promesa que regresa el fetch
    current_page = current_page +1;
    window.api.findMovies(search, current_page).then( movies => {
      result.innerHTML = "";
      movies.forEach(movie => {
          let card = print_movie(movie);
          result.innerHTML += card;
        });
    });
});

scroll_top = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}