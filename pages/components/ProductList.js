import styles from '../../styles/ProductList.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import ProductBox from '../components/ProductBox';

const ProductList = ({ grid, process }) => {
    const { t } = useTranslation('common');
    return (
        <div className={`${styles.block} ${styles.product}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"large"} background={"marble"} message={t('marble')} />
                <ProductBox size={"large"} background={"travertine"} message={t('travertine')} />
                <ProductBox size={"large"} background={"granite"} message={t('granite')} />
                <ProductBox size={"large"} background={"onyx"} message={t('onyx')} />
                <ProductBox size={"large"} background={"dolomite"} message={t('dolomite')} />
                <ProductBox size={"large"} background={"limestone"} message={t('limestone')} />
            </div>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })

export default ProductList;