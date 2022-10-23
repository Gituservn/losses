import React from 'react';
import milLogo from "../../assets/images/mil-logo.svg";
import useFetch from "../../services/useFetch";
import {useTranslation} from "react-i18next";
import "animate.css"

function Header() {
    const {t} = useTranslation();
    const {
        data,
        error
    } = useFetch('https://russianwarship.rip/api/v1/statistics/latest');

    if (error) console.log('error');
    return (
        <div className="container">
            <header className="App-header">
                <div className="header__wrapper">
                        {t('General')}
                    {t('General')}
                    <h1 className="title">{t('Losses')}</h1>
                    <div className="date">
                        <div>{data?.data.date}</div>
                        <div
                            className="day">{data?.data.day.toString()} {t('Day')}</div>
                    </div>



                </div>
                <a className="App-header__logo"
                   href="https://www.mil.gov.ua/"><img className="logo__img"
                                                       src={milLogo}
                                                       alt=""/></a>
            </header>
        </div>
    );
}

export default Header;