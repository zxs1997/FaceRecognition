import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, your have done ...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
            <div className='white f3'>
                {`times`}
            </div>
        </div>
    );
}

export default Rank;