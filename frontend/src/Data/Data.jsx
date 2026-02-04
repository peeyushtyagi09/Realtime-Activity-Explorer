import React from 'react';
import Data_component from './Data_component'
const count = 1000;
const Data = () => {
    return (
        <div>
            {Array.from({ length: count }, (_, index) => (
                <div key={index}>
                    <Data_component item={index + 1}/>
                </div>
            ))}
        </div>
    );
}

export default Data;