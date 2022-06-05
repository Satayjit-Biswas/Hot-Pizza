import styles from "../../styles/Footer.module.css";
import logo from "../../public/img/Footer_logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faYoutube,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={styles.Footer_area}>
            <div className="container">
                <div className="footer_content">
                    <div className="d-flex">
                        <div className="col-25">
                            <div className={styles.footer_logo_area}>
                                <Image src={logo}></Image>
                                {/* <p>Mirpur, Dhaka , Bangladesh</p> */}
                                <p>
                                    Copyright &copy; 2013 - 2022 Hot-Pizza All
                                    rights reserved.
                                </p>
                                <div className={styles.footer_icon}>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>

                                    <a href="#">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>

                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>

                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-25">
                            <div className="footer_text">
                                <h4>Find our restaurants</h4>
                                <div className={styles.time}>
                                    <h5>
                                        1654 r don road #232, Dhaka , Bangladesh
                                        ...
                                    </h5>
                                    <h5>
                                        2654 r don road #20232, Dhaka , Faridpur
                                        ...
                                    </h5>
                                    <h5>
                                        1654 r don road #3232, Dhaka , Ragshahi
                                        ...
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-25">
                            <div className="footer_text">
                                <h4>Working hours</h4>
                                <div className={styles.time}>
                                    <h5>Saturday - sunday</h5>
                                    <h5>12:00 - 24:00</h5>
                                </div>
                                <div className={styles.time}>
                                    <h5>Saturday - sunday</h5>
                                    <h5>12:00 - 24:00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-25">
                            <div className="map"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
