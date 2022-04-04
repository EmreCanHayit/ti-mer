import styles from '../styles/Contact.module.css';

import Header from './components/header';


import WithTransition from './HOC/WithTransition';

const Home = () => {
  return (
    <div className={styles.contact}>
        <Header 
            title={"title"} 
            mainpage={"navigation.mainpage"} 
            gallery={"navigation.gallery"} 
            contact={"navigation.contact"}
        />
        <div className={styles.head_text}>
            <h1>{"contact"}</h1>
        </div>
        <div className={styles.stage}>
            <div className={styles.contact_box}>
                <h3>{"youcanreachme"}</h3>
                <div>
                    <span>{"call"}</span>
                    <a href="tel:+905536000002">+90 553 600 00 02</a>
                </div>
                <div>
                    <span>{"write"}</span>
                    <a href="mailto:mertgenc@ti-mer.com">mertgenc@ti-mer.com</a>
                </div>
            </div>
            <div className={styles.form_box}>
                <form  action="https://formspree.io/mertgenc@ti-mer.com" method="post">
                    <div>
                        <label htmlFor="fname">{"firstname"}</label>
                        <input type="text" id="fname"></input>
                    </div>
                    <div>
                        <label htmlFor="lname">{"lastname"}</label>
                        <input type="text" id="lname"></input>
                    </div>
                    <div>
                        <label htmlFor="email">{"emailaddress"}</label>
                        <input type="email" id="email"></input>
                    </div>
                    <div>
                        <label htmlFor="message">{"messagebox"}</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <input type="hidden" name="_next" value="https:://www.ti-mer.com/contact"></input>
                    <button  type="submit">{"send"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default WithTransition(Home);