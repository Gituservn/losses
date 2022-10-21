import React from 'react';
import useFetch from "../../services/useFetch";
import {useTranslation} from "react-i18next";
import CountUp from "react-countup";
import Typist from "react-typist";
import '@coreui/coreui/dist/css/coreui.min.css';
import './lossesList.scss';
import people from '../../assets/icons/icon-people.svg';
import art from '../../assets/icons/icon-art.svg';
import plane from '../../assets/icons/icon-plane.svg';
import ship from '../../assets/icons/icon-ship.svg';
import tank from '../../assets/icons/icon-tank.svg';
import trk from '../../assets/icons/icon-trk.svg';
import rszv from '../../assets/icons/icon-rszv.svg';
import helicopter from '../../assets/icons/icon-helicopter.svg';
import bpla from '../../assets/icons/icon-bpla.svg';
import rocket from '../../assets/icons/icon-rocket.svg';
import bbm from '../../assets/icons/icon-bbm.svg';
import ppo from '../../assets/icons/icon-ppo.svg';
import auto from '../../assets/icons/icon-auto.svg';
import special from '../../assets/icons/icon-special.svg';
import milLogo from "../../assets/images/mil-logo.svg";


const LossesList = () => {
    const {t} = useTranslation();

    const {
        data,
        loading,
        error
    } = useFetch('https://russianwarship.rip/api/v1/statistics/latest');
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log('error');


    return (<>

            <div className="container">
                <header className="App-header">
                    <div className="header__wrapper">
                        <Typist avgTypingDelay={90} stdTypingDelay={0}>
                            <Typist.Delay ms={500}/>
                            {t('General')}
                            <h1 className="title">{t('Losses')}</h1>
                            <div className="date">
                                <div>{data?.data.date}</div>
                                <div
                                    className="day">{data?.data.day.toString()} {t('Day')}</div>
                            </div>
                        </Typist>
                    </div>
                    <a className='App-header__logo' href="https://www.mil.gov.ua/"><img className='logo__img' src={milLogo} alt=""/></a>
                </header>
            </div>


            


        </>


    );
};

export default LossesList;
