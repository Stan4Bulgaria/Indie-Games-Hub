import { Link } from "react-router-dom";
import style from './Header.module.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
export const Header = () => {
    const { isAuthenticated, userAvatar, username } = useContext(AuthContext);
    return (
        <header className={style["top-nav"]}>
            <nav className={style["nav-link"]}>
                <div className={style["home"]}>
                    <Link to={'/'}>Play Indie</Link>
                </div>

                <Link to={'/catalog'}>Catalog</Link>
                {isAuthenticated ?


                    <div>

                        <Link to={'/create'}>Post game</Link>
                        <Link to={'/logout'}>Logout</Link>
                        <div className={style["user-profile"]}>
                            <img src={userAvatar} alt="avatar" />
                            <p>{username}</p>
                        </div>
                    </div>

                    :
                    <div>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>

                }



            </nav>
        </header>
    )
}