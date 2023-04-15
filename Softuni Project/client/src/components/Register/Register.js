import styles from './Register.module.css';
export const Register = () => {
    return (
        <div className={styles["form-container"]}>
           
            <h2>Register</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required="" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
                <label htmlFor="repassword">Re-Password:</label>
                <input type="password" id="repassword" name="repassword" required="" />
                <button type="submit">Register</button>
            </form>
        </div>

    )
}