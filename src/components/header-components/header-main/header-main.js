import React from "react";
import imgIntro from "../../../images/Intro.svg";
import styles from "./header-main.module.css";

const HeaderBack = (props) => {
    return (
        <div className={styles["wrapper"]}>
            <img className={styles["img"]} src={imgIntro} alt={"Main image"}/>
        </div>
    );
}

export default HeaderBack;