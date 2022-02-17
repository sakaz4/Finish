import styles from '../Road/Road.module.css';
import aeroad from '../img/road/aeroad.jpg';
import dogma from '../img/road/dogma.jpeg';
import reacto from '../img/road/reacto.jpg';

import ReactTooltip from 'react-tooltip';

function Road() {
	return (
        <div className={styles.roadPage}>
            <div className={styles.roadWrapper}>
                <div className={styles.aeroad}><img src={aeroad} height="292px" width="492px" alt='aeroad' /><p data-tip="MVDP bike">Canyon Aeroad</p><ReactTooltip /></div>
                <div className={styles.dogma}><img src={dogma} height="292px" width="492px" alt='dogma' /><p data-tip="team Ineos bike">Pinarello Dogma</p><ReactTooltip /></div>
                <div className={styles.reacto}><img src={reacto} height="292px" width="492px" alt='reacto' /><p data-tip="-40wt bike">Merida Reacto</p><ReactTooltip /></div>
            </div>  
        </div>
        
    )
}

export default Road;