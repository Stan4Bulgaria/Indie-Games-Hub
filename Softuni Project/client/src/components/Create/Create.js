import styles from './Create.module.css'
import { useForm } from '../../hooks/useForm';
import { Link } from "react-router-dom";
export const Create = ({ onCreateGameSub }) => {
    const { values, onChangeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        difficulty: '',
        imageURL: '',
        discription:'',

    }, onCreateGameSub)
    return (
        <form className={styles["create-game"]} onSubmit={onSubmit}>
            <Link to={'/'} type="button" className={styles["close-button"]}>X</Link >
            <h1>Create Game</h1>
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