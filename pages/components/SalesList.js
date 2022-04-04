import styles from '../../styles/ProductList.module.css';


import ProductBox from '../components/ProductBox';

const SalesList = ({ grid, process }) => {
    return (
        <div className={`${styles.block} ${styles.sales}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"xlarge"} background={"soft"} message={"drilling and well services equipments"} />
                <ProductBox size={"xlarge"} background={"soft"} message={"production equipments"} />
            </div>
        </div>
    )
}

export default SalesList;