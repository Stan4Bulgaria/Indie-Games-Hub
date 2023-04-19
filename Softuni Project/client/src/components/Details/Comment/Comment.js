import styles from './Comment.module.css';
export const Comment = ({username, text, avatar}) => {
   
    return (
        <div className={styles["comment"]}>
            <img src={avatar} alt="User Avatar" />
            <div className={styles["comment-content"]}>
                <h3 className={styles["username"]}>{username}</h3>
                <p className={styles["comment-text"]}>{text}</p>
                <div className={styles["comment-actions"]}>
                    <button className = {styles["edit-button"]}>Edit</button>
                    <button className = {styles["delete-button"]}>Delete</button>
                </div>
            </div>
        </div>

    )
}