import Head from "next/head";
import Slider from "../components/Header/Slider";
export default function Home() {
    return (
        <>
            <Head>
                <title>Hot Pizza</title>
                <meta name="description" content="Hot pizza" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Slider></Slider>
        </>
    );
}
