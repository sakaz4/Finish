import styles from '../Dh/Dh.module.css';
import gambler from '../img/dh/gambler.jpg';
import intense from '../img/dh/intense.jpg';
import sender from '../img/dh/sender.jpg';
import session from '../img/dh/session.jpg';

import ReactTooltip from 'react-tooltip';
import Zoom from "../Zoom";


function Dh() {
	return (
        <div className={styles.dhPage}>
            <div className={styles.dhWrapper}>
                <div className={styles.gambler}>
                    <a href="#gambler">
                        <img src={gambler} alt="gambler" />
                        <p data-tip="The Gambler is an incredibly neutral feeling bike – it's free of any unwanted surprises, and no matter the terrain, whether it was extra-chunky and blown out, or fast and smooth, the handling remained consistent.">Scott Gambler</p>
                        <ReactTooltip />
                    </a>
                    <div id="gambler" className={styles.popUp}>
                        <a href="#" className={styles.close}>
                            X
                        </a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={gambler}
                            alt="gamblerFull"
                        />
                    </div>
                </div>
                <div className={styles.intense}>
                    <a href="#intense">
                        <img src={intense} alt="intense" />
                        <p data-tip="Heading through a slippery rock garden it handles amazingly, landing sideways it soaks up the landing and puts you back on track - this is a unique trait and feel that I have not found on any other downhill bike.">Intense M29</p>
                        <ReactTooltip />
                    </a>
                    <div id="intense" className={styles.popUp}>
                        <a href="#" className={styles.close}>X</a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={intense}
                            alt="intenseFull"
                        />
                    </div>
                </div>
                <div className={styles.sender}>
                    <a href="#sender">
                        <img src={sender} alt="sender" />
                        <p data-tip="I told myself, loud and clear, that I had no business doing the speeds I was first run on the Sender, only to ignore my own concerns and keep pushing all the way down, leaning harder into turns and gapping in all the places you usually need some time to build up to do.">Canyon Sender</p>
                        <ReactTooltip />
                    </a>
                    <div id="sender" className={styles.popUp}>
                        <a href="#" className={styles.close}>X</a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={sender}
                            alt="senderFull"/>
                    </div>
                </div>

                <div className={styles.session}>
                    <a href="#session">
                        <img src={session} alt="session" />
                        <p data-tip="This one’s pretty straightforward: the new Session is a great option for riders either looking to race DH, or just to ride lift / shuttle-accessed trails as fast as possible — especially if those trails are on the steeper, rougher end of the spectrum.">Trek Session</p>
                        <ReactTooltip />
                    </a>
                    <div id="session" className={styles.popUp}>
                        <a href="#" className={styles.close}>X</a>
                        <a href="#" className={styles.popUpArea}></a>
                        <img
                            className={styles.imgFull}
                            src={session}
                            alt="sessionFull"/>
                    </div>
                </div>
            
            </div>


            <div className={styles.dhWrapperZoom}>
                <div className={styles.gamblerZoom}>
                    <Zoom
                        img={gambler}
                        alt="gambler"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="The Gambler is an incredibly neutral feeling bike – it's free of any unwanted surprises, and no matter the terrain, whether it was extra-chunky and blown out, or fast and smooth, the handling remained consistent.">Scott Gambler</p>
                    <ReactTooltip />
                </div>

                <div className={styles.intenseZoom}>
                    <Zoom
                        img={intense}
                        alt="intense"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="Heading through a slippery rock garden it handles amazingly, landing sideways it soaks up the landing and puts you back on track - this is a unique trait and feel that I have not found on any other downhill bike.">Intense M29</p>
                    <ReactTooltip />
                </div>

                <div className={styles.senderZoom}>
                    <Zoom
                        img={sender}
                        alt="sender"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="I told myself, loud and clear, that I had no business doing the speeds I was first run on the Sender, only to ignore my own concerns and keep pushing all the way down, leaning harder into turns and gapping in all the places you usually need some time to build up to do.">Canyon Sender</p>
                    <ReactTooltip />
                </div>

                <div className={styles.sessionZoom}>
                    <Zoom
                        img={session}
                        alt="session"
                        zoomScale={4}
                        height={322}
                        width={542}
                    />
                    <p data-tip="This one’s pretty straightforward: the new Session is a great option for riders either looking to race DH, or just to ride lift / shuttle-accessed trails as fast as possible — especially if those trails are on the steeper, rougher end of the spectrum.">Trek Session</p>
                    <ReactTooltip />
                </div>
            </div>

        </div>
    )
}

export default Dh;