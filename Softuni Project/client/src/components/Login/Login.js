import styles from './Login.module.css'
import { useForm } from '../../hooks/useForm'
import { useContext } from 'react'
import { GameContext } from '../../contexts/GameContext'
export const Login = ({ onLoginSub }) => {
    const { error } = useContext(GameContext);
    const { values, onChangeHandler, onSubmit } = useForm({ email: '', password: '' }, onLoginSub)
    return (
        <>
            <div className={styles["form-container"]}>
                <h2>Login</h2>
                {error.message &&
                    <p className={styles['login-error']}>{error.message}</p>
                }
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="username" name="email" required="" value={values.email} onChange={onChangeHandler} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required="" value={values.password} onChange={onChangeHandler} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}