import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import styles from "../../styles/Home.module.css";
import "swiper/css/navigation";
import "swiper/css";
import s1 from "../../public/img/pizza.png";
import s2 from "../../public/img/pizza3.png";
import s3 from "../../public/img/pizza2.png";
import fire from "../../public/img/fire2.png";
import chili1 from "../../public/img/chili1.png";
import Image from "next/image";

const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider_bg_img}>
                <Image src={fire}></Image>
            </div>
            <div className={styles.slider_bg_img1}>
                <Image src={fire}></Image>
            </div>
            <div className={styles.slider_bg_img2}>
                <Image src={chili1}></Image>
            </div>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>
                        <div className={styles.slider_item}>
                            <div className={styles.slider_left}>
                                <h2>HOt & Spicy</h2>
                                <h3 className={styles.pizza}>pizza</h3>
                                <p>
                                    With decades of maintenance of way expertise
                                    and experience, no one knows the rail like
                                    Loram. Today, with our Loram Technologies
                                    business group, we’re leveraging our
                                    accumulated data.
                                </p>
                            </div>
                            <div className={styles.slider_right}>
                                <Image src={s3}></Image>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider_item}>
                            <div className={styles.slider_left}>
                                <h2>HOt & Spicy</h2>
                                <h3 className={styles.pizza}>pizza</h3>
                                <p>
                                    With decades of maintenance of way expertise
                                    and experience, no one knows the rail like
                                    Loram. Today, with our Loram Technologies
                                    business group, we’re leveraging our
                                    accumulated data.
                                </p>
                            </div>
                            <div className={styles.slider_right}>
                                <Image src={s2}></Image>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider_item}>
                            <div className={styles.slider_left}>
                                <h2>HOt & Spicy</h2>
                                <h3 className={styles.pizza}>pizza</h3>
                                <p>
                                    With decades of maintenance of way expertise
                                    and experience, no one knows the rail like
                                    Loram. Today, with our Loram Technologies
                                    business group, we’re leveraging our
                                    accumulated data.
                                </p>
                            </div>
                            <div className={styles.slider_right}>
                                <Image src={s1}></Image>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
