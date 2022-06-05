import styles from "../../styles/Products.module.css";
import img from "../../public/img/pizza3.png";
import bg from "../../public/img/chili3.png";
import Image from "next/image";

const Products = () => {
    return (
        <div className={styles.all_products}>
            <div className={styles.product_box}>
                <div className={styles.product_img}>
                    <Image src={img}></Image>
                    <div className={styles.product_bg_icon}>
                        <Image src={bg}></Image>
                    </div>
                </div>
                <h5 className={styles.product_title}>7-xl hot pizza</h5>
                <div className={styles.product_price}>$120</div>
                <p className={styles.product_description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci officia nihil nemo asperiores molestiae consectetur
                    iste accusantium fugiat magni ratione voluptatem inventore
                    temporibus minus facilis neque id libero, modi rem.
                </p>
                <button className={styles.add_btn}>Add to cart</button>
            </div>
            <div className={styles.product_box}>
                <div className={styles.product_img}>
                    <Image src={img}></Image>
                    <div className={styles.product_bg_icon}>
                        <Image src={bg}></Image>
                    </div>
                </div>
                <h5 className={styles.product_title}>7-xl hot pizza</h5>
                <div className={styles.product_price}>$120</div>
                <p className={styles.product_description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci officia nihil nemo asperiores molestiae consectetur
                    iste accusantium fugiat magni ratione voluptatem inventore
                    temporibus minus facilis neque id libero, modi rem.
                </p>
                <button className={styles.add_btn}>Add to cart</button>
            </div>
            <div className={styles.product_box}>
                <div className={styles.product_img}>
                    <Image src={img}></Image>
                    <div className={styles.product_bg_icon}>
                        <Image src={bg}></Image>
                    </div>
                </div>
                <h5 className={styles.product_title}>7-xl hot pizza</h5>
                <div className={styles.product_price}>$120</div>
                <p className={styles.product_description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci officia nihil nemo asperiores molestiae consectetur
                    iste accusantium fugiat magni ratione voluptatem inventore
                    temporibus minus facilis neque id libero, modi rem.
                </p>
                <button className={styles.add_btn}>Add to cart</button>
            </div>
        </div>
    );
};

export default Products;
