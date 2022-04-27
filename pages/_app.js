import Header from "../components/Header/Header";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header></Header>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
