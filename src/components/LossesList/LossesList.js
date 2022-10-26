import React from 'react';
import useFetch from "../../services/useFetch";
import LossesListItem from "../LossesListItem/LossesListItem";
import './lossesList.scss';
import {Animate,AnimateGroup} from "react-simple-animate";
import {MagnifyingGlass} from "react-loader-spinner";


const props ={
    start:{opacity:0},
    end:{opacity: 1},

}

const LossesList = ({lang}) => {



    const {
        data,
        loading,
        error
    } = useFetch(`https://russianwarship.rip/api/v1/terms/${lang}`);

    const {
        data: data2,
        loading: loading2,
        error: error2
    } = useFetch('https://russianwarship.rip/api/v1/statistics/latest');

     if(!data || !data2) return <MagnifyingGlass
         visible={true}
         height="80"
         width="80"
         ariaLabel="MagnifyingGlass-loading"
         wrapperStyle={{}}
         wrapperClass="MagnifyingGlass-wrapper"
         glassColor = '#c0efff'
         color = '#e15b64'
     />
    if (loading || loading2) return <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
    />
    if (error || error2) console.log('error');


    return (<>


            <div className="container">

                    {/*<div className="losses__list">*/}
                    {/*    {Object.keys(data2.data.increase).map(key=>{*/}
                    {/*        return <LossesListItem key={key} increase={data2?.data?.increase[key]} quantity={data2?.data?.stats[key]} title={data?.data[key].title} icon={data?.data[key].icon}/>*/}
                    {/*    })}*/}
                    {/*</div>*/}

                <div className="losses__list">
                    <AnimateGroup play>
                        <Animate {...props} sequenceIndex={0}>
                            <LossesListItem
                                increase={data2?.data.increase.personnel_units}
                                quantity={data2?.data.stats.personnel_units}
                                title={data?.data.personnel_units.title}
                                icon={data?.data.personnel_units.icon}/>

                        </Animate>
                        <Animate {...props} sequenceIndex={1}>
                            <LossesListItem increase={data2?.data.increase.tanks}
                                            quantity={data2?.data?.stats.tanks}
                                            title={data?.data?.tanks?.title}
                                            icon={data?.data?.tanks.icon}/>

                        </Animate>
                        <Animate {...props} sequenceIndex={2}>
                            <LossesListItem
                                increase={data2?.data?.increase.armoured_fighting_vehicles}
                                quantity={data2?.data?.stats.armoured_fighting_vehicles}
                                title={data?.data?.armoured_fighting_vehicles?.title}
                                icon={data?.data?.armoured_fighting_vehicles.icon}/>

                        </Animate>
                        <Animate {...props} sequenceIndex={3}>
                            <LossesListItem
                                increase={data2?.data.increase.artillery_systems}
                                quantity={data2?.data?.stats.artillery_systems}
                                title={data?.data?.artillery_systems?.title}
                                icon={data?.data?.artillery_systems.icon}/>

                        </Animate>
                        <Animate {...props} sequenceIndex={4}>
                            <LossesListItem increase={data2?.data.increase.mlrs}
                                            quantity={data2?.data?.stats.mlrs}
                                            title={data?.data?.mlrs?.title}
                                            icon={data?.data?.mlrs.icon}/>

                        </Animate>
                        <Animate {...props} sequenceIndex={5}>
                            <LossesListItem
                                increase={data2?.data.increase.vehicles_fuel_tanks}
                                quantity={data2?.data?.stats.vehicles_fuel_tanks}
                                title={data?.data?.vehicles_fuel_tanks?.title}
                                icon={data?.data?.vehicles_fuel_tanks.icon}/>
                        </Animate>

                        <Animate {...props} sequenceIndex={6}>
                            <LossesListItem
                                increase={data2?.data.increase.warships_cutters}
                                quantity={data2?.data?.stats.warships_cutters}
                                title={data?.data?.warships_cutters?.title}
                                icon={data?.data?.warships_cutters.icon}/>

                        </Animate>
                        <Animate {...props} sequenceIndex={7}>


                        </Animate>
                        <Animate {...props} sequenceIndex={8}>
                            <LossesListItem
                                increase={data2?.data.increase.uav_systems}
                                quantity={data2?.data?.stats.uav_systems}
                                title={data?.data?.uav_systems?.title}
                                icon={data?.data?.uav_systems.icon}/>

                        </Animate>

                        <Animate {...props} sequenceIndex={9}>
                            <LossesListItem
                                increase={data2?.data.increase.atgm_srbm_systems}
                                quantity={data2?.data?.stats.atgm_srbm_systems}
                                title={data?.data?.atgm_srbm_systems?.title}
                                icon={data?.data?.atgm_srbm_systems.icon}/>

                        </Animate>

                        <Animate {...props} sequenceIndex={10}>
                            <LossesListItem
                                increase={data2?.data.increase.cruise_missiles}
                                quantity={data2?.data?.stats.cruise_missiles}
                                title={data?.data?.cruise_missiles?.title}
                                icon={data?.data?.cruise_missiles.icon}/>

                        </Animate>

                        <Animate  {...props} sequenceIndex={11}>
                            <LossesListItem
                                increase={data2?.data.increase.special_military_equip}
                                quantity={data2?.data?.stats.special_military_equip}
                                title={data?.data?.special_military_equip?.title}
                                icon={data?.data?.special_military_equip.icon}/>

                        </Animate>

                    </AnimateGroup>

                </div>
            </div>


        </>


    );
};

export default LossesList;
