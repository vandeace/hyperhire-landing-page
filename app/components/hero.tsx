"use client";
import CarouselCard, { CarouselItem } from "@/components/carousel-card";
import React from "react";
import Image from "next/image";
const Hero = () => {
  const items: CarouselItem[] = [
    {
      name: "Abhishek Gupta",
      description: "마케팅 • 2y+",
      image: "/avatar-card",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      name: "Abhishek Gupta",
      description: "마케팅 • 2y+",
      image: "/avatar-card",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      name: "Abhishek Gupta",
      description: "마케팅 • 2y+",
      image: "/avatar-card",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
  ];

  const textItems = [
    {
      title: "평균 월 120만원",
      subTitle: "임금을 해당 국가를 기준으로 계산합니다.",
    },
    {
      title: "최대 3회 인력교체",
      subTitle: "막상 채용해보니 맞지 않아도 걱정하지 마세요. ",
    },
    {
      title: "평균 3일, 최대 10일",
      subTitle: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
    },
  ];

  return (
    <div className="p-4 mt-10 text-white grid grid-cols-2">
      {/* left section */}
      <div>
        <h1 className="text-5xl font-black">최고의 실력을 가진</h1>
        <h1 className="text-5xl font-black mt-2">
          외국인 인재를 찾고 계신가요?
        </h1>

        <h4 className="text-2xl font-black mt-6">
          법률 및 인사관리 부담없이 <br />
          1주일 이내에 원격으로 채용해보세요.
        </h4>

        <h5 className="mt-6 font-black text-xl underline">
          개발자가 필요하신가요?
        </h5>

        <div className="grid grid-cols-3 gap-4 mt-14">
          {textItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-y-4 max-w-[160px]"
            >
              <p className="border-t border-white text-lg font-black">
                {item.title}
              </p>
              <p className="font-black text-base">{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
      {/* right section */}
      <div className="relative ">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 bg-white text-green-500 px-3 py-1 rounded-md text-xl font-semibold z-20 ">
          <div className="relative flex items-center">
            <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 translate-y-full w-4 h-4 bg-white rotate-45 z-0"></div>
            <Image
              src="/dollar.png"
              alt="dollar"
              width={24}
              height={24}
              className="mr-1"
            />{" "}
            월 <span className="font-extrabold mr-1 z-30">100</span>만원
          </div>
        </div>
        <CarouselCard items={items} />
      </div>
    </div>
  );
};

export default Hero;
