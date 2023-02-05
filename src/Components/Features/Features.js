import styles from "@/style";
import React from "react";
import gymnastGirl from "../../assets/gymnast-girl.png";
import laydown from "../../assets/laydown.png";
import stretching from "../../assets/stretching.png";
import fullBody from "../../assets/full-body.png";
import bookdown from "../../assets/bookdown.png";
import yogaPosture from "../../assets/yoga-posture.png";
import Image from "next/image";

const Features = () => {
  const feature = [
    {
      title: "Gets ABS in 2 weeks",
      discription: "Exercise is a very important need for our body. ",
      img: gymnastGirl,
      class: "shadow-custom",
    },
    {
      title: "25 Mins full body workout",
      discription: "Exercise is a very important need for our body. . ",
      img: laydown,
    },
    {
      title: "10 Mins toned arms workout",
      discription: "Exercise is a very important need for our body. ",
      img: stretching,
    },
    {
      title: "15 Mins full body fat burn",
      discription: "Exercise is a very important need for our body. ",
      img: fullBody,
    },
    {
      title: "25 Mins HIIT workout",
      discription: "Exercise is a very important need for our body. ",
      img: bookdown,
    },
    {
      title: "Intense lower Abs workout",
      discription: "Exercise is a very important need for our body. ",
      img: yogaPosture,
    },
  ];
  return (
    <div className={`${styles.padding}`}>
      <div className="text-center mb-5">
        <h1
          className={`md:text-[46px] text-[28px]  md:leading-[73px] leading-[39.2px] font-SportingGrotesque flex-1`}
        >
          Programs that can <br /> be taken
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {feature.map((f, i) => (
          <div key={i} className="flex items-center ">
            <div>
              <Image src={f.img} alt={f.title} className={`w-[80px] `}></Image>
            </div>
            <div className="w-[230px] flex flex-col gap-3 ">
              <h4 className="font-poppins font-bold text-[16px] ">{f.title}</h4>
              <span className="text-[#92908a]">{f.discription}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
