// SocietiesList.js
import React from 'react';

const SocietiesList = ({ societies }) => {
  return (
    <div className="w-1/2 pr-2 bg-gray-100 rounded-lg p-4 mr-3">
      <h4 className="text-lg font-medium mb-4 text-gray-400">Societies</h4>
      <ul className="list-none">
        {societies.map((society, index) => (
          <li
            key={index}
            className="border bg-white rounded-lg pl-4 mt-2 py-2 hover:translate-x-1 transition-transform duration-200 hover:bg-gray-300 hover:shadow-lg"
          >
            {society}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocietiesList;
