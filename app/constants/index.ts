const FETCH_POPULAR_MOVIES = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=20&sort_by=popularity.desc"
const FETCH_TOP_RATED_MOVIES = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=20&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200"
const FETCH_UP_COMMING_MOVIES = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}"
const FETCH_POPULAR_TV_SHOWS = "https://api.themoviedb.org/3/discover/tv?include_adult=false&page=20&sort_by=popularity.desc"
const FETCH_TOP_RATED_TV_SHOWS = "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=20&sort_by=vote_average.desc&vote_count.gte=200"

export {FETCH_POPULAR_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_UP_COMMING_MOVIES, FETCH_POPULAR_TV_SHOWS, FETCH_TOP_RATED_TV_SHOWS}