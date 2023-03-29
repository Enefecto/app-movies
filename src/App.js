import './App.css';
import Search from './componentes/search/Search';
import AddMovie from './componentes/add-task/AddTask';
import Movies from './componentes/tasks/Tasks.jsx';

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
                <h1 id="title">Movies Time</h1>
            </div>
        </header>
        <div className="separator"></div>
        <main className="main">
            <section className="cont-up">
                <Search />
                <AddMovie />
            </section>
            <section className="cont-tasks">
                <Movies/>
            </section>
        </main>
        <footer className="footer"></footer>
    </div>
  );
}

export default App;