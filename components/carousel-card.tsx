import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "./carousel.css";

export interface CarouselItem {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

interface CarouselCardProps {
  items: CarouselItem[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ items }) => {
  const [activeIndex, setactiveIndex] = React.useState(0);
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={50}
        emulateTouch
        swipeable
        showIndicators={false}
        onChange={(e) => {
          setactiveIndex(e);
        }}
        renderArrowPrev={(clickHandler: () => void) => (
          <button
            onClick={clickHandler}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 p-2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white-600" />
          </button>
        )}
        renderArrowNext={(clickHandler: () => void) => (
          <button
            onClick={clickHandler}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 p-2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white-600" />
          </button>
        )}
      >
        {items.map((item, index) => {
          const isActiveIndex = index === activeIndex;

          return (
            <div
              key={index}
              className={cn(
                "bg-[#EDFCFF] shadow-lg p-6 m-4 w-[260px] ml-[-10%] rounded-xl",
                isActiveIndex && "py-10 w-[280px] ml-[-20%] bg-white"
              )}
            >
              <div className="flex flex-col items-center h-full">
                <div className="relative">
                  <Image
                    src="/avatar-card.png"
                    alt="image-card"
                    width={120}
                    height={120}
                  />
                </div>
                <h2 className="text-2xl font-black mt-4 text-black">
                  {item.name}
                </h2>
                <p className="text-sm text-[#4A77FF] font-black">
                  {item.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
