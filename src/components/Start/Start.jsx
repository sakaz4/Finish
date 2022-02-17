import { Link } from "react-router-dom";
import styles from './Start.module.css';
import startImg from '../img/1.jpeg';



function Start() {
	return (
        <div className={styles.start}>
            <img src={startImg} alt="startImage" />
            <div className={styles.pageContainer}>
                <h3>Welcome to J store </h3>
                <p>We are the largest donwhill bike dealership globally and we are here to show you our entire arsenal, which can also be yours!</p>
                <div className={styles.linkWrapper}><div className={styles.link}><Link to="./disciplines/">Show me arsenal</Link></div></div>
            </div>
            
        </div>
	);
}

export default Start;