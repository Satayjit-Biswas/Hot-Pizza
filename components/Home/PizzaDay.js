import styles from "../../styles/Home.module.css";
import bg from "../../public/img/Fast-foof-home-paralax-img.jpg";

const PizzaDay = () => {
    return (
        <div
            className={styles.pizzaday_area}
            style={{ backgroundImage: `url('${bg.src}')` }}
        >
            <div className={styles.pizzaday_overlay}>
                <div className="container">
                    <div className={styles.pizzaday_text}>
                        <h4>PIZZA OF THE DAY</h4>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam commodo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaDay;
