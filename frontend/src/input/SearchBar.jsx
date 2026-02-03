import React from 'react';

const SearchBar = () => {
    return (
        <div className="w-full flex items-center">
            <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition duration-150"
            />
        </div>
    );
}

export default SearchBar;