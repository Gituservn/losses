import React from 'react';
import {t} from "i18next";
import CountUp from "react-countup";

import './../LossesList/lossesList.scss'

const LossesListItem = ({icon, title, increase, quantity}) => {

    return (<div className="losses__item">
        <img src={icon} alt="" className="losses__item_img"/>
        <div className="current__wrapper">
            <h2 className="current__title">{t(title)}</h2>

            <CountUp className="quantity"
                     end={quantity}
                     duration={5}
            />
            <div
                className="increase"> {increase > 0 ?
                <div> ⇮(
                    {increase})
                </div> : null}
            </div>
        </div>
    </div>);
};

export default LossesListItem;