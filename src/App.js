import {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import LossesList from "./components/LossesList/LossesList";
import Buttons from "./components/Lng-button/Buttons";
import i18n from "i18next";
import './App.css';
import {initReactI18next} from "react-i18next";
import translationsEn from "./locals/translationsEn";
import translationsUk from "./locals/translationsUk";

function App() {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("losses-dark-mode")) || false);

    useEffect(() => {
        localStorage.setItem('losses-dark-mode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const saveDarkMode = JSON.parse(localStorage.getItem('losses-dark-mode'));
        if(saveDarkMode){setDarkMode(saveDarkMode)}
    },[]);

    i18n.use(initReactI18next).init({
        resources: {
            en: {translation: translationsEn},
            uk: {translation: translationsUk},
        },
        lng: 'uk',
        fallbackLng: 'uk',
        interpolation: {escapeValue: false}
    });
    const onChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };


    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="App">
                <Buttons onChange={onChange} handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
                <Header/>
                <LossesList/>
            </div>
        </div>

    );
}

export default App;
