import styles from "@/style";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dancer from "../../assets/dancer.png";
import kick from "../../assets/kick.png";
import stand from "../../assets/stand.png";
import { BsArrowRightShort } from "react-icons/bs";
const Services = () => {
  const serviceItems = [
    {
      title: "Get that 11 line in 30 days",
      img: stand,
      url: "/",
    },
    {
      title: "14 Days sherd challenge",
      img: kick,
      url: "/",
    },
    {
      title: "Get flat belly in 30 days ",
      img: dancer,
      url: "/",
    },
  ];
  return (
    <div className={`${styles.padding}`}>
      <div
        className="rounded-2xl flex md:flex-row flex-col gap-10 md:py-[80px] py-8 px-10 justify-evenly bg-gradient-to-r from-[#6462F0] to-[#9190E9] 
      "
      >
        {serviceItems.map((item, i) => (
          <div key={i} className="flex  gap-4 items-center font-poppins">
            <div className="bg-[#8987f2] p-4 rounded-xl">
              <Image src={item.img} alt={item.title}></Image>
            </div>
            <div className="w-[150px] flex flex-col gap-3">
              <h4 className="text-white font-bold text-[20px] leading-[28px]">
                {item.title}
              </h4>

              <Link href={item.url} className="flex gap-10 items-center">
                <span className="text-[#b7b6f7]"> Learn More </span>
                <BsArrowRightShort className="text-[#b7b6f7]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
