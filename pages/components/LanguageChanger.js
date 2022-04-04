import Link from 'next/link';

import styles from '../../styles/LanguageChanger.module.css';

import nextI18nextConfig from '../../next-i18next.config';

const LanguageChanger = () => {
    const defaultLanguage = (e, language) => {
        nextI18nextConfig.i18n.defaultLocale = language;
        nextI18nextConfig.defaultLanguage = language;
    }
    return (
        <>
            <Link href={{ pathname: '/tr-TR/' }} locale={"tr-TR"}><a onClick={(e) => defaultLanguage(e, 'tr-TR')} className={styles.language}></a></Link>
            <Link href={{ pathname: '/en-EN/' }} locale={"en-EN"}><a onClick={(e) => defaultLanguage(e, 'en-EN')} className={styles.language}></a></Link>
        </>
    )
}

export default LanguageChanger;