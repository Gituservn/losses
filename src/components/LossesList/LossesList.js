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

<div className="container">
                <div className="losses__list">
                    <div className="losses__item">
                        <img src={people} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.personnel_units>0 ? data.data.increase.personnel_units : 0 }</div>
                            <h2 className="current__title">{t('Personnel_units')}</h2>

                            <CountUp className="quantity"
                                     end={data?.data.stats.personnel_units}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={art} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.artillery_systems>0 ? data.data.increase.artillery_systems : 0 }</div>

                            <h2 className="current__title">{t('Artillery_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.artillery_systems}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={plane} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.planes>0 ? data.data.increase.planes : 0 }</div>

                            <h2 className="current__title">{t('Planes')}</h2>

                            <CountUp className="quantity"
                                     end={data?.data.stats.planes}
                                     duration={5}/>
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={ship} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.warships_cutters>0 ? data.data.increase.warships_cutters : 0 }</div>

                            <h2 className="current__title">{t('Warships_cutters')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.warships_cutters}
                                     duration={5}

                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={trk} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.atgm_srbm_systems>0 ? data.data.increase.atgm_srbm_systems : 0 }</div>

                            <h2 className="current__title">{t('ATGM_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.atgm_srbm_systems}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={tank} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.tanks>0 ? data.data.increase.tanks : 0 }</div>

                            <h2 className="current__title">{t('Tanks')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.tanks}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={rszv} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.mlrs>0 ? data.data.increase.mlrs : 0 }</div>

                            <h2 className="current__title">{t('MLRS')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.mlrs}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={helicopter} alt=""
                             className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.helicopters>0 ? data.data.increase.helicopters : 0 }</div>

                            <h2 className="current__title">{t('Helicopters')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.helicopters}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={bpla} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.uav_systems>0 ? data.data.increase.uav_systems : 0 }</div>

                            <h2 className="current__title">{t('UAV_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.uav_systems}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={rocket} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.cruise_missiles>0 ? data.data.increase.cruise_missiles : 0 }</div>

                            <h2 className="current__title">{t('Cruise_missiles')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.cruise_missiles}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={bbm} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.armoured_fighting_vehicles>0 ? data.data.increase.armoured_fighting_vehicles : 0 }</div>

                            <h2 className="current__title">{t('AFV')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.armoured_fighting_vehicles}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={ppo} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.aa_warfare_systems>0 ? data.data.increase.aa_warfare_systems : 0 }</div>

                            <h2 className="current__title">{t('AA_warfare_systems')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.aa_warfare_systems}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={auto} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.vehicles_fuel_tanks>0 ? data.data.increase.vehicles_fuel_tanks : 0 }</div>

                            <h2 className="current__title">{t('Vehicles_and_fuel_tanks')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.vehicles_fuel_tanks}
                                     duration={5}
                            />
                        </div>
                    </div>
                    <div className="losses__item">
                        <img src={special} alt="" className="losses__item_img"/>
                        <div className="current__wrapper">
                            <div className='increase'> + {data?.data.increase.special_military_equip>0 ? data.data.increase.special_military_equip : 0 }</div>

                            <h2 className="current__title">{t('Special_military_equip')}</h2>
                            <CountUp className="quantity"
                                     end={data?.data.stats.special_military_equip}
                                     duration={5}
                            />
                        </div>
                    </div>
                </div>
            </div>
            


        </>


    );
};

export default LossesList;
