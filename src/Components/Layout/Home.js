import React from 'react';
import SocietyCard from '../Societies/Societycard';
import img1 from "../../Assets/Images/acm.jpg"; 
import founderImage from "../../Assets/Images/Profile.jpg";
import Navbar from "../Layout/navbar"
import leadImage1 from "../../Assets/Images/Profile.jpg"
const LandingPage = () => {
  
  const societies = [
    {
      name: 'Society Collaboration',
      founder: 'John Doe',
      description: 'A society for collaboration and communication between members. This society is one of the top societies of UET. This society has very beautiful environment like the people here are so good and kind specially the girls. The girls are really pretty and they have zero attitude',
      image: img1, // Just use the variable directly
      founderImage: founderImage, 
      facebook: "https://www.facebook.com/" , 
      twitter: "https://www.twitter.com/'",
      linkedin: "https://www.linkedin.com/",
      teamLeads: [
        { name: 'Jane Smith', image: leadImage1 }, 
        { name: 'Tom Brown', image: leadImage1 },
        { name: 'Sarah Johnson', image: leadImage1 }, 
        { name: 'Mike Lee', image: leadImage1 },
      ]
    },
    
  ];
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 lg:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {societies.map((society, index) => (
          <SocietyCard key={index} society={society} />
        ))}
      </div>
    </div>
    </>
  );
};

export default LandingPage;
