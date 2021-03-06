import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import LanguageChanger from './LanguageChanger';
import Logo from './Logo';

const Header = ({ title, mainpage, gallery, contact, mining, energy, logo }) => {
    return (
        <div className={ styles.wellcome }>
            <Head>
                <title>{ title }</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={styles.navigation}>
                <Link href={"/"}><a>{ mainpage }</a></Link>
                <Link href={{ pathname: '/gallery/' }}><a>{ gallery }</a></Link>
                <Link href={{ pathname: '/contact/' }}><a>{ contact }</a></Link>
                <LanguageChanger />
            </nav>
            {
                logo == true ? <Logo minnig={ mining } energy={ energy } /> : ""
            }
        </div>
    )
}

export default Header;