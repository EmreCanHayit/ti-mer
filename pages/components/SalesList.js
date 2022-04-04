import styles from '../../styles/ProductList.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import ProductBox from '../components/ProductBox';

const SalesList = ({ grid, process }) => {
    const { t } = useTranslation('common');
    return (
        <div className={`${styles.block} ${styles.sales}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"xlarge"} background={"soft"} message={t('drilling and well services equipments')} />
                <ProductBox size={"xlarge"} background={"soft"} message={t('production equipments')} />
            </div>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })

export default SalesList;