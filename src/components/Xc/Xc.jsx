import React from "react";
import styles from "./Xc.module.css";
import fourStroke from "../img/xc/fourstroke.jpg";
import lux from "../img/xc/lux.jpg";
import oiz from "../img/xc/oiz.jpg";
import fPod from "../img/xc/f-podium.jpg";

import ReactTooltip from "react-tooltip";

import Zoom from "../Zoom";

function Xc() {
    return (
        <div className={styles.xcPage}>
            <div className={styles.xcWrapper}>
                <div className={styles.oiz}>
                    <Zoom
                        img={oiz}
                        alt="oiz"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="Lightest frame, top carbon. It`s rocket for xc.">
                        Orbea Oiz
                    </p>
                    <ReactTooltip />
                </div>

                <div className={styles.fourStroke}>
                    <Zoom
                        className={styles.zoom}
                        img={fourStroke}
                        alt="fourStroke"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="Fourstroke utilizes 100/100 travel and sports the revolutionary RAD integrated dropper post, to assemble the most innovative XC race machine.">
                        BMC FourStroke
                    </p>
                    <ReactTooltip />
                </div>

                <div className={styles.lux}>
                    <Zoom
                        img={lux}
                        alt="lux"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="Whether it’s the race-dominating Lux or the trail-conquering Lux Trail, you’re looking at the lightest, fastest, and most capable XC bikes available.">
                        Canyon Lux
                    </p>
                    <ReactTooltip />
                </div>

                <div className={styles.fPod}>
                    <Zoom
                        img={fPod}
                        alt="fPod"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="Whether it’s the race-dominating Lux or the trail-conquering Lux Trail, you’re looking at the lightest, fastest, and most capable XC bikes available.">
                        Mondraker F - Podium
                    </p>
                    <ReactTooltip />
                </div>
            </div>

            <div className={styles.xcWrapper2}>
                <div className={styles.oizTest}>
                    <a href="#oiz">
                        <img src={oiz} alt="oiz" />
                        <p data-tip="Lightest frames, top carbon. It`s rocket for xc.">
                            Orbea Oiz
                        </p>
                        <ReactTooltip />
                    </a>
                    <div id="oiz" className={styles.popUp}>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={oiz}
                            alt="oizFull"
                        />
                    </div>
                </div>

                <div className={styles.luxTest}>
                    <a href="#lux">
                        <img src={lux} alt="lux" />
                        <p data-tip="Whether it’s the race-dominating Lux, you’re looking at the lightest, fastest, and most capable XC bikes available.">
                            Canyon Lux
                        </p>
                        <ReactTooltip />
                    </a>
                    <div id="lux" className={styles.popUp}>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={lux}
                            alt="luxFull"
                        />
                    </div>
                </div>

                <div className={styles.fourStrokeTest}>
                    <a href="#fourStroke">
                        <img src={fourStroke} alt="fourStroke" />
                        <p data-tip="Fourstroke utilizes 100/100 travel and sports the revolutionary RAD integrated dropper post, to assemble the most innovative XC race machine.">
                            BMC Fourstroke
                        </p>
                        <ReactTooltip />
                    </a>
                    <div id="fourStroke" className={styles.popUp}>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={fourStroke}
                            alt="fourStrokeFull"
                        />
                    </div>
                </div>

                <div className={styles.fPodTest}>
                    <a href="#fPod">
                        <img src={fPod} alt="fPod" />
                        <p data-tip="The stunning looking Stealth Air Full Carbon frame uses an XCO-optimized 100mm travel version of our World Cup-proven Zero Suspension system. Aggressive XC Forward Geometry and synced front and rear remote lockout provide rocket ship propulsion on the climbs.">
                            Mondraker F - Podium
                        </p>
                        <ReactTooltip />
                    </a>
                    <div id="fPod" className={styles.popUp}>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={fPod}
                            alt="fPodFull"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Xc;
