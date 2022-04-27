import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faPhoneAlt,
    faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles.header_area}>
            <div className="container">
                <div className={styles.header_area_sub_box}>
                    <div className="header_box">
                        <div className="number_area">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faPhoneAlt}
                                    name="fas fa-phone"
                                />
                            </div>
                            <div className="text"></div>
                        </div>
                    </div>
                    <div className="header_box">Menu</div>
                    <div className="header_box">icon</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
