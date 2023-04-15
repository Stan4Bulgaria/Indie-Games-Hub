import styles from './Login.module.css'
export const Login = () => {
    return(
        <div className={styles["form-container"]}>
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}