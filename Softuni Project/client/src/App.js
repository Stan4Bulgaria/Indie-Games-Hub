import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Catalog } from './components/Catalog/Catalog';
import { useState, useEffect } from 'react';
import { getGames } from './services/requests';
import { Loader } from './components/Loader/Loader';
import { GameContext } from './GameContext/GameContext';
function App() {
    const [games, setGames] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        getGames()
            .then(res => {
                setGames(res)
                setLoader(false);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div className='App'>

            <Header />
            {loader ? <Loader /> :
                <main className='main-content'>
                    <GameContext.Provider value={games}>

                        <Routes>

                            <Route path='/' element={<Home/>} />
                            <Route path='/catalog' element={<Catalog/>} />
                            <Route path='/create' element={<Create />} />
                            <Route path='/logout' element={<h1>Logout!</h1>} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/details/:gameId' element={<Details />} />

                        </Routes>

                    </GameContext.Provider>
                </main>
            }
            <Footer />

        </div>
    );
}

export default App;
