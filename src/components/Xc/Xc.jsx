import { Link } from "react-router-dom";
import styles from './Xc.module.css';
import fourStroke from './fourstroke.jpg';
import lux from './lux.jpg';
import oiz from './oiz.jpg';

function Xc() {
    return (

        <div className={styles.wrapper}>
            <div><Link to="/disciplines/xc/fourstroke"><img src={fourStroke} height="292px" width="492px" alt="bmc"/><p>BMC - Fourstroke</p></Link></div>
            <div><Link to="/disciplines/xc/lux"><img src={lux} height="292px" width="492px" alt="lux"/><p>Canyon - Lux</p></Link></div>
            <div><Link to="/disciplines/xc/oiz"><img src={oiz} height="292px" width="492px" alt="oiz"/><p>Orbea - Oiz</p></Link></div>
        </div>
    )
}

export default Xc;