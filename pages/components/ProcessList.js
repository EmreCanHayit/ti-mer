import styles from '../../styles/ProductList.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import ProductBox from '../components/ProductBox';

const ProcessList = ({ grid, process }) => {
    const { t } = useTranslation('common');
    return (
        <div className={`${styles.block} ${styles.process}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"large"} background={"soft"} message={t('block')} />
                <ProductBox size={"large"} background={"soft"} message={t('tiles and slap')} />
                <ProductBox size={"large"} background={"soft"} message={t('surface works')} />
                <ProductBox size={"large"} background={"soft"} message={t('edge works')} />
                <ProductBox size={"large"} background={"soft"} message={t('lamination')} />
            </div>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })

export default ProcessList;