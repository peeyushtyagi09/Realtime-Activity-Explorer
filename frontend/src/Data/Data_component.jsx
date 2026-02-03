import React from 'react';

const Data_component = ({ item }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 my-2 flex items-center space-x-4 border hover:shadow-lg transition-shadow duration-200">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                <span className="text-blue-600 font-bold text-lg">{item ? item[0] : '?'}</span>
            </div>
            <div>
                <div className="text-lg font-semibold text-gray-800">
                    {item ? item : "No item"}
                </div>
                <div className="text-gray-400 text-sm">
                    Item detail goes here
                </div>
            </div>
        </div>
    );
}

export default Data_component;