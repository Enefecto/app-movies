import './App.css';
import Movies from './componentes/Movies.jsx';
function App() {
  return (
    <div className="conteiner">
        <header className="header">
            <div className='cont-header'>
                <div className="play">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 4v16l13 -8z" />
                    </svg>
                </div>
                <h1 id="tittle">Movies Time</h1>
            </div>
        </header>
        <div className="separator"></div>
        <main className="main">
            <section className="cont-up">
                <div className="cont-search">
                    <input type="text" id="search" placeholder="Search your favorite movie"/>
                    <button id="button-search">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="3.6rem" height="3.6rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </div>
                <div className="cont-add">
                    <button id="add">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="3.6rem" height="3.6rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <span>Add Movie</span>
                    </button>
                </div>
            </section>
            <section className="cont-movies">
                <Movies/>
            </section>
        </main>
        <footer className="footer"></footer>
    </div>
  );
}

export default App;