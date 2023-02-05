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
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import WorkOutSection from "../WorkOutSection/WorkOutSection";
const HomeScreen = () => {
  const brands = [nike, adidas, puma, reebok];
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <WorkOutSection />
    </Layout>
  );
};

export default HomeScreen;
