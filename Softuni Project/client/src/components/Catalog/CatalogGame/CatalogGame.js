import styles from './CatalogGame.module.css';
import { Link } from 'react-router-dom';
export const CatalogGame = ({ title, imageURL, discription, _id }) => {
    return (
        <div className={styles["allGames"]}>
            <img src={imageURL} className={styles["allGames-img"]} alt='game'/>
            <div className={styles["allGames-info"]}>
                <h2 className={styles["allGames-title"]}>{title}</h2>
                <p className={styles["allGames-description"]}>{discription}</p>
                <div className={styles["allGames-details"]}>
                    <Link to={`/details/${_id}`} className={styles["allGames-details-button"]}>Details</Link>
                </div>
            </div>
        </div>


    )
}