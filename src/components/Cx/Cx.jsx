import Zoom from "../Zoom";
import styles from "../Cx/Cx.module.css";
import inflite from "../img/cx/inflite.jpg";
import r5cx from "../img/cx/r5Cx.jpg";
import crossista from "../img/cx/crossista.jpg";

import ReactTooltip from "react-tooltip";

function Cx() {
    return (
        <div className={styles.cxPage}>
            <div className={styles.cxWrapper}>
                <div className={styles.inflite}>
                    <a href="#inflite">
                        <img src={inflite} alt="inflite" />
                        <p data-tip="MVDP cx rocket">Canyon Inflite</p>
                        <ReactTooltip />
                    </a>
                    <div id="inflite" className={styles.popUp}>
                        <a href="#" className={styles.close}>
                            X
                        </a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={inflite}
                            alt="infliteFull"
                        />
                    </div>
                </div>
                <div className={styles.r5cx}>
                    <a href="#r5cx">
                        <img src={r5cx} alt="r5cx" />
                        <p data-tip="<WVA cx bike>">Cervello R5cx</p>
                        <ReactTooltip />
                    </a>
                    <div id="r5cx" className={styles.popUp}>
                        <a href="#" className={styles.close}>
                            X
                        </a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={r5cx}
                            alt="r5cxFull"
                        />
                    </div>
                </div>
                <div className={styles.crossista}>
                    <a href="#crossista">
                        <img src={crossista} alt="crossista" />
                        <p data-tip="Podcock cx bike bike portotype">
                            Pinarello Crossista
                        </p>
                        <ReactTooltip />
                    </a>
                    <div id="crossista" className={styles.popUp}>
                        <a href="#" className={styles.close}>
                            X
                        </a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={crossista}
                            alt="crossistaFull"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.cxWrapperZoom}>
                <div className={styles.infliteZoom}>
                    <Zoom
                        img={inflite}
                        alt="inflite"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="MVDP cx bike">Canyon Inflite</p>
                    <ReactTooltip />
                </div>

                <div className={styles.r5cxZoom}>
                    <Zoom
                        img={r5cx}
                        alt="r5cx"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="WVA cx bike">Cervello R5cx</p>
                    <ReactTooltip />
                </div>

                <div className={styles.crossistaZoom}>
                    <Zoom
                        img={crossista}
                        alt="crossista"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="Pidcock xc bike prototype">
                        Pinarello Crossista
                    </p>
                    <ReactTooltip />
                </div>
            </div>
        </div>
    );
}

export default Cx;
