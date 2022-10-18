import React from 'react';
import useFetch from "../../services/useFetch";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {fadeIn} from "react-animations";
import styled, { keyframes } from 'styled-components';
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

const translationsEn = {
    Personnel_units: "Personnel units",
    Artillery_systems: "Artillery systems",
    Planes: "Planes",
    Warships_cutters: "Warships / cutters",
    ATGM_systems: "ATGM/SRBM systems",
    Tanks: "Tanks",
    MLRS: "Mlrs",
    Helicopters: "Helicopters",
    UAV_systems: "UAV systems",
    Cruise_missiles: "Cruise missiles",
    AFV: "AFV",
    AA_warfare_systems: "AA warfare systems",
    Vehicles_and_fuel_tanks: "Vehicles and fuel tanks",
    Special_military_equip: "Special military equip.",
    General:'General Staff of the Armed Forces of Ukraine',
    Losses:'Total combat losses of the Russian occupier',
    Day:'The day of the great war',
    english: "English",
    ukrainian: "Ukrainian"
};
const translationsUk = {
    Personnel_units: "особового складу",
    Artillery_systems: "арт. систем",
    Planes: "літаків",
    Warships_cutters: "кораблів/катерів",
    ATGM_systems: "установок ОТРК/ТРК",
    Tanks: "танків",
    MLRS: "РСЗВ",
    Helicopters: "гелікоптерів",
    UAV_systems: "БПЛА",
    Cruise_missiles: "крилатих ракет",
    AFV: "ББМ",
    AA_warfare_systems: "засобів ППО",
    Vehicles_and_fuel_tanks: "автотехніки та автоцистерн",
    Special_military_equip: "спец. техніки",
    General:'Генеральний штаб ЗС України інформує',
    Losses:'Загальні бойові втрати російського окупанта',
    Day:'День великої війни',
    english: "Англійська",
    ukrainian: "Українська"};

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: translationsEn},
        uk: {translation: translationsUk},
    },
    lng: 'uk',
    fallbackLng: 'uk',
    interpolation: {escapeValue: false}
});
const LossesList = () => {
    const {t} = useTranslation();
    const onChange=(event)=>{
        i18n.changeLanguage(event.target.value)
    }

    const {
        data,
        loading,
        error
    } = useFetch('https://russianwarship.rip/api/v1/statistics/latest');
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log('error');



    return (<>
            <div className="change__lang">
                <select name="language" onChange={onChange}>
                    <option value="ua">{t('ukrainian')}</option>
                    <option value="en">{t('english')}</option>
                </select>
            </div>
            <header className="App-header">
                <div className="header__wrapper">
                    <p className="subtitle">{t('General')}</p>
                    <h1 className="title">{t('Losses')}</h1>
                    <div className="date">
                        <div>{data?.data.date}</div>
                        <div className='day'>{data?.data.day} {t('Day')}</div>
                    </div>
                </div>
                <a href="https://www.mil.gov.ua/"><img src={milLogo} alt=""/></a>
            </header>
            <div className="container">

                <div className="losses__list">

                    <div className="losses__item">
                        <img src={people} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Personnel_units')}</h2>
                            <p className="quantity">{data?.data.stats.personnel_units}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={art} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Artillery_systems')}</h2>
                            <p className="quantity">{data?.data.stats.artillery_systems}</p>

                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={plane} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Planes')}</h2>
                            <p className="quantity">{data?.data.stats.planes}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={ship} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Warships_cutters')}</h2>
                            <p className="quantity">{data?.data.stats.warships_cutters}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={trk} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('ATGM_systems')}</h2>
                            <p className="quantity">{data?.data.stats.atgm_srbm_systems}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={tank} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Tanks')}</h2>
                            <p className="quantity">{data?.data.stats.tanks}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={rszv} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('MLRS')}</h2>
                            <p className="quantity">{data?.data.stats.mlrs}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={helicopter} alt=""
                             className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Helicopters')}</h2>
                            <p className="quantity">{data?.data.stats.helicopters}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={bpla} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('UAV_systems')}</h2>
                            <p className="quantity">{data?.data.stats.uav_systems}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={rocket} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Cruise_missiles')}</h2>
                            <p className="quantity">{data?.data.stats.cruise_missiles}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={bbm} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('AFV')}</h2>
                            <p className="quantity">{data?.data.stats.armoured_fighting_vehicles}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={ppo} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('AA_warfare_systems')}</h2>
                            <p className="quantity">{data?.data.stats.aa_warfare_systems}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={auto} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Vehicles_and_fuel_tanks')}</h2>
                            <p className="quantity">{data?.data.stats.vehicles_fuel_tanks}</p>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={special} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Special_military_equip')}</h2>
                            <p className="quantity">{data?.data.stats.special_military_equip}</p>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

export default LossesList;