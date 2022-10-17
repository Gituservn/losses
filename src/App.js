import LossesList from "./components/LossesList/LossesList";
import milLogo from './assets/images/mil-logo.svg'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header__wrapper">
                    <p className="subtitle">Генеральний штаб ЗС України
                        інформує</p>
                    <h1 className="title">Загальні бойові
                        втрати <br/> російського
                        окупанта</h1>
                </div>
                <a href="https://www.mil.gov.ua/"><img src={milLogo} alt=""/></a>
            </header>
            <LossesList/>
        </div>
    );
}

export default App;
