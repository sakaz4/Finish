import Zoom from "../Zoom";
import styles from '../Road/Road.module.css';
import aeroad from '../img/road/aeroad.jpg';
import dogma from '../img/road/dogma.jpeg';
import reacto from '../img/road/reacto.jpg';

import ReactTooltip from 'react-tooltip';


function Road() {
	return (
        <div className={styles.roadPage}>
            <div className={styles.roadWrapper}>
                <div className={styles.aeroad}>
                    <a href="#aeroad">
                        <img src={aeroad} alt="aeroad" />
                        <p data-tip="MVDP rocket bike">
                            Canyon Aeroad
                        </p>
                        <ReactTooltip />
                    </a>
                    <div id="aeroad" className={styles.popUp}>
                        <a href="#" className={styles.close}>X</a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={aeroad}
                            alt="aeroadFull"
                        />
                    </div>




                </div>
                <div className={styles.dogma}>
                    <a href="#dogma">
                        <img src={dogma} alt="dogma" />
                        <p data-tip="team Ineos bike">Pinarello Dogma</p>
                        <ReactTooltip />
                    </a>
                    <div id="dogma" className={styles.popUp}>
                        <a href="#" className={styles.close}>X</a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={dogma}
                            alt="dogmaFull"
                        />
                    </div>


                    
                </div>
                <div className={styles.reacto}>
                    <a href="#reacto">
                        <img src={reacto} alt="reacto" />
                        <p data-tip="-40wt bike">
                            Merida Reacto
                        </p>
                        <ReactTooltip />
                    </a>
                    <div id="reacto" className={styles.popUp}>
                        <a href="#" className={styles.close}>X</a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={reacto}
                            alt="reactoFull"
                        />
                    </div>


                </div>
            </div>  


            <div className={styles.roadWrapperZoom}>
                <div className={styles.aeroadZoom}>
                    <Zoom
                        img={aeroad}
                        alt='aeroad'
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="MVDP bike">Canyon Aeroad</p>
                    <ReactTooltip />             
                </div>

                <div className={styles.dogmaZoom}>
                    <Zoom
                        img={dogma}
                        alt='dogma'
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="team Ineos bike">Pinarello Dogma</p>
                    <ReactTooltip />             
                </div>

                <div className={styles.reactoZoom}>
                    <Zoom
                        img={reacto}
                        alt='reacto'
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="-40wt bike">Merida Reacto</p>
                    <ReactTooltip />             
                </div>




            </div>



        </div>
        
    )
}

export default Road;