const URL = 'http://localhost:3030/data/games';

const createGame = async (game, token) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(game)
    });
    const data = await response.json();
    return data;
}
const getGames = async () => {

    try {

        const response = await fetch(URL);
        const data = await response.json();
        return data
    }
    catch (err) {
        console.log(err)
    }

}
const postComment = async (id, comment, token, username, avatar) => {
    const fullData = {
        username: username,
        avatar: avatar,
        text: comment,
        gameOwner: id
    }
    const response = await fetch('http://localhost:3030/data/comments', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(fullData)
    });
    const data = await response.json();
    return data;

}
const login = async (user) => {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}
const register = async (user) => {
    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}
const deleteGame = async (_id, token) => {
    const response = await fetch(`http://localhost:3030/data/games/${_id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    const data = response.json();
    return data;
}
const logout = async (token) => {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });
    const data = await response.json();
    return data;
}
const editGame = async (data, gameId, token) => {
    const response = await fetch(`http://localhost:3030/data/games/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });
    const result = response.json();
    return result
}
export const getOneGame = async (gameId) => {
    const response = await fetch(`http://localhost:3030/data/games/${gameId}`);
    const data = response.json();
    return data;

}
export const request = {
    createGame,
    getGames,
    postComment,
    login,
    register,
    deleteGame,
    logout,
    getOneGame,
    editGame
}