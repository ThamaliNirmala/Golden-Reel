"use client";
import { useEffect, useState } from "react";
import MovieSlider from "./common/MovieSlider";
import { commonApis } from "../apis";
import SectionHeader from "./common/SectionHeader";
import { MotionShowingSlider } from "./common/MotionSlider";

export default function Movies() {
  const [moviesData, setMoviesData] = useState({
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    popularTvShows: [],
    topRatedTvShows: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          popularMoviesRes,
          topRatedMoviesRes,
          upcomingMoviesRes,
          popularTvRes,
          topRatedTvRes,
        ] = await Promise.all([
          commonApis.getPopularMovies(),
          commonApis.getTopRatedMovies(),
          commonApis.getUpCommingMovies(),
          commonApis.getPopularTvShows(),
          commonApis.getTopRatedTvShows(),
        ]);

        setMoviesData({
          popularMovies: popularMoviesRes.data.results || [],
          topRatedMovies: topRatedMoviesRes.data.results || [],
          upcomingMovies: upcomingMoviesRes.data.results || [],
          popularTvShows: popularTvRes.data.results || [],
          topRatedTvShows: topRatedTvRes.data.results || [],
        });
      } catch (err) {
        console.error("Failed to fetch media data:", err);
      }
    };

    fetchData();
  }, []);

  const {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvShows,
    topRatedTvShows,
  } = moviesData;

  return (
    <>
      <MotionShowingSlider movies={upcomingMovies} />
      <SectionHeader
        title="Popular Movies"
        linkText="More"
        movies={popularMovies}
      />
      <div className="mt-6">
        <MovieSlider movies={popularMovies.slice(0, 10)} />
      </div>

      <SectionHeader
        title="Top Rated Movies"
        linkText="More"
        movies={topRatedMovies}
      />
      <div className="mt-6">
        <MovieSlider movies={topRatedMovies.slice(0, 10)} />
      </div>

      <SectionHeader
        title="Popular TV Shows"
        linkText="More"
        movies={popularTvShows}
      />
      <div className="mt-6">
        <MovieSlider movies={popularTvShows.slice(0, 10)} />
      </div>

      <SectionHeader
        title="Top Rated TV Shows"
        linkText="More"
        movies={topRatedTvShows}
      />
      <div className="mt-6">
        <MovieSlider movies={topRatedTvShows.slice(0, 10)} />
      </div>
    </>
  );
}
