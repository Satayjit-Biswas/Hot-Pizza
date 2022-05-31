import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Header.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../public/img/logo.png";
import Image from "next/image";

const Header = () => {
    // add sticky when you scrolling
    // window.onscroll = function () {
    //     myFunction();
    // };
    // function myFunction() {
    //     if (
    //         document.body.scrollTop > 100 ||
    //         document.documentElement.scrollTop > 100
    //     ) {
    //         document.querySelector(".header_area").classList.add("sticky");
    //     } else {
    //         document.querySelector(".header_area").classList.remove("sticky");
    //     }
    // }
    // Offcanvas toggle
    const current = () => {
        const addclass = document.querySelector(".header_area");
        addclass.classList.toggle("current");
        const hidden = document.querySelector("body");
        hidden.classList.toggle("overflow-hidden");
    };

    return (
        <>
            <div className={styles.header_top}></div>
            <div className={styles.header_area}>
                <div className="container">
                    <div className={styles.header_area_sub_box}>
                        <div className={styles.header_box_l_r}>
                            <div className={styles.number_area}>
                                <div className={styles.icon}>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </div>
                                <div className={styles.text}>
                                    <h4>Order Now</h4>
                                    <a href="tel:+0178310010++">0183+++++++5</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.header_box}>
                            <div className={styles.tab_logo}>
                                <Link href="/home">
                                    <a
                                        className={styles.nav_link}
                                        onClick={() => current()}
                                    >
                                        <Image src={logo}></Image>
                                    </a>
                                </Link>
                            </div>
                            <ul className={styles.menu}>
                                <li className="nav-item">
                                    <Link href="/Home">
                                        <a
                                            className={styles.nav_link}
                                            onClick={() => current()}
                                        >
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/About">
                                        <a
                                            className={styles.nav_link}
                                            onClick={() => current()}
                                        >
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/Service">
                                        <a
                                            className={styles.nav_link}
                                            onClick={() => current()}
                                        >
                                            Service
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.laptop_logo}>
                                    <Link href="/home">
                                        <a
                                            className={styles.nav_link}
                                            onClick={() => current()}
                                        >
                                            <Image src={logo}></Image>
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/blog">
                                        <a
                                            className={styles.nav_link}
                                            onClick={() => current()}
                                        >
                                            blog
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/Contact">
                                        <a
                                            className={styles.nav_link}
                                            onClick={() => current()}
                                        >
                                            Contact
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/login">
                                        <a
                                            className={styles.nav_link}
                                            onClick={() => current()}
                                        >
                                            login
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <div
                                className={styles.Offcanvas}
                                onClick={() => current()}
                            >
                                <span></span>
                                <span className="middle"></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={styles.header_box_l_r}>
                            <div className={styles.shop_icon}>
                                <div>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <div className={styles.shop_counter}>2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
