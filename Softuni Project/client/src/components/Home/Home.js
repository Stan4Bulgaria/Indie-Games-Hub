import styles from './Home.module.css';
import { Game } from './Game/Game';
import { GameContext } from '../../GameContext/GameContext';
import { useContext } from 'react';
export const Home = () => {
    const contextValue = useContext(GameContext);
    const gameList = contextValue.map(game => <Game key={game._id} {...game} />)
    return (
        <div>

            <section className={styles["welcome-world"]}>
                <div>
                    <h1>About Play indie Hub</h1>
                    <p>Welcome to Indie Games Hub, the ultimate destination for indie game enthusiasts! Our platform showcases some of the most innovative and exciting indie games in the industry, all in one place.</p>
                    <p>We believe that indie games represent some of the most creative and unique gaming experiences available today. That's why we're dedicated to highlighting and celebrating indie game developers, and providing a space where gamers can easily discover and play these amazing titles.</p>
                    <p>Our team of gaming experts is constantly scouring the industry to find the best indie games, from puzzle games to RPGs to action-packed adventures. We're committed to bringing you the latest and greatest in indie gaming, so you can always stay ahead of the curve.</p>
                    <p></p>
                    <p>The site can also offer a revenue-sharing model, where developers can sell their games on the platform and share a percentage of the profits with the site. This can be a win-win for both the developers and the site, as it provides an additional revenue stream for the site and incentivizes developers to continue creating innovative games.</p>
                    <p>Overall, an indie game site can serve as a hub for creativity and innovation in the gaming industry, offering a platform for indie developers to showcase their work and providing a community for gamers who are interested in discovering new and unique gaming experiences.</p>
                </div>

            </section>

            <section className={styles['latest-games']}>

                <div className={styles["game-container"]}>
                    <h2>Featured Games</h2>
                    <div className={styles["game-cards"]}>
                        {gameList}
                    </div>

                </div>

            </section>

        </div>

    )
}