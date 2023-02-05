import styles from "@/style";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import workout from "../../assets/workout.png";
import morningWorkout from "../../assets/morning-workout.png";
const WorkOutSection = () => {
  return (
    <div className={`${styles.padding}  `}>
      <div className="flex mb-10 md:flex-row flex-col-reverse justify-between items-center gap-10">
        <div className="flex-1 flex justify-start">
          <Image src={workout} alt="workout"></Image>
        </div>

        <div className="flex-1 flex flex-col gap-5 md:gap-8">
          <h1
            className={`md:text-[46px] text-[28px]  md:leading-[73px] leading-[39.2px] font-SportingGrotesque flex-1`}
          >
            Best full body <br /> workout to lose fat
          </h1>
          <p className={`${styles.paragraph} `}>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button className="flex py-4 font-poppins font-medium  md:text-[16px]  text-[12px] shadow-custom bg-primary rounded-lg text-white md:w-[246px] w-[176px] px-4 h-[40px] md:h-[56px]  items-center justify-between">
            Get started{" "}
            <AiOutlineArrowRight className=" text-white text-2xl rounded-full" />
          </button>
        </div>
      </div>
      {/* morning workout */}
      <div className="relative">
        <div className="w-1/2 bg-[#F3B411] opacity-[0.3] h-full absolute blur-[282px] -z-10"></div>
        <div className="flex relative md:flex-row flex-col justify-between items-center gap-10">
          <div className="flex-1 flex flex-col gap-5 md:gap-8">
            <h1
              className={`md:text-[46px] text-[28px]  md:leading-[73px] leading-[39.2px] font-SportingGrotesque flex-1`}
            >
              Daily morning <br /> workout in home
            </h1>
            <p className={`${styles.paragraph} `}>
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.
            </p>
            <button className="flex py-4 font-poppins font-medium  md:text-[16px]  text-[12px] shadow-custom bg-primary rounded-lg text-white md:w-[246px] w-[176px] px-4 h-[40px] md:h-[56px]  items-center justify-between">
              Get started{" "}
              <AiOutlineArrowRight className=" text-white text-2xl rounded-full" />
            </button>
          </div>
          <div className="flex-1 flex justify-start">
            <Image src={morningWorkout} alt="workout"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutSection;
