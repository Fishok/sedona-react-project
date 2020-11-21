import React from "react";
import styles from "./header-head.module.css";
import imgTopMenu from "../../../images/TopMenu.svg";

const HeaderHead = (props) => {
    return (
        <div className={styles["wrapper"]}>
            <img className={styles["img"]} src={imgTopMenu}></img>
            <div className={styles["buttons-wrapper"]}>
                <div className={styles["button"]+" "+styles["left"]}></div>
                <div className={styles["button"]+" "+styles["middle"]}></div>
                <div className={styles["button"]+" "+styles["right"]}></div>
            </div>
        </div>
    );
}

export default HeaderHead;