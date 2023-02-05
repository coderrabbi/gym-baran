import styles from "@/style";
import React from "react";
import Layout from "../Layout/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <div className={`${styles.padding} flex`}>
        <div className="flex-1">hello</div>
        <div className="flex-1">picture</div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
