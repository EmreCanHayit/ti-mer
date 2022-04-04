import styles from '../../styles/ProductList.module.css';

import ProductBox from '../components/ProductBox';

const ProcessList = ({ grid, process }) => {
    return (
        <div className={`${styles.block} ${styles.process}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"large"} background={"soft"} message={"block"} />
                <ProductBox size={"large"} background={"soft"} message={"tiles and slap"} />
                <ProductBox size={"large"} background={"soft"} message={"surface works"} />
                <ProductBox size={"large"} background={"soft"} message={"edge works"} />
                <ProductBox size={"large"} background={"soft"} message={"lamination"} />
            </div>
        </div>
    )
}

export default ProcessList;