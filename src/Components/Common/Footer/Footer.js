import React from "react";
import footerShape from "../../../assets/footer-shape.png";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import styles from "@/style";
const socialLink = [
  {
    id: 1,
    icon: <BsFacebook />,
    to: "https://facebook.com",
  },
  {
    id: 2,
    icon: <BsTwitter />,
    to: "https://twitter.com",
  },
  {
    id: 3,
    icon: <BsInstagram />,
    to: "https://instagram.com",
  },
  {
    id: 4,
    icon: <BsGithub />,
    to: "https://github.com",
  },
];

const services = [
  {
    id: 1,
    to: "workout",
    title: "Workout",
  },
  {
    id: 2,
    to: "gym",
    title: "Gym",
  },
  {
    id: 3,
    to: "cardio",
    title: "Cardio",
  },
  {
    id: 4,
    to: "zumba",
    title: "Zumba",
  },
];
const Footer = () => {
  return (
    <div className="bg-primary relative z-1">
      <div className="absolute top-0 left-0 hidden md:block ">
        <Image src={footerShape} alt="footer-shape"></Image>
      </div>
      <div className="absolute hidden md:block bottom-0 right-0">
        <Image src={footerShape} alt="footer-shape"></Image>
      </div>
      <footer aria-label="Site Footer" className={`${styles.padding} `}>
        <div className="max-w-screen-xl relative z-10 px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            <div>
              <div className="flex gap-2 items-center">
                <Link href="/" className="flex gap-1 items-center">
                  <span className="self-center text-xl font-SportingGrotesque whitespace-nowrap text-secondary bg-white p-2 rounded-xl shadow-custom">
                    Gym
                  </span>
                  <span className="self-center text-xl font-SportingGrotesque whitespace-nowrap text-white">
                    baran
                  </span>
                </Link>
              </div>

              <p className="max-w-xs mt-4 text-left text-[18px] font-poppins font-[300] text-white">
                We take care of your health with <br /> regular and fun exercise
              </p>

              <ul className="flex gap-6 mt-8">
                {socialLink.map((s) => (
                  <a
                    key={s.id}
                    href={s.to}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-3xl"
                  >
                    {s.icon}
                  </a>
                ))}
              </ul>
            </div>

            <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="text-[18px] text-left  font-SportingGrotesque text-white">
                  Program
                </p>

                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    {services.map((service) => (
                      <Link
                        className=" capitalize text-[18px] font-poppins font-[300] text-white text-left flex flex-col gap-2 transition opacity-75 "
                        key={service.id}
                        href={service.to}
                      >
                        <li>{service.title}</li>
                      </Link>
                    ))}
                  </ul>
                </nav>
              </div>

              <div>
                <p className="text-[18px] text-left  font-SportingGrotesque text-white">
                  Blog
                </p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        href="/daily-stretch"
                        className=" capitalize text-[18px] text-white text-left flex flex-col gap-2 transition opacity-75 "
                      >
                        Daily stretch
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/daily-workout"
                        className=" capitalize text-[18px] text-white text-left flex flex-col gap-2 transition opacity-75 "
                      >
                        Daily workout
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="text-[18px] text-left  font-SportingGrotesque text-white">
                  About Us
                </p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        href="/contact"
                        className="capitalize text-[18px] text-white text-left flex flex-col gap-2 transition opacity-75 "
                      >
                        Contact
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/address"
                        className=" capitalize text-[18px] text-white text-left flex flex-col gap-2 transition opacity-75 "
                      >
                        Address
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
