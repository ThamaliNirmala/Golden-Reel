import api from "@/app/lib/axios";
import { FETCH_POPULAR_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_UP_COMMING_MOVIES, FETCH_POPULAR_TV_SHOWS, FETCH_TOP_RATED_TV_SHOWS } from "../constants";

export const commonApis = {
    getPopularMovies : async () => await api.get(FETCH_POPULAR_MOVIES),
    getTopRatedMovies : async () => await api.get(FETCH_TOP_RATED_MOVIES),
    getUpCommingMovies : async () => await api.get(FETCH_UP_COMMING_MOVIES),
    getPopularTvShows : async () => await api.get(FETCH_POPULAR_TV_SHOWS),
    getTopRatedTvShows : async () => await api.get(FETCH_TOP_RATED_TV_SHOWS),
}

