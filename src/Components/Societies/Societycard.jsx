import React from 'react';

const SocietyCard = ({ society }) => {
  return (
    <div className="relative group h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg" style={{ width: "70rem" }}>
  <img
    src={society.image}
    alt={society.name}
    className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {/* Left Section*/}
    <div className="w-1/2">
      <h3 className="text-white text-3xl font-bold mb-2">{society.name}</h3>
      <p className="text-gray-300 text-sm mb-4">{society.description}</p>
     {/* Team Leads */}
      <div className="text-center mt-4 mr-36">
  <h4 className="text-lg text-white font-semibold mb-2">Team Leads</h4>
  <div className="flex flex-wrap justify-center gap-4">
    {society.teamLeads.map((lead, index) => (
      <div key={index} className="text-center">
        <img
          src={lead.image}
          alt={lead.name}
          className="w-16 h-16 rounded-full mb-2"
        />
        <p className="text-sm text-white">{lead.name}</p>
      </div>
    ))}
  </div>
</div>
 {/* Social Links */}
 <div className="flex space-x-4 ml-5 mt-4">
        <a href={society.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={society.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={society.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

    </div>

    {/* Right Section: Founder */}
    <div className="w-1/3 flex flex-col items-center">
      <img
        src={society.founderImage}
        alt={society.founder}
        className="rounded-md mb-2 border-2 border-white" style={{width:"200px",height:"200px"}}
      />
      <p className="text-white font-semibold">{society.founder}</p>
      <p className="text-gray-300 text-sm">{society.email}</p>
     
    </div>
    
  </div>
  {/* Centered Join Button at Bottom */}
  <button className="absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-blue-600 text-white px-6 py-2 rounded-lg transition-transform duration-300 group-hover:scale-105">
        Join Now
      </button>
</div>

  );
};

export default SocietyCard;
