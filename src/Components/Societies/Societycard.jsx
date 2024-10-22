import React from 'react';

const SocietyCard = ({ society }) => {
  if (!society) {
    console.log("No society data");
    return null;
  }

  return (
    <div className="relative group h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg" style={{ width: "70rem" }}>
      {/* Society picture */}
      <img
        src={society.picture}  
        alt={society.name}
        className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Left Section */}
        <div className="w-1/2">
          <h3 className="text-white text-3xl font-bold mb-2">{society.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{society.description}</p>

          {/* Social Links */}
          <div className="flex space-x-4 ml-5 mt-4">
            {society.social_links && society.social_links.map((link) => (
              <a
                key={link._id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white hover:text-${link.name === 'Facebook' ? 'blue-500' : 
                           link.name === 'Twitter' ? 'blue-400' : 
                           link.name === 'Linkedin' ? 'blue-700' : 'white'}`}
              >
                <i className={`fab fa-${link.name.toLowerCase()}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 flex flex-col items-center">
          <p className="text-white font-semibold">{society.name}</p>
          <p className="text-gray-300 text-sm">{society.email}</p>
        </div>
      </div>

      {/* Join Button at Bottom */}
      <button className="absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-blue-600 text-white px-6 py-2 rounded-lg transition-transform duration-300 group-hover:scale-105">
        Join Now
      </button>
    </div>
  );
};

export default SocietyCard;
