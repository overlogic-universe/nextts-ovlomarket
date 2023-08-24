"use client";
import styles from "./header.module.css";
import Lottie from "lottie-react";
import LottieHeader from "@/assets/lottie/LottieHeaderBlue.json";

export default function Header() {
  return (
    <div className={`${styles["header"]}`}>
      <div className={`${styles["header-container"]}`}>
        <Lottie animationData={LottieHeader} className={`${styles["lottie-header"]}`} autoPlay={true} loop={true} data-aos="fade-right" />
        <div className={`${styles["title-input-box"]}`} data-aos="fade-left">
          <div className={`${styles["title-header"]}`}>
            Welcome To <br />
            Over
            <span
              style={{
                color: "#0398fc",
              }}
            >
              Logic{" "}
            </span>
            Market
          </div>
          <form action="" className={`mb-3 ${styles["search-box"]}`}>
            <input type="text" placeholder="Search Here Or Shop Product" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
