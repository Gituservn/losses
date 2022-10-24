import React from 'react';
import "./Buttons.scss";

function Buttons({onChange, handleToggleDarkMode, darkMode}) {

    return (

        <div className="buttons__group">
            <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
                    className='darkMode'><span>{`${darkMode ? 'Світла' : 'Темна'}`}</span></button>
            <div className='buttons__lng-group'>
                <button className='button__ukr' onClick={onChange}
                        value="ua"></button>
                <button className='button__eng' onClick={onChange}
                        value="en"></button>
            </div>
        </div>


    );
}

export default Buttons;