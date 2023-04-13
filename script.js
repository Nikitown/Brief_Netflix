import { carousel } from "./carousel.js";


let nameMovieRef = document.getElementById("movie-btn");
let searchButton = document.getElementById("search-btn");

const keyApi = "f37dc4ecf11a01ea2c4f83098b2b9cc1";

const urlApi = "https://api.themoviedb.org/3"



async function getMoviesInfo() {
    const response = await fetch(`${urlApi}/movie/popular?api_key=${keyApi}`);
    const data = await response.json();
    console.log(data.results);



const topMovies = data.results;

topMovies.forEach(movie => {
  console.log(movie.backdrop_path);

const showMovies = document.getElementById("card-topmovies");

const createImage = document.createElement("img");

createImage.setAttribute('src', "https://image.tmdb.org/t/p/w185" + movie.poster_path);

console.log("test")

showMovies?.append(createImage);

})
}
getMoviesInfo()




async function getTopMoviesInfo() {
  const responsetopRated = await fetch(`${urlApi}/movie/top_rated?api_key=${keyApi}`);
  const datatopRated = await responsetopRated.json();
  console.log(datatopRated.results);



const topMovies = datatopRated.results;

topMovies.forEach(movie => {
console.log(movie.poster_path);

const showMovies = document.getElementById("card-topratedmovies");

const createImage = document.createElement("img");

createImage.classList.add("hover", "img-topmovies");

createImage.setAttribute('src', "https://image.tmdb.org/t/p/w185" + movie.poster_path);


showMovies?.append(createImage);

})
}
getTopMoviesInfo()


// async function getUpcomingMoviesInfo() {
//   const responseUpcoming = await fetch(`${urlApi}/movie/upcoming?api_key=${keyApi}`);
//   const dataUpcoming = await responseUpcoming.json();
//   console.log(dataUpcoming.results);



// const topMovies = dataUpcoming.results;

// topMovies.forEach(movie => {
// console.log(movie.poster_path);

// const showUpcomingMovies = document.getElementById("carousel-demo");

// const createImage = document.createElement("img");

// createImage.setAttribute('src', "https://image.tmdb.org/t/p/w185" + movie.poster_path);


// showUpcomingMovies?.append(createImage);

// })
// }
// getUpcomingMoviesInfo()

// setTimeout(carousel() , 400)