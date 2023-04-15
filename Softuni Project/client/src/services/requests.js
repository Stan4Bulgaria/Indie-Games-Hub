const URL = 'http://localhost:3030/jsonstore/games';

export const createGame = async (game) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });
    const data = await response.json();
    return data;
}
export const getGames = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    return Object.values(data);
}