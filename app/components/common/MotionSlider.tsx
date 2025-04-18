"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MovieSliderProps } from "@/app/types";

export const MotionShowingSlider = ({ movies }: MovieSliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl w-[63.5%] mx-auto mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={movies?.[index]?.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w780${movies?.[index]?.poster_path}`}
            alt={movies?.[index]?.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />

          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Now Showing
          </div>

          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-xl text-lg">
            {movies?.[index]?.title}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
