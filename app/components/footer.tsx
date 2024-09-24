import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const items = [
    {
      id: 1,
      title: "해외 개발자 원격 채용",
    },
    {
      id: 2,
      title: "외국인 원격 채용 (비개발)",
    },
    {
      id: 3,
      title: "한국어 가능 외국인 채용",
    },
    {
      id: 4,
      title: "해외 개발자 활용 서비스",
    },
  ];
  return (
    <div className="mx-auto w-full max-w-6xl flex-auto p-4 pt-14 box-content">
      <div className="flex flex-row gap-x-20">
        <div className="flex flex-col gap-y-4 max-w-[250px] p-4">
          <Image
            src="/footer-logo.png"
            width={187}
            height={34}
            alt="footer-logo"
          />
          <p className="text-sm font-black max-w-[250px]">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p className="text-sm font-black">010-0000-0000</p>
          <p className="text-sm font-black">aaaaa@naver.com</p>
        </div>
        <div className="flex flex-1">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col h-[140px] bg-white p-4">
              <Image
                src={`/footer-icon-${item.id}.png`}
                alt={`footer-icon-${item.id}`}
                width={40}
                height={40}
              />
              <h5 className="mt-4 font-black text-sm">{item.title}</h5>
              <div className="text-sm flex mt-4 items-center text-[#5E626F]">
                <span> 바로가기 </span>
                <div className="border border-[#5E626F] ml-1 rounded-sm">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-x-20">
        <div className="grid grid-cols-2 max-w-[250px] p-4">
          <div className="flex flex-col font-black">
            <div className="text-[#343741]">상호명</div>
            <div className="text-[#5E626F] text-[13px] ">하이퍼하이어</div>
            <div className="text-[#5E626F] text-[13px] ">
              Hyperhire India Private Limited
            </div>
          </div>
          <div className="flex flex-col font-black">
            <div className="text-[#343741]">대표 CEO</div>
            <div className="text-[#5E626F] text-[13px]">김주현</div>
            <div className="text-[#5E626F] text-[13px] ">Juhyun Kim</div>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 p-4">
          <div className="flex flex-col font-black">
            <div className="text-[#343741]">사업자등록번호 CIN</div>
            <div className="text-[#5E626F] text-[13px] ">427-86-01187</div>
            <div className="text-[#5E626F] text-[13px] ">
              U74110DL2016PTC290812
            </div>
          </div>
          <div className="flex flex-col font-black">
            <div className="text-[#343741]">주소 ADDRESS</div>
            <div className="text-[#5E626F] text-[13px] ">
              서울특별시 강남대로 479, 지하 1층 238호{" "}
            </div>
            <div className="text-[#5E626F] text-[13px] ">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
              Delhi, <br /> 110053 India
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#5E626F] text-[13px] font-extrabold mt-6 p-4">
        ⓒ 2023 Hyperhire
      </div>
    </div>
  );
};

export default Footer;
