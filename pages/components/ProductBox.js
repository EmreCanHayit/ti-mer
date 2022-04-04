import styles from '../../styles/ProductBox.module.css';

const ProductBox = ({ size, background, message }) => {
    return (
        <div className={`${styles.product} ${styles[size]} ${styles[background]}`}>
            { message }
        </div>
    )
}

export default ProductBox;