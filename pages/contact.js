import styles from '../styles/Contact.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from './components/Header';


import WithTransition from './HOC/WithTransition';

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.contact}>
        <Header 
            title={t('title')} 
            mainpage={t('navigation.mainpage')} 
            gallery={t('navigation.gallery')} 
            contact={t('navigation.contact')}
        />
        <div className={styles.head_text}>
            <h1>{t('contact')}</h1>
        </div>
        <div className={styles.stage}>
            <div className={styles.contact_box}>
                <h3>{t('youcanreachme')}</h3>
                <div>
                    <span>{t('call')}</span>
                    <a href="tel:+905536000002">+90 553 600 00 02</a>
                </div>
                <div>
                    <span>{t('write')}</span>
                    <a href="mailto:mertgenc@ti-mer.com">mertgenc@ti-mer.com</a>
                </div>
            </div>
            <div className={styles.form_box}>
                <form  action="https://formspree.io/mertgenc@ti-mer.com" method="post">
                    <div>
                        <label htmlFor="fname">{t('firstname')}</label>
                        <input type="text" id="fname"></input>
                    </div>
                    <div>
                        <label htmlFor="lname">{t('lastname')}</label>
                        <input type="text" id="lname"></input>
                    </div>
                    <div>
                        <label htmlFor="email">{t('emailaddress')}</label>
                        <input type="email" id="email"></input>
                    </div>
                    <div>
                        <label htmlFor="message">{t('messagebox')}</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <input type="hidden" name="_next" value="https:://www.ti-mer.com/contact"></input>
                    <button  type="submit">{t('send')}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default WithTransition(Home);