import styles from '../Cx/Cx.module.css';
import inflite from '../img/cx/inflite.jpg';
import r5cx from '../img/cx/r5Cx.jpg';
import crossista from '../img/cx/crossista.jpg';

import ReactTooltip from 'react-tooltip';


function Cx() {
	return (
        <div className={styles.cxPage}>
            <div className={styles.cxWrapper}>
                <div className={styles.inflite}><img src={inflite} height="292px" width="492px" alt='inflite' /><p data-tip="MVDP bike">Canyon Inflite</p><ReactTooltip /></div>
                <div className={styles.r5cx}><img src={r5cx} height="292px" width="492px" alt='r5cx' /><p data-tip="Wva bike">Cervelo R5 Cx</p><ReactTooltip /></div>
                <div className={styles.crossista}><img src={crossista} height="292px" width="492px" alt='crossista' /><p data-tip="Tom Pidcock prototype bike">Pinarello Crossista</p><ReactTooltip /></div>
            </div>  
        </div>
    )
}

export default Cx;