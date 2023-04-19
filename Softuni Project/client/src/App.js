import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Catalog } from './components/Catalog/Catalog';
import { NotFound } from './components/404/NotFound';
import { useState, useEffect } from 'react';
import { request } from './services/requests';
import { Loader } from './components/Loader/Loader';
import { GameContext } from './contexts/GameContext';
import { AuthContext } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { reguestValidator } from './services/requestValidates';
import { Logout } from './components/Logout/Logout';
import { Edit } from './components/Edit/Edit';
function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState({});
    const [auth, setAuth] = useState({});
    useEffect(() => {

        request.getGames()
            .then(res => {

                setGames(res);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoader(false);
            });

    }, []);
    const location = useLocation();
    useEffect(() => {
        setError({});
    }, [location]);

    const onCreateGameSub = async (data) => {

        const newGame = await request.createGame(data, auth.accessToken);
        setGames(state => [...state, newGame]);
        navigate('/catalog');

    }
    const onEditSubmit = async (data, gameId) => {
        const game = await request.editGame(data, gameId, auth.accessToken);
        setGames(state => state.map(x => x._id === gameId ? game : x));
    }
    const onLoginSub = async (data) => {
        const result = await request.login(data);
        const validateCheck = reguestValidator.loginValidator(result)
        if (validateCheck.message !== undefined) {
            return setError(validateCheck);
        }
        setError(validateCheck);
        setAuth(result);
        navigate('/catalog');
    }
    const onRegisterSub = async (data) => {
        const validateCheck = reguestValidator.registerValidator(data)
        if (validateCheck.message !== undefined) {
            return setError(validateCheck);
        }
        setError(validateCheck);
        const result = await request.register(data);
        setAuth(result);
        navigate('/');
    }
    const onDeleteHandler = async (id, token) => {
        await request.deleteGame(id, token);
        setGames(state => state.filter(game => game._id !== id));
        navigate('/catalog');
    }
    const setLogout = () => {
        const result = request.logout(auth.accessToken);
        console.log(result);
        setAuth({});
    }
    const gameContextValues = { games, error, onDeleteHandler }
    const authContextValues = {
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        userAvatar: auth.avatar,
        username: auth.username,
        avatar: auth.avatar,
        setLogout
    }
    return (
        <AuthContext.Provider value={authContextValues}>

            <div className='App'>
                <Header />
                {loader ? <Loader /> :
                    <main className='main-content'>
                        <GameContext.Provider value={gameContextValues}>

                            <Routes>

                                <Route path='/' element={<Home />} />
                                <Route path='/catalog' element={<Catalog />} />
                                <Route
                                    path="/create"
                                    element={
                                        !!auth.accessToken ? (
                                            <Create onCreateGameSub={onCreateGameSub} />
                                        ) : (
                                            <Navigate to="/404" replace />
                                        )
                                    }
                                />

                                <Route path='/edit/:gameId' element={ !!auth.accessToken ? (
                                    <Edit  onEditSubmit={onEditSubmit} />
                                ) : (
                                    <Navigate to="/404" replace />
                                )} />
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/login' element={<Login onLoginSub={onLoginSub} />} />
                                <Route path='/register' element={<Register onRegisterSub={onRegisterSub} />} />
                                <Route path='/details/:gameId' element={<Details />} />
                                <Route path='*' element={<NotFound />} />
                                <Route path='/404' element={<NotFound />} />

                            </Routes>

                        </GameContext.Provider>
                    </main>
                }
                <Footer />

            </div>
        </AuthContext.Provider>
    );
}

export default App;
