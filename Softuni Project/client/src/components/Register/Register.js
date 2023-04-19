import styles from './Register.module.css';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
export const Register = ({ onRegisterSub }) => {
    const {error} = useContext(GameContext);
    const { values, onChangeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        avatar: '',
        password: '',
        repassword: ''
    }, onRegisterSub);

    const emailValidate = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const avatarValidate = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
    const passwordValidate = /^.{6,}$/;
    return (
        <div className={styles["form-container"]}>

            <h2>Register</h2>
            {error.message && 
            <p className={styles['error-message']}>{error.message}</p>
            }
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required="" placeholder='...Enter username' value={values.username} onChange={onChangeHandler} />
                {values.username ==='' && <p className={styles['info-check']}>Please enter a username</p> }

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" placeholder='john@abv.bg' value={values.email} onChange={onChangeHandler} />
                 {!emailValidate.test(values.email)  && <p className={styles['info-check']}>Please enter a correct email</p>}

                <label htmlFor="email">Avatar:</label>
                <input type="text" id="avatar" name="avatar" required="" placeholder='https://some-image-online' value={values.avatar} onChange={onChangeHandler}/>
                {!avatarValidate.test(values.avatar) && <p className={styles['info-check']}>Please enter a correct image address</p>}

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" placeholder='...Enter password' value={values.password} onChange={onChangeHandler} />
                {!passwordValidate.test(values.password) && <p className={styles['info-check']}>Password must be atleast 6 symbols long!</p>}

                <label htmlFor="repassword">Re-Password:</label>
                <input type="password" id="repassword" name="repassword" required="" placeholder='...Repeat password' value={values.repassword} onChange={onChangeHandler} />
                {!passwordValidate.test(values.repassword) && <p className={styles['info-check']}>Password must be atleast 6 symbols long!</p>}
                <button type="submit">Register</button>
            </form>
        </div>

    )
}