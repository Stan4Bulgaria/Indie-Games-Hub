import styles from './Comment.module.css';
export const Comment = ({comment}) => {
    console.log(comment);
    return (
        <div className={styles["comment"]}>
            <img src="https://avatarfiles.alphacoders.com/326/thumb-326440.jpg" alt="User Avatar" />
            <div className={styles["comment-content"]}>
                <h3 className={styles["username"]}>Knife4</h3>
                <p className={styles["comment-text"]}>{comment}</p>
                <div className={styles["comment-actions"]}>
                    <button className = {styles["edit-button"]}>Edit</button>
                    <button className = {styles["delete-button"]}>Delete</button>
                </div>
            </div>
        </div>

    )
}