import React from 'react';
import useFetch from "../../services/useFetch";
import {useTranslation} from "react-i18next";
import '@coreui/coreui/dist/css/coreui.min.css';
import './lossesList.scss';

import LossesListItem from "../LossesListItem/LossesListItem";


const LossesList = () => {
    const {t} = useTranslation();

    const {
        data,
        loading,
        error,
    } = useFetch('https://russianwarship.rip/api/v1/terms/en');

    const {
        data: data2,
        loading: loading2,
        error: error2,
    } = useFetch('https://russianwarship.rip/api/v1/statistics/latest');


     if(!data || !data2) return <h1> LOADING...</h1>;
    if (loading || loading2) return <h1> LOADING...</h1>;
    if (error) console.log('error');

    return (
        <>
            <div className="container">
                <div className="losses__list">
                    <LossesListItem increase={data2.data.increase.personnel_units} quantity={data2.data.stats.personnel_units} title={data.data.personnel_units.title} icon={data.data.personnel_units.icon}/>
                    <LossesListItem increase={data2?.data.increase.tanks} quantity={data2.data?.stats.tanks} title={data?.data?.tanks?.title} icon={data?.data?.tanks.icon}/>
                    <LossesListItem increase={data2?.data.increase.armoured_fighting_vehicles} quantity={data2.data?.stats.armoured_fighting_vehicles} title={data?.data?.armoured_fighting_vehicles?.title} icon={data?.data?.armoured_fighting_vehicles.icon}/>
                    <LossesListItem increase={data2?.data.increase.artillery_systems} quantity={data2.data?.stats.artillery_systems} title={data?.data?.artillery_systems?.title} icon={data?.data?.artillery_systems.icon}/>
                    <LossesListItem increase={data2?.data.increase.mlrs} quantity={data2.data?.stats.mlrs} title={data?.data?.mlrs?.title} icon={data?.data?.mlrs.icon}/>
                    <LossesListItem increase={data2?.data.increase.helicopters} quantity={data2.data?.stats.helicopters} title={data?.data?.helicopters?.title} icon={data?.data?.helicopters.icon}/>
                    <LossesListItem increase={data2?.data.increase.vehicles_fuel_tanks} quantity={data2.data?.stats.vehicles_fuel_tanks} title={data?.data?.vehicles_fuel_tanks?.title} icon={data?.data?.vehicles_fuel_tanks.icon}/>
                    <LossesListItem increase={data2?.data.increase.warships_cutters} quantity={data2.data?.stats.warships_cutters} title={data?.data?.warships_cutters?.title} icon={data?.data?.warships_cutters.icon}/>
                    <LossesListItem increase={data2?.data.increase.uav_systems} quantity={data2.data?.stats.uav_systems} title={data?.data?.uav_systems?.title} icon={data?.data?.uav_systems.icon}/>
                    <LossesListItem increase={data2?.data.increase.special_military_equip} quantity={data2.data?.stats.special_military_equip} title={data?.data?.special_military_equip?.title} icon={data?.data?.special_military_equip.icon}/>
                    <LossesListItem increase={data2?.data.increase.atgm_srbm_systems} quantity={data2.data?.stats.atgm_srbm_systems} title={data?.data?.atgm_srbm_systems?.title} icon={data?.data?.atgm_srbm_systems.icon}/>
                    <LossesListItem increase={data2?.data.increase.cruise_missiles} quantity={data2.data?.stats.cruise_missiles} title={data?.data?.cruise_missiles?.title} icon={data?.data?.cruise_missiles.icon}/>
                </div>
            </div>
        </>
    );
};

export default LossesList;
