"use client";

import React from "react";
import Slider from "./Slider";
import { MovieSliderProps } from "../../types";
import { Star } from "lucide-react";
import { Tooltip } from "antd";

const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
  const slides = movies.map((movie) => ({
    id: movie.id,
    content: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white space-y-1">
          <h2 className="text-lg font-semibold">{movie.title}</h2>

          <Tooltip
            title={movie.overview}
            placement="top"
            arrow={{ pointAtCenter: true }}
          >
            <p className="text-sm line-clamp-2 cursor-pointer">
              {movie.overview}
            </p>
          </Tooltip>

          <div className="flex items-center justify-between mt-2 text-xs">
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={14} />
              <span>{movie.vote_count}</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-zinc-700 text-white uppercase tracking-wide text-[10px]">
              {movie.original_language}
            </span>
          </div>
        </div>
      </div>
    ),
  }));

  return <Slider slides={slides} />;
};

export default MovieSlider;
