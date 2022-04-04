import styles from '../../styles/Container.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ProductList from './ProductList';
import ProcessList from './ProcessList';
import ServicesList from './ServicesList';
import SalesList from './SalesList';

const Container = ({ padding, paddingLogo = 25, paddingNavi = 5 }) => {
    const { t } = useTranslation('common');
    const paddingType = 'rem';
    return (
        <div className={styles.block}>
            <div className={styles.mining} style={ padding == true ? {paddingTop: paddingLogo + paddingType} : {paddingTop: paddingNavi + paddingType}}>
                <ProductList grid={"large"} process={t('product')} />
                <ProcessList grid={"large"} process={t('process')} />
            </div>
            <div className={styles.energy} style={ padding == true ? {paddingTop: paddingLogo + paddingType} : {paddingTop: paddingNavi + paddingType}}>
                <ServicesList grid={"large"} process={t('services')} />
                <SalesList grid={"small"} process={t('sales')} />
            </div>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })

export default Container;