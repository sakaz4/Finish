import { Link } from "react-router-dom";
import styles from './Disciplines.module.css';
import xcImg from '../img/xc/xc.jpg';
import cxImg from '../img/cx/cx.jpg';
import dhimg from '../img/dh/dh.jpg';
import roadImg from '../img/road/road.jpg';

import React from "react"; 
import { ReactDOM } from "react";
import ReactTooltip from 'react-tooltip';



function Disciplines() {
	return (
		<div className={styles.disPage}>
			<h3 className={styles.select} >Let`s choose your new bike ...</h3> <br/>
			<div className={styles.selectWrapper}>
				<div className={styles.dh}><Link to="/disciplines/dh/" ><img src={dhimg} height="292px" width="492px" alt="dh" /><p className={styles.toolTip} data-tip="Катание на велосипеде с горы">Downhill</p><ReactTooltip /></Link></div>
				<div className={styles.xc}><Link to="./xc/"><img src={xcImg} height="292px" width="492px" alt="xc"/><p className={styles.toolTip} data-tip="Вверх вниз на квадратном глазу">Cross Country</p><ReactTooltip /></Link></div>
				<div className={styles.road}><Link to="/disciplines/road/"><img src={roadImg} height="292px" width="492px" alt="road"/><p className={styles.toolTip} data-tip="Утюжка асфальта с чрезвычайно серьёзнопафосными щами">Road Racing</p><ReactTooltip /></Link></div>
				<div className={styles.cx}><Link to="/disciplines/cx/"><img src={cxImg} height="292px" width="492px" alt="cx"/><p className={styles.toolTip} data-tip="Месить грязь, страдать в песке и бегать с велосипедом на плече">Cyclocross</p><ReactTooltip /></Link></div>
			</div>
			<h3 className={styles.ride}>... and let`s ride</h3>
		</div>
	);
}

export default Disciplines;