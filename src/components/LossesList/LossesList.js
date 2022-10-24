import React from 'react';
import useFetch from "../../services/useFetch";
import '@coreui/coreui/dist/css/coreui.min.css';
import './lossesList.scss';

import LossesListItem from "../LossesListItem/LossesListItem";


const LossesList = () => {

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

    if (!data || !data2) return <h1> LOADING...</h1>;
    if (loading || loading2) return <h1> LOADING...</h1>;
    if (error || error2) console.log('error');

    return (
        <>
            <div className="container">
                <div className="losses__list">
                    {Object.keys(data2.data.increase).map(key => {
                        return <LossesListItem key={key}
                                increase={data2?.data?.increase[key]}
                                quantity={data2?.data?.stats[key]}
                                title={data?.data[key].title}
                                icon={data?.data[key].icon}/>
                        }
                    )}
                </div>
            </div>
        </>
    );
};

export default LossesList;
