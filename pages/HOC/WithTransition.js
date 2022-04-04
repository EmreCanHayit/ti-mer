import { motion } from "framer-motion";

import styles from '../../styles/WithTransition.module.css';

const WithTransition = (OriginalComponent) => {
    let delay = 0.1;
    return () => (
        <>
            <OriginalComponent />
            <motion.div 
                className={styles.slideIn}
                initial={{ scaleX: 0 }}
                animate={{ skew: "35deg", scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: delay * 6, ease: "easeInOut" }}
            />
            <motion.div
                className={styles.slideOut}
                initial={{ scaleX: 1 }}
                animate={{ skew: "25deg", scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: delay * 10, ease: "easeInOut" }}
            />
            <motion.div
                className={styles.loadedLogo}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: delay * 5, ease: "anticipate" }}
            />
        </>
    );
}

export default WithTransition;