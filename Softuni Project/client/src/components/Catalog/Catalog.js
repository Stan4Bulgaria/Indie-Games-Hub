import styles from './Catalog.module.css';
import { CatalogGame } from './CatalogGame/CatalogGame';
import { GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';
export const Catalog = () => {
    const contextValue = useContext(GameContext);
    const gameList = contextValue.games.map(game => <CatalogGame key={game._id} {...game} />)
    return (
        <div className={styles["container"]}>
            <h1>Game Catalog</h1>
            {gameList}

        </div>

    )
}