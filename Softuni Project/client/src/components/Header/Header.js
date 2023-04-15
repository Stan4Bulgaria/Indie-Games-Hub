import { Link } from "react-router-dom";
import style from './Header.module.css';
export const Header = () => {
    return (
        <header className={style["top-nav"]}>
            <nav className={style["nav-link"]}>
                <div className={style["home"]}>
                    <Link to={'/'}>Play Indie</Link>
                </div>

                <Link to={'/catalog'}>Catalog</Link>

                <div className={style["logged-in"]}>

                    <Link to={'/create'}>Post game</Link>
                    <Link to={'/logout'}>Logout</Link>

                </div>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
                <div className={style["search-container"]}>
                    <form>
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">
                            Search
                        </button>
                    </form>
                </div>

            </nav>
        </header>
    )
}