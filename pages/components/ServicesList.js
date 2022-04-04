import styles from '../../styles/ProductList.module.css';

import ProductBox from '../components/ProductBox';

const ServicesList = ({ grid, process }) => {
    return (
        <div className={`${styles.block} ${styles.services}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"large"} background={"soft"} message={"project managment"} />
                <ProductBox size={"large"} background={"soft"} message={"drilling and workover rigs"} />
                <ProductBox size={"large"} background={"soft"} message={"well services"} />
                <ProductBox size={"large"} background={"soft"} message={"well tests"} />
                <ProductBox size={"large"} background={"soft"} message={"green houses"} />
            </div>
        </div>
    )
}

export default ServicesList;