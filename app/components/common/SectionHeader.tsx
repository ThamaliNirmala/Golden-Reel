"use client";

import { Movie, SectionHeaderProps } from "@/app/types";
import React, { useState } from "react";
import CommonModalContainer from "./Modal";
import Image from "next/image";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  linkText,
  movies = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-between mb-4 px-52 container mt-10">
        <h2 className="text-xl font-semibold tracking-tight uppercase text-[#9ab]">
          {title}
        </h2>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          className="text-xs hover:text-white transition-colors text-[#9ab] uppercase"
        >
          {linkText}
        </a>
      </div>
      <hr className="text-[#9ab] w-[63.5%] mx-auto" />

      <CommonModalContainer
        title={title}
        width={1000}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {movies.length > 0 ? (
            movies.map((movie: Movie) => (
              <div
                key={movie.id}
                className="rounded overflow-hidden shadow hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || "image"}
                  width={300}
                  height={450}
                  className="rounded object-cover w-full h-full"
                />
                <p className="text-sm text-center mt-1 text-white">
                  {movie.title}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white">No movies available.</p>
          )}
        </div>
      </CommonModalContainer>
    </>
  );
};

export default SectionHeader;
