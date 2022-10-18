import React from 'react';
import useFetch from "../../services/useFetch";

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
import {useTranslation} from "react-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";
import i18n from "../../i18n";

const LossesList = () => {
    const {t}=useTranslation();
    const [language,setLanguage]=useLocalStorage('language','uk')
    const handleLanguageChange= ()=>{
        if(language==='en'){
            i18n.changeLanguage('uk');
            setLanguage('uk')
        }else if (language==='uk'){
            i18n.changeLanguage('en')
            setLanguage('en')
        }
    }

    const {
        data,
        loading,
        error
    } = useFetch('https://russianwarship.rip/api/v1/statistics/latest');
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log('error');

    return (<div className="container">
            <div className="losses__list">

                <div className="losses__item">
                    <img src={people} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Personnel units orks`)}</h2>
                        <p className="quantity">{data?.data.stats.personnel_units}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={art} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Artillery systems`)}</h2>
                        <p className="quantity">{data?.data.stats.artillery_systems}</p>

                    </div>
                </div>
                <div className="losses__item">
                    <img src={plane} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Planes`)}</h2>
                        <p className="quantity">{data?.data.stats.planes}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={ship} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Warships/cutters`)}</h2>
                        <p className="quantity">{data?.data.stats.warships_cutters}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={trk} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`ATGM systems"`)}</h2>
                        <p className="quantity">{data?.data.stats.atgm_srbm_systems}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={tank} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Tanks`)}</h2>
                        <p className="quantity">{data?.data.stats.tanks}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={rszv} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`MLRS`)}</h2>
                        <p className="quantity">{data?.data.stats.mlrs}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={helicopter} alt=""
                         className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Helicopters`)}</h2>
                        <p className="quantity">{data?.data.stats.helicopters}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={bpla} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`UAV systems`)}</h2>
                        <p className="quantity">{data?.data.stats.uav_systems}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={rocket} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Cruise missiles`)}</h2>
                        <p className="quantity">{data?.data.stats.cruise_missiles}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={bbm} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`AFV`)}</h2>
                        <p className="quantity">{data?.data.stats.armoured_fighting_vehicles}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={ppo} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`AA warfare systems`)}</h2>
                        <p className="quantity">{data?.data.stats.aa_warfare_systems}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={auto} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Vehicles and fuel tanks`)}</h2>
                        <p className="quantity">{data?.data.stats.vehicles_fuel_tanks}</p>
                    </div>
                </div>
                <div className="losses__item">
                    <img src={special} alt="" className="losses__item_img"/>
                    <div className="current__wrapper">
                        <h2 className="current__title">{t(`Special military equip`)}</h2>
                        <p className="quantity">{data?.data.stats.special_military_equip}</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default LossesList;
