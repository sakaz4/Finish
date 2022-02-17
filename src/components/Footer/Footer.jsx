import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className={styles.footWrapper}>

            <div className={styles.contacts}>
                <div className={styles.contLink}><Link to="/contacts/">Contacts</Link></div>
                <p>Hotline: +49 (0) 2641 - 89 00 0</p>
                <p>Monday - Friday 08:00 - 20:00</p>
                <p>Saturday, Sunday 09:00-18:00</p>
            </div>
        </div>
    )
}


export default Footer;