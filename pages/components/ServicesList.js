import styles from '../../styles/ProductList.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import ProductBox from '../components/ProductBox';

const ServicesList = ({ grid, process }) => {
    const { t } = useTranslation('common');
    return (
        <div className={`${styles.block} ${styles.services}`}>
            <div className={styles.head}>{ process }</div>
            <div className={`${styles.list} ${styles[grid]}`}>
                <ProductBox size={"large"} background={"soft"} message={t('project managment')} />
                <ProductBox size={"large"} background={"soft"} message={t('drilling and workover rigs')} />
                <ProductBox size={"large"} background={"soft"} message={t('well services')} />
                <ProductBox size={"large"} background={"soft"} message={t('well tests')} />
                <ProductBox size={"large"} background={"soft"} message={t('green houses')} />
            </div>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })

export default ServicesList;