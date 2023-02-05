import styles from "@/style";
import React from "react";

const About = () => {
  return (
    <div className={`${styles.padding}`}>
      <div className="flex md:flex-row flex-col gap-6">
        <h1
          className={`md:text-[46px] text-[28px]  md:leading-[73px] leading-[39.2px] font-SportingGrotesque flex-1`}
        >
          Healthy in side <br /> fresh out side
        </h1>
        <p className={`${styles.paragraph} flex-1`}>
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home. Healthy life makes you more
          excited to live the day
        </p>
      </div>
    </div>
  );
};

export default About;
