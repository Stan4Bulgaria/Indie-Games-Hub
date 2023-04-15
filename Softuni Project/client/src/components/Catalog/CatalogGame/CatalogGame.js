import styles from './CatalogGame.module.css';
export const CatalogGame = ({ title, imageURL, discription }) => {
    return (
        <div className={styles["game"]}>
            <img src={imageURL} alt="Game 1" />
            <div>
                <h2>{title}</h2>
                <h3>Description:</h3>
                <p>
                    {discription}
                </p>
                <div className='button-holder'>
                    <button className={styles['edit-btn']}>Edit</button>
                    <button className={styles['delete-btn']}>Delete</button>
                </div>
            </div>
        </div>

    )
}