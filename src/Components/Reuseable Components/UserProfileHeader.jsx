// ProfileHeader.js
import React from 'react';

const ProfileHeader = ({ name, department, imageSrc }) => {
  return (
    <div className="flex flex-row mb-12">
      <img
        src={imageSrc}
        alt="User"
        className="w-36 h-36 rounded-full border-4 border-blue-500"
      />
      <div className="flex flex-col items-center mb-6 mt-7 ml-16">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">{department}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
