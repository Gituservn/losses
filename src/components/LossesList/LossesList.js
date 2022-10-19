import React from 'react';
import useFetch from "../../services/useFetch";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import translationsEn from "../../locals/translationsEn";
import translationsUk from "../../locals/translationsUk";
import CountUp from "react-countup";
import {CButtonGroup, CButton} from "@coreui/react";
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
    const onChange = (event) => {
        event.preventDefault();
        i18n.changeLanguage(event.target.value);
    };

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
                    <option type="" value="ua">{t('ukrainian')}</option>
                    <option value="en">{t('english')}</option>
                </select>

            </div>

            <header className="App-header">
                <div className="header__wrapper">
                    <p className="subtitle">{t('General')}</p>
                    <h1 className="title">{t('Losses')}</h1>
                    <div className="date">
                        <div>{data?.data.date}</div>
                        <div className="day">{data?.data.day} {t('Day')}</div>
                    </div>
                </div>
                <a href="https://www.mil.gov.ua/"><img src={milLogo}
                                                       alt=""/></a>
            </header>
            <div className="container">
                <div className="losses__list">
                    <div className="losses__item">
                        <img src={people} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Personnel_units')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.personnel_units}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}

                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={art} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Artillery_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.artillery_systems}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={plane} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Planes')}</h2>

                            <CountUp className="quantity"
                                     end={data?.data.stats.planes}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}/>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={ship} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Warships_cutters')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.warships_cutters}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}

                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={trk} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('ATGM_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.atgm_srbm_systems}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={tank} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Tanks')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.tanks}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={rszv} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('MLRS')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.mlrs}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={helicopter} alt=""
                             className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Helicopters')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.helicopters}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={bpla} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('UAV_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.uav_systems}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={rocket} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Cruise_missiles')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.cruise_missiles}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={bbm} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('AFV')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.armoured_fighting_vehicles}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={ppo} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('AA_warfare_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.aa_warfare_systems}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={auto} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Vehicles_and_fuel_tanks')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.vehicles_fuel_tanks}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={special} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <h2 className="current__title">{t('Special_military_equip')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.special_military_equip}
                                     scrollSpyOnce={true}
                                     enableScrollSpy={true}
                                     duration={1}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

export default LossesList;