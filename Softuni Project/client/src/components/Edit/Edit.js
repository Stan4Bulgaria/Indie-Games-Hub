import { useState, useEffect,useContext } from 'react';
import styles from './Edit.module.css'
import { Link,Navigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { request } from '../../services/requests';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'
export const Edit = ({ onEditSubmit}) => {
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    useEffect(() => {
        request.getOneGame(gameId)
            .then(res => setGame(res))
            .catch(err => console.log(err))
    }, [gameId])
    const [values, setValues] = useState({
    })
    useEffect(() => {
        setValues({
            title: game.title,
            category: game.category,
            difficulty: game.difficulty,
            imageURL: game.imageURL,
            discription: game.discription
        });
    }, [game]);
    if(game._ownerId !==userId ){
        return(
          <Navigate to={'/404'}></Navigate>
        )
    }
    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onEditSubmit(values, gameId);
        navigate('/catalog');
        
    }
    return (
        <form className={styles["create-game"]} onSubmit={onSubmit}>
            <Link to={'/'} type="button" className={styles["close-button"]}>X</Link >
            <h1>Edit Game</h1>
            <label htmlFor="game-title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder='...Enter a game'
                value={values.title}
                onChange={onChangeHandler}
            />
            <label htmlFor="category">Category:</label>
            <select name="category" id="category" value={values.category} onChange={onChangeHandler}>
                <option value="">--Select an option--</option>
                <option value="FPS">FPS</option>
                <option value="RPG">RPG</option>
                <option value="Sandbox">Sandbox</option>
                <option value="Sim">Sim</option>
                <option value="Strategy">Strategy </option>
                <option value="Action">Action</option>
            </select>
            <label htmlFor="difficulty">Difficulty:</label>
            <input
                type="number"
                id="difficulty"
                name="difficulty"
                min={1}
                placeholder={1}
                value={values.difficulty}
                onChange={onChangeHandler}
            />
            <label htmlFor="game-img">Image:</label>
            <input
                type="text"
                id="imageURL"
                name="imageURL"
                placeholder="Upload a photo..."
                value={values.imageURL}
                onChange={onChangeHandler}
            />
            <label htmlFor="discription">Summary:</label>
            <textarea
                name="discription"
                id="discription"
                value={values.discription}
                onChange={onChangeHandler}
            />
            <button className={styles['submit-btn']} type="submit" >Submit</button>
        </form>

    )
}