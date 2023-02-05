import styles from "@/style";
import Image from "next/image";
import React from "react";
import Layout from "../Layout/Layout";
import { MdNavigateNext } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import heroImg from "../../assets/hero-img.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import puma from "../../assets/puma.png";
import reebok from "../../assets/reebok.png";
const HomeScreen = () => {
  const brands = [nike, adidas, puma, reebok];
  return (
    <Layout>
      <div
        className={`${styles.padding} flex items-center md:flex-row flex-col md:gap-3 gap-10`}
      >
        <div className="flex-1 ">
          <div className="flex flex-col gap-4">
            <h1 className={`${styles.heading2}`}>
              Healthy in side <br />{" "}
              <span className="text-secondary">fresh</span> out side
            </h1>
            <p className={`${styles.paragraph}`}>
              Exercise is a very important need for our body. Health and <br />{" "}
              fitness will be obtained if you can do regular exercise and <br />{" "}
              run a healthy routine.
            </p>
            <div className="flex md:gap-4  gap-6 ">
              <button className="flex py-4 font-poppins font-medium  md:text-[16px]  text-[12px] shadow-custom bg-primary rounded-lg text-white md:w-[246px] w-[176px] px-4 h-[40px] md:h-[56px]  items-center justify-between">
                Get started{" "}
                <MdNavigateNext className="bg-white text-primary text-2xl rounded-full" />
              </button>
              <button className="flex py-4 font-poppins font-medium md:text-[16px]  text-[12px] shadow-custom bg-white rounded-lg text-primary md:w-[174px] w-[125px] px-4 h-[40px] md:h-[56px] items-center justify-between">
                <AiFillPlayCircle className="bg-white text-primary text-2xl rounded-full" />
                Learn more
              </button>
            </div>
            <div>
              <span>Brands:</span>
              <div className="flex items-center md:gap-11 gap-5 ">
                {brands.map((brand, i) => (
                  <Image
                    src={brand}
                    className="md:h-[15%] h-[10%] aspect-[3/2] object-contain"
                    key={i}
                    alt={brand}
                  ></Image>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src={heroImg} alt="hero img"></Image>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
