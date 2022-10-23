import React from 'react';

function Buttons({onChange,handleToggleDarkMode,darkMode}) {

    return (

        <div className="buttons__group">
            <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className='darkMode'>{`${darkMode ? 'Світла': 'Темна'}`}</button>
            <div className='buttons__lng-group'>
                <button className='button__ukr'  onClick={onChange}
                        value="ua"></button>
                <button className='button__eng'  onClick={onChange}
                        value="en"></button>
            </div>
        </div>




    );
}

export default Buttons;