import {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import LossesList from "./components/LossesList/LossesList";
import Buttons from "./components/Lng-button/Buttons";
import i18n from "i18next";
import './App.scss';
import {initReactI18next} from "react-i18next";
import translationsEn from "./locals/translationsEn";
import translationsUk from "./locals/translationsUk";

function App() {
    const [lang, setLang] = useState('ua');
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("losses-dark-mode")) || false);

    useEffect(() => {
        localStorage.setItem('losses-dark-mode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const saveDarkMode = JSON.parse(localStorage.getItem('losses-dark-mode'));
        if(saveDarkMode){setDarkMode(saveDarkMode)}
    },[]);

    useEffect(()=>{
        setLang(lang)
    },[lang])

    i18n.use(initReactI18next).init({
        resources: {
            en: {translation: translationsEn},
            uk: {translation: translationsUk},
        },
        lng: lang,
        fallbackLng: 'uk',
        interpolation: {escapeValue: false}
    });
    const onChange = (event) => {
        // i18n.changeLanguage(event.target.value);
        setLang(event.target.value)
    };


    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="App">
                <Buttons onChange={onChange} handleToggleDarkMode={setDarkMode} darkMode={darkMode} lang={lang} setLang={setLang}/>
                <Header/>
                <LossesList lang={lang}/>
            </div>
        </div>

    );
}

export default App;
