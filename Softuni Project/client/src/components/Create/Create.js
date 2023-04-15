import styles from './Create.module.css'
import { useState } from 'react';
import { createGame } from '../../services/requests';
import { Link } from "react-router-dom";
export const Create = () => {
    const [values, setValues] = useState({
        title: "",
        category: "",
        difficulty: '',
        imageURL: "",
        discription: "",
        commens:[]
    });
    function onChange(e) {
        console.log(e.target.value)
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        await createGame(values);
         
        const blank = {

            title: "",
            category: "",
            difficulty: '',
            imageURL: "",
            discription: ""
        };
        setValues(blank);
   
    }
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
                onChange={onChange}
            />
            <label htmlFor="category">Category:</label>
            <select name="category" id="category" value={values.category} onChange={onChange}>
                <option value="">--Select an option--</option>
                <option value="FPS">FPS</option>
                <option value="RPG">RPG</option>
                <option value="Sandbox">Sandbox</option>
                <option value="Sim">Sim</option>
                <option value="Strategy">Strategy </option>
                <option value="Action">Action</option>
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
                onChange={onChange}
            />
            <label htmlFor="game-img">Image:</label>
            <input
                type="text"
                id="imageURL"
                name="imageURL"
                placeholder="Upload a photo..."
                value={values.imageURL}
                onChange={onChange}
            />
            <label htmlFor="discription">Summary:</label>
            <textarea
                name="discription"
                id="discription"
                value={values.discription}
                onChange={onChange}
            />
            <button  className={styles['submit-btn']} type="submit" >Submit</button>
        </form>

    )
}