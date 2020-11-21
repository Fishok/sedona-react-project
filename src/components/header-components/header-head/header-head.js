import React from "react";
import styles from "./header-head.module.css";
import imgTopMenu from "../../../images/TopMenu.svg";

const HeaderHead = (props) => {
    return (
            <div className={styles["wrapper"]}>
                <img className={styles["img"]} src={imgTopMenu}></img>
                <div className={styles["transparent-button"]}></div>
            </div>
    );
}

export default HeaderHead;