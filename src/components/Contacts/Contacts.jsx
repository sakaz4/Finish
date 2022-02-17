import styles from '../Contacts/Contacts.module.css';
import cont1 from '../img/cont1.jpg';
import cont2 from '../img/cont2.jpg';

function Contacts() {
    return(
        <div className={styles.contactsPage}>
            <div className={styles.contactsWrapper}>
                <div className={styles.contLeft}>
                    <img src={cont1} width="100%" alt="imgLeft" />
                    <h3>Contact Details Onlineshop</h3>
                    <p>
                        J Store <br/>
                        - Onlineshop - <br/>
                        3 nails str. <br/>
                        12345 Minsk <br/>
                        Republic Belarus
                    </p>
                    <h3 id={styles.noSales}> !! No sales on site. Support only online and by phone !!</h3> 
                    
                    <h3>Business hours: </h3>
                    <p>
                        Monday - Friday 08:00 - 20:00 <br/>
                        Saturday, Sunday: 9 am - 1 pm <br/>
                    </p>
                    <h3>Customer Service:</h3>
                    <p >
                        Phone: +12 (0) 1234 - 43 21 0 <br/>
                        E-mail: info@j_store.com <br/>
                    </p>
                    <h3>Bike-Returns:</h3>
                    <p className={styles.phone}>
                        Phone: +12 (0) 1234 - 43 21 1  
                    </p>
                </div>

                <div className={styles.contRight}>
                    <img src={cont2} width="100%" alt="imgRight" />
                    <h3>Contact Details Megastore</h3>
                    <p>
                        J store Megastore <br/>
                        - Store - <br/>
                        batman str. <br/>
                        54321 Minsk <br/>
                        Republic Belarus <br/>
                    </p>

                    
                    <a className={styles.link} href="j_store_live.com" target="_blank">j_store_live.com</a>
                    <h3>Opening Hours: </h3>
                    <p>    
                        Monday - Friday: 8:00 - 19:30 <br/>
                        Saturday: 10:00 - 18:00 <br/>
                    </p>

                    
                    <h3>Customer Service: </h3>
                    <p>
                        Phone: +12 (0) 1234 - 43 21 2  <br/>
                        E-mail: megastore@j_store.com <br/>
                        Fax: +12 (0) 1234 - 43 21 3 <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contacts;