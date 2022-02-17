import React from "react";
import styles from './Xc.module.css';
import fourStroke from '../img/xc/fourstroke.jpg';
import lux from '../img/xc/lux.jpg';
import oiz from '../img/xc/oiz.jpg';
import fPod from '../img/xc/f-podium.jpg';

import ReactTooltip from 'react-tooltip';

function Xc() {
    return (
            <div className={styles.xcPage}>
                <div className={styles.xcWrapper}>
                    <div className={styles.oiz}><img src={oiz} height="292px" width="492px" alt="oiz"/><p data-tip="Lightest frames, top carbon. It`s rocket for xc.">Orbea Oiz</p><ReactTooltip /></div>
                    <div className={styles.fourStroke}><img src={fourStroke} height="292px" width="492px" alt="bmc"/><p data-tip="Fourstroke utilizes 100/100 travel and sports the revolutionary RAD integrated dropper post, to assemble the most innovative XC race machine.">BMC Fourstroke</p><ReactTooltip /></div>
                    <div className={styles.lux}><img src={lux} height="292px" width="492px" alt="lux"/><p data-tip="Whether it’s the race-dominating Lux or the trail-conquering Lux Trail, you’re looking at the lightest, fastest, and most capable XC bikes available.">Canyon Lux</p><ReactTooltip /></div>
                    <div className={styles.fPod}><img src={fPod} height="292px" width="492px" alt="lux"/><p data-tip="The stunning looking Stealth Air Full Carbon frame uses an XCO-optimized 100mm travel version of our World Cup-proven Zero Suspension system. Aggressive XC Forward Geometry and synced front and rear remote lockout provide rocket ship propulsion on the climbs.">Mondraker F - Podium</p><ReactTooltip /></div>
                </div>
            </div>
    )
}

export default Xc;