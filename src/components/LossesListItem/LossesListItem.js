import React from 'react';
import CountUp from "react-countup";
import {useTranslation} from "react-i18next";

const LossesListItem = ({icon, title, increase, quantity}) => {
    const {t} = useTranslation();
    return (
        <div>
            <div className="losses__item">
                <img src={icon} alt="" className="losses__item_img"/>
                <div className="current__wrapper">
                    <div
                        className='increase'> + {increase > 0 ? increase : 0}</div>
                    <h2 className="current__title">{t(title)}</h2>
                    <CountUp className="quantity"
                             end={quantity}
                             duration={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default LossesListItem;