import Products from "../components/Products/Products";
import styles from "../styles/Products.module.css";
const products = () => {
    return (
        <div className={styles.product_area}>
            <div className="container">
                <h2>the best pizza in town</h2>
                <p className={styles.product_area_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    optio id ipsa animi ipsam repudiandae, pariatur, quas
                    consequuntur nisi molestiae rerum, omnis tenetur minus a nam
                    similique ipsum repellendus temporibus?
                </p>
                <div className="product">
                    <Products></Products>
                </div>
            </div>
        </div>
    );
};

export default products;
