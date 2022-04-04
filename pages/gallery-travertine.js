import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from './components/header';
import Catalog from './components/Catalog';

import WithTransition from './HOC/WithTransition';

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <div>
      <Header 
        title={t('title')} 
        mainpage={t('navigation.mainpage')} 
        gallery={t('navigation.gallery')} 
        contact={t('navigation.contact')}
        logo={true}
      />
      <Catalog choise = { 'travertine' } />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default WithTransition(Home);