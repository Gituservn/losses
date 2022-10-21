import LossesList from "./components/LossesList/LossesList";
import LngButton from "./components/Lng-button/LngButton";
import i18n from "i18next";
import './App.css';
import {initReactI18next} from "react-i18next";
import translationsEn from "./locals/translationsEn";
import translationsUk from "./locals/translationsUk";

function App() {


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
        <div className="App">
            <LngButton onChange={onChange}  />
            <LossesList/>
        </div>
    );
}

export default App;
