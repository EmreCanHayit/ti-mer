import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

const MyApp = ({ Component, pageProps, router }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />;
        </AnimatePresence>
    );
}

export default MyApp;
