import Link from 'next/link';

import styles from '../../styles/LanguageChanger.module.css';


const LanguageChanger = () => {
    return (
        <>
            <Link href={{ pathname: '/tr-TR/' }}><a className={styles.language}></a></Link>
            <Link href={{ pathname: '/en-EN/' }}><a className={styles.language}></a></Link>
        </>
    )
}

export default LanguageChanger;