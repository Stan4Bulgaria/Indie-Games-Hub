import styles from './Details.module.css';
import { Comment } from './Comment/Comment';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const Details = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(game.comments || []);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/games/${gameId}`)
            .then(res => res.json())
            .then(data => setGame(data))
            .catch(err => console.log(err));
    }, [])
    const onChange = (e) => {
        setComment(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setComments(state => [...state, comment]);
        setGame(state => ({ ...state, comments: [...comments, comment] }));
    }
    const commentsList = comments.map(x => <Comment com ={x}/>)
    return (
        <div className={styles["container"]}>
            <section className={styles['game-details']}>
                <h1>Game Details</h1>
                <div className={styles["info-section"]}>
                    <div className={styles["game-header"]}>
                        <img className={styles["game-img"]} src={game.imageURL} alt="second" />
                        <h1>{game.title}</h1>
                        <span className={styles["levels"]}>Difficulty:{game.difficulty} </span>
                        <p className={styles["type"]}>{game.category}</p>
                    </div>
                    <p className={styles["text"]}>
                        {game.discription}
                    </p>
                    {/* Bonus ( for Guests and Users ) */}
                    <div className={styles["details-comments"]}>
                        <h2>Comments:</h2>
                        <ul>



                        </ul>
                    </div>
                    {/* Edit/Delete buttons ( Only for creator of this game )  */}
                    <div className={styles["buttons"]}>

                    </div>
                </div>
                {/* Bonus */}
                {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
                <article className={styles["create-comment"]}>
                    <label>Add new comment:</label>
                    <form className={styles["form"]} onSubmit={onSubmit}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            value={comment}
                            onChange={onChange}

                        />
                        <input
                            className="btn submit"
                            type="submit"
                            defaultValue="Add Comment"
                        />
                    </form>
                </article>
            </section>

        </div>
    )
}