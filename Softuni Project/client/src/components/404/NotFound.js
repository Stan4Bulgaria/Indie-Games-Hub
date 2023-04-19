import styles from './NotFound.module.css';
import {Link} from 'react-router-dom';
export const NotFound = () => {
    return (
        <div class={styles["container"]}>
            <h1>404</h1>
            <p>Page not found. Please check the URL and try again or <Link to={'/'}>go back</Link>.</p>
        </div>
    )
}