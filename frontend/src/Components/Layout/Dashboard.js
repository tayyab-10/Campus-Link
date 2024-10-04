import React from "react";
import Sidebar from "./Sidebar.js";
import { Link } from "react-router-dom";
import { Doughnut, Line,Bar} from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement,ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Mock data
  const totalSocieties = 10;
  const totalEvents = 20;
  const topSocieties = [
    { name: "Society 1", members: 50 },
    { name: "Society 2", members: 45 },
    { name: "Society 3", members: 40 },
  ];

  const societyMembersData = {
    labels: topSocieties.map(society => society.name),
    datasets: [
      {
        label: "Number of Members",
        backgroundColor: "#00A6B4",
        borderColor: "#007B8E",
        borderWidth: 2,
        data: topSocieties.map(society => society.members),
      },
    ],
  };

  const eventsData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Total Events",
        backgroundColor: "#FF6347",
        borderColor: "#FF4500",
        borderWidth: 2,
        data: [5, 8, 10, 7, 12, 6],
        fill: false,
      },
      {
        label: "Events Organized by Societies",
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C",
        borderWidth: 2,
        data: [3, 5, 7, 4, 8, 3],
        fill: false,
      },
    ],
  };
  const userEngagementData = {
    labels: ["Active Users", "New Users", "User Posts"],
    datasets: [
      {
        label: "User Engagement",
        backgroundColor: "#FF6347",
        borderColor: "#FF4500",
        borderWidth: 2,
        data: [150, 30, 120],
      },
    ],
  };
  
  // Mock data for upcoming events
  const upcomingEvents = [
    { name: "Tech Talk", date: "2024-10-01" },
    { name: "Sports Meet", date: "2024-10-15" },
    { name: "Music Fest", date: "2024-10-22" },
  ];
  

  const doughnutState = {
    labels: ["Societies", "Others"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [totalSocieties, 100 - totalSocieties], // Mock data for other categories
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] w-screen max-w-full absolute">
      <div className="w-56">
        <Sidebar />
      </div>
      <div className="bg-white border-l md:border-l-[1px] border-gray-200 py-12 px-4">
        <h1 className="text-[rgba(0,0,0,0.733)] font-light text-2xl md:text-[2rem] text-center w-1/2 p-2 mx-auto font-roboto">
          Dashboard
        </h1>

        <div className="my-8">
          <div className="flex justify-center bg-white">
            <p className="bg-[rgba(70,117,218,0.932)] text-white font-light text-[1.3rem] text-center p-6 w-full mx-8 md:mx-2 rounded-lg shadow-lg">
              Total Societies <br /> {totalSocieties}
            </p>
          </div>
        </div>


        {/* Top Societies */}
        <h1 className="flex items-center justify-center text-[2rem]">Top Societies</h1>
        <div className="flex justify-center">
          {topSocieties.map((society, index) => (
            <Link
              key={index}
              to={`/society/${society.name}`}
              className="text-white font-light text-2xl md:text-[2rem] text-center bg-yellow-400 no-underline p-6 w-[11vmax] h-[11vmax] m-8 md:m-2 rounded-full flex justify-center items-center flex-col shadow-lg"
            >
              {society.name} <br />
            </Link>
          ))}
        </div>
        {/* User Engagement Statistics */}
        <div className="w-4/5 mx-auto my-8">
          <h2 className="text-center text-xl font-semibold mb-4">User Engagement</h2>
          <Bar data={userEngagementData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.label}: ${context.raw}`,
                },
              },
            },
          }} />
        </div>

        {/* Upcoming Events */}
        <div className="w-4/5 mx-auto my-8">
          <h2 className="text-center text-xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="list-disc pl-8">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="my-2 text-lg">{event.name} - {event.date}</li>
            ))}
          </ul>
        </div>

        {/* Society Members Line Chart */}
        <div className="w-4/5 mx-auto my-8">
          <h2 className="text-center text-xl font-semibold mb-4">Society Members</h2>
          <Line data={societyMembersData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `Members: ${context.raw}`,
                },
              },
            },
          }} />
        </div>

        {/* Events Overview Line Chart */}
        <div className="w-4/5 mx-auto my-8">
          <h2 className="text-center text-xl font-semibold mb-4">Events Overview</h2>
          <Line data={eventsData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `Events: ${context.raw}`,
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          }} />
        </div>

        {/* Societies Distribution Doughnut Chart */}
        <div className="w-[30vmax] mx-auto my-8">
          <h2 className="text-center text-xl font-semibold mb-4">Societies Distribution</h2>
          <Doughnut data={doughnutState} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.label}: ${context.raw}`,
                },
              },
            },
          }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
