import styles from '../../styles/Container.module.css';

import ProductList from './ProductList';
import ProcessList from './ProcessList';
import ServicesList from './ServicesList';
import SalesList from './SalesList';

const Container = ({ padding, paddingLogo = 25, paddingNavi = 5 }) => {
    const paddingType = 'rem';
    return (
        <div className={styles.block}>
            <div className={styles.mining} style={ padding == true ? {paddingTop: paddingLogo + paddingType} : {paddingTop: paddingNavi + paddingType}}>
                <ProductList grid={"large"} process={"product"} />
                <ProcessList grid={"large"} process={"process"} />
            </div>
            <div className={styles.energy} style={ padding == true ? {paddingTop: paddingLogo + paddingType} : {paddingTop: paddingNavi + paddingType}}>
                <ServicesList grid={"large"} process={"service"} />
                <SalesList grid={"small"} process={"sale"} />
            </div>
        </div>
    )
}


export default Container;