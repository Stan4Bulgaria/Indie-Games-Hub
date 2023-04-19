import styles from './Details.module.css';
import { Comment } from './Comment/Comment';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { request } from '../../services/requests';
import { AuthContext } from '../../contexts/AuthContext';
import { GameContext } from '../../contexts/GameContext';
export const Details = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState('');
    const [comment, setComment] = useState('');
    const { isAuthenticated, token, userId, avatar, username } = useContext(AuthContext)
    const {onDeleteHandler} = useContext(GameContext);
    useEffect(() => {
        fetch(`http://localhost:3030/data/games/${gameId}`)
            .then(res => res.json())
            .then(data => {
                setGame(data);
            })
            .catch(err => console.log(err));
    }, [gameId])
    useEffect(() => {
        fetch('http://localhost:3030/data/comments/')
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.log(err));
    },[])
    const onChange = (e) => {
        setComment(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if(comment ===''){
            return
        }
        const data = await request.postComment(game._id, comment, token, username, avatar)
        setComments(state => ([...state,data]));
        setComment('');
    }
    const isOwner = userId === game._ownerId;
    const onDelete = async () => {
         onDeleteHandler(gameId,token);
    }
    const commentsList = comments !== '' ? comments.map(x => x.gameOwner === gameId && <Comment key={x._id} {...x} />) : null;
    return (
        <div className={styles["container"]}>
            <section className={styles['game-details']}>
                <h1>Game Details</h1>
                <div className={styles["info-section"]}>
                    {isOwner &&
                        <div className={styles["buttons"]}>
                            <button className={styles['delete-btn']} onClick={onDelete}>Delete</button>
                            <Link to={`/edit/${gameId}`} className={styles['edit-btn']} >Edit</Link>
                        </div>
                    }
                    <div className={styles["game-header"]}>
                        <img className={styles["game-img"]} src={game.imageURL} alt="second" />
                        <h1>{game.title}</h1>
                        <span className={styles["levels"]}>Difficulty:{game.difficulty} </span>
                        <p className={styles["type"]}>{game.category}</p>
                    </div>
                    <p className={styles["text"]}>
                        {game.discription}
                    </p>

                    <div className={styles["details-comments"]}>
                        <h2>Comments:</h2>
                        <ul>

                            {commentsList}

                        </ul>
                    </div>

                </div>
                {isAuthenticated &&
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
                }
            </section>

        </div>
    )
}