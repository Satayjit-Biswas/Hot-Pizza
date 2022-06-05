import Header from "../components/Header/Header";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
        </>
    );
}

export default MyApp;
