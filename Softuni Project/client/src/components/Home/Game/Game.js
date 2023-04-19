import style from './Game.module.css'
import{Link} from 'react-router-dom'
export const Game = ({title, category, difficulty, imageURL, _id }) => {
    return (
        
            <div className={style["card"]}>
                <img src={imageURL} alt='game' />
                <h2>{title}</h2>
                <p>Genre: {category}</p>
                <p>Difficulty: {difficulty}</p>
                <Link to={`/details/${_id}`}>Learn More</Link>
            </div>

    )
}