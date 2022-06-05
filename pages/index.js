import Head from "next/head";
import PizzaDay from "../components/Home/PizzaDay";
import Slider from "../components/Home/Slider";
export default function Home() {
    return (
        <>
            <Head>
                <title>Hot Pizza</title>
                <meta name="description" content="Hot pizza" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Slider></Slider>
            <PizzaDay></PizzaDay>
        </>
    );
}
