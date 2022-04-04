import styles from '../../styles/ProductList.module.css';

import ProductBox from '../components/ProductBox';

const ProductList = ({ grid, process }) => {
    return (
        <div className={`${styles.block} ${styles.product}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"large"} background={"marble"} message={"marble"} />
                <ProductBox size={"large"} background={"travertine"} message={"travertine"} />
                <ProductBox size={"large"} background={"granite"} message={"granite"} />
                <ProductBox size={"large"} background={"onyx"} message={"onyx"} />
                <ProductBox size={"large"} background={"dolomite"} message={"dolomite"} />
                <ProductBox size={"large"} background={"limestone"} message={"limestone"} />
            </div>
        </div>
    )
}

export default ProductList;