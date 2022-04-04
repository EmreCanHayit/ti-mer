import Image from 'next/image';
import styles from '../../styles/Logo.module.css';

const Logo = ({ minnig, energy }) => {
    return (
        <div className={styles.wellcome}>
            <div className={styles.motto}>
                <h2 className={styles.message}>{ minnig }</h2>
                <div className={styles.blank}></div>
            </div>
            <div className={styles.logo}>
                <Image src="/Logo.svg" alt={'Ti-mer logo'} height={300} width={300} />
            </div>
            <div className={styles.motto}>
                <div className={styles.blank}></div>
                <h2 className={styles.message}>{ energy }</h2>
            </div>
        </div>
    )
}

export default Logo;