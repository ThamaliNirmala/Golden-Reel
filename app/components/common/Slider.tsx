"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SliderProps } from "@/app/types";

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 4;

  const nextSlide = () => {
    if (currentIndex + slidesPerView < slides.length) {
      setCurrentIndex(currentIndex + slidesPerView);
    }
  };

  const prevSlide = () => {
    if (currentIndex - slidesPerView >= 0) {
      setCurrentIndex(currentIndex - slidesPerView);
    }
  };

  const visibleSlides = slides.slice(
    currentIndex,
    currentIndex + slidesPerView
  );

  return (
    <div className="relative">
      <div className="flex items-center justify-center space-x-4 overflow-hidden px-2">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="text-white bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 disabled:opacity-30"
        >
          <ChevronLeft />
        </button>
        <div className="flex space-x-4 mr-3">
          {visibleSlides.map((slide) => (
            <div
              key={slide.id}
              className="w-[200px] hover:border-2 border-[#00E054] rounded-xl"
            >
              {slide.content}
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          disabled={currentIndex + slidesPerView >= slides.length}
          className="text-white bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
