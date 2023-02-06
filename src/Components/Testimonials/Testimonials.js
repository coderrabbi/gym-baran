import styles from "@/style";
import Image from "next/image";
import React from "react";
import { CgQuote } from "react-icons/cg";
import { HiDotsHorizontal } from "react-icons/hi";
import bg from "../../assets/bg.png";
const Testimonials = () => {
  const testimonialsDetails = [
    {
      description:
        "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
      name: "Suketi Mantapo",
      position: "Designer Graphic",
      img: bg,
    },
    {
      description:
        "exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.",
      name: "Ada Apose",
      position: "Designer Graphic",
      img: bg,
    },
  ];

  return (
    <div className={`${styles.padding}`}>
      <div>
        <h1
          className={`md:text-[46px] text-[28px] md:text-center text-left md:leading-[73px] leading-[39.2px] font-SportingGrotesque flex-1 my-6  md:mb-10`}
        >
          Testimonials
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonialsDetails.map((t, i) => (
          <div
            className="py-10 flex flex-col gap-6 shadow-test rounded-xl px-10"
            key={i}
          >
            <div className="flex">
              {" "}
              <CgQuote className="text-xl" />
              <p className="flex-1 font-normal opacity-[.75] md:leading-[28px] font-poppins md:text-[16px] text-[12px] leading-[19.2px] text-[#262524]">
                {t.description}
              </p>
            </div>
            <div className="flex gap-4">
              <Image
                src={t.img}
                className="w-[33.39px] h-[36px] md:w-[64px] md:h-[69px]"
                alt={t.name}
              ></Image>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold fong-poppins">{t.name}</h4>
                <span className="text-[16px] font-normal text-[#262524] opacity-[.75]">
                  {t.position}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="md:flex justify-end  hidden "></div>
        <div className="flex justify-center md:justify-end">
          <HiDotsHorizontal className="text-primary text-[27px]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
