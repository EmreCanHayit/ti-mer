import styles from '../../styles/CatalogMenu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CatalogMenu = ({ background, message }) => {
    const router = useRouter();
    return (
        <div className={ router.pathname == "/gallery" ? styles.hidden : styles.navigation }>
            <Link href={{ pathname: '/gallery-limbra/' }}>
                <a className={router.pathname == "/gallery-limbra" ? styles.active : ""}>Limbra</a>
            </Link>
            <Link href={{ pathname: '/gallery-marble/' }}>
                <a className={router.pathname == "/gallery-marble" ? styles.active : ""}>Marble</a>
            </Link>
            <Link href={{ pathname: '/gallery-travertine/' }}>
                <a className={router.pathname == "/gallery-travertine" ? styles.active : ""}>Travertine</a>
            </Link>
        </div>
    )
}

export default CatalogMenu;