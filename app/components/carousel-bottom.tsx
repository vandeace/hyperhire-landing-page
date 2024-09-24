"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel-bottom.css";
const CarouselBottom = () => {
  const items = [
    {
      iconUrl: "/monitor.png",
      title: "해외 마케팅",
    },
    {
      iconUrl: "/foto.png",
      title: "퍼블리셔",
    },
    {
      iconUrl: "/cubic.png",
      title: "캐드원(제도사)",
    },
    {
      iconUrl: "/target.png",
      title: "해외 세일즈",
    },
    {
      iconUrl: "/phone.png",
      title: "해외 CS",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative w-full p-4">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        infinite
        partialVisible={false}
        autoPlay={true}
        autoPlaySpeed={1000}
        transitionDuration={1000}
        swipeable={false}
        draggable={false}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="py-4 items-center flex flex-row gap-y-4 overflow-x-auto relative"
          >
            <div>
              <Image
                alt={item.title}
                src={item.iconUrl}
                width={56}
                height={56}
              />
            </div>
            <p className="font-black text-2xl text-white ml-2">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBottom;
