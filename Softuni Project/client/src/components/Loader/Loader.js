import styles from './Loader.module.css'
export const Loader = () => {
    return (
        <div className={styles["loader-container"]}>
            <div className={styles["loader"]}></div>
        </div>

    )
}