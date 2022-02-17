import styles from '../Dh/Dh.module.css';

import gambler from '../img/dh/gambler.jpg';
import intense from '../img/dh/intense.jpg';
import sender from '../img/dh/sender.jpg';
import session from '../img/dh/session.jpg';

import ReactTooltip from 'react-tooltip';


function Dh() {
	return (
        <div className={styles.dhPage}>
            <div className={styles.dhWrapper}>
            <div className={styles.gambler}><img src={gambler} height="292px" width="492px" alt="gambler"/><p data-tip="Scott Gambler">gambler</p><ReactTooltip /></div>
                <div className={styles.intense}><img src={intense} height="292px" width="492px" alt="intense"/><p data-tip="intense.">intense</p><ReactTooltip /></div>
                <div className={styles.sender}><img src={sender} height="292px" width="492px" alt="sender"/><p data-tip="sender">Canyon sender</p><ReactTooltip /></div>
                <div className={styles.session}><img src={session} height="292px" width="492px" alt="session"/><p data-tip="session.">session</p><ReactTooltip /></div>
            
            </div>
        </div>
    )
}

export default Dh;