/* moviescript.js use fetch to load movies from movie database into cards */
/* Fetching movie from the movie database, refer to https://developer.themoviedb.org/docs/getting-started */ 
/* username: csci355project2  pass: Movie2024*/
/* API Access Key for CSCI350 Spring 2024 Group22 API Key 19b77639402b4b99fade050f95ac7914 for Project 2*/ 
/* Const IMG URL sample reference https://developer.themoviedb.org/docs/image-basics */

const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=19b77639402b4b99fade050f95ac7914&page=1'
const IMG_PATH='https://image.tmdb.org/t/p/w1280'
//example search request: -url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=19b77639402b4b99fade050f95ac7914'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query="'

const main = document.getElementById('main')  //display movies
const form = document.getElementById('form') //prefix to listeners on the form
const search = document.getElementById('search')


/*Make a request to fetch a list of initial movie data*/
getMovies(API_URL)

//async await function where fetch returns a promise
async function getMovies(url){
    const res = await fetch(url) //fetch returns a promise
    const data = await res.json() //this provides movie data

    showMovies(data.results)   //results array from the await fetch 
}

/* Function to show movies after taking a list of movies*/
/* new movie lists will replace previous movie lists*/
function showMovies(movies){
    main.innerHTML = ''  //set main display of movie matrix to nothing
    //loop through movie data that is fetched
     //parse data for object of movie response using 
        //destructuring i.e. movie.title
            //access movie.title and other data properties using destructing of the move object array
            //to pull movie data out of movie object
    movies.forEach((movie)=>{
       
        const {title, poster_path, vote_average, overview} = movie
        
        //Create and fill divs with real data and put it into the DOM
        const movieEl = document.createElement('div')

        movieEl.classList.add('movie')  //gives us initial div
        //Movie rating - green text for high rating, mid rating orange, low rating red 
        movieEl.innerHTML = `
        <a href="${IMG_PATH + poster_path}" target="_blank"> <img src="${IMG_PATH + poster_path}"  alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3> 
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
        ${overview}
        </div>
        </a>`
        
    main.appendChild(movieEl)
    })
}
//vote function display movie ratings
function getClassByRate(vote) {
    if (vote >= 8){
        return 'green'
    } else if (vote >= 5){
        return 'orange'
    }else {
        return 'red'
    }
}

//Need an eventlistener on the form for submit. and search of movie term
//note submit and function parameters
form.addEventListener('submit', (e) =>{
    e.preventDefault()//call e.prev to prevent submit to page
    /* take the value from the event object
     * search term and put it in a variable
     */
    const searchTerm = search.value //this value is an input

    if (searchTerm && searchTerm !=='') //check if search term exists and not equal to anything
    {
        //Concatnate search url and term and api key
            getMovies(SEARCH_API+searchTerm+'&api_key=19b77639402b4b99fade050f95ac7914') 
            search.value = ''  //clear search value
    } else{ //if no result is found simply reload
        window.location.reload()
    }

})

/* Try to play movie with URL https://www.themoviedb.org/#play=C5vZijjCGbE */