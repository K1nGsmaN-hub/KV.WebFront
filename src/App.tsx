import NavSidebar from './components/NavSidebar';
import Header from './components/Header';

import './styles.scss';

function App() {
    return (
        <div className="App">
            <NavSidebar />

            <div className="content">
                <Header />

                <main></main>
            </div>
        </div>
    );
}

export default App;
