import Layout from "@/Components/Layout/Layout";
import Image from "next/image";
import React from "react";
import comingSoon from "../../assets/coming-soon.svg";

const login = () => {
  return (
    <div>
      <Layout>
        <Image
          src={comingSoon}
          alt="coming-soon"
          className="w-full h-full"
        ></Image>
      </Layout>
    </div>
  );
};

export default login;
