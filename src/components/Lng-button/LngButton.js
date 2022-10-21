import React from 'react';

function LngButton({onChange}) {

    return (
        <div className='buttons__lng-group'>
            <button className='button__ukr'  onClick={onChange}
                    value="ua"></button>
            <button className='button__eng'  onClick={onChange}
                    value="en"></button>
        </div>
    );
}

export default LngButton;