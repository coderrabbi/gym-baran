import styles from "@/style";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import howToWork from "../../assets/how-to-work.png";
const HowToWork = () => {
  const works = [
    "The body becomes sick because of rarely exercise",
    "Don't give up in order to get a healthy and ideal body",
    "Become addicted to the exercise that is given",
  ];
  return (
    <div className={`${styles.padding} `}>
      <div className="flex md:flex-row items-center flex-col-reverse">
        <div>
          <Image className="" src={howToWork} alt="how to work"></Image>
        </div>
        <div>
          <h1
            className={`md:text-[46px] text-[28px] mt-10 mb-5 md:mb-2  md:leading-[73px] leading-[39.2px] font-SportingGrotesque flex-1`}
          >
            How it works?
          </h1>
          <div>
            {works.map((w, i) => (
              <motion.div
                className="bg-white shadow-custom mb-5 md:py-5 py-3 px-4 w-[327px] md:w-[566px] rounded-xl"
                key={i}
                whileHover={{ scale: 1.1 }}
              >
                {w}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
