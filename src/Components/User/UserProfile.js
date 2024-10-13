import React from "react";
import Sidebar from "./Sidebar";
import ProfileHeader from "../Reuseable Components/UserProfileHeader";
import TaskList from "../Reuseable Components/TaskList";
import SocietiesList from "../Reuseable Components/SocietyList";
import EventList from "../Reuseable Components/EventsList";
import Calendar from "../Reuseable Components/Calender";

const UserProfile = () => {
  const todoTasks = [
    "Create Posters for supporting Hackathon",
    "Brainstorm ideas for next event",
    "Contact Electrical Engineering department for inductions",
    "Arrange refreshments for seminar",
    "Arrange venue for welcome party"
  ];

  const doneTasks = [
    "Finalize guest speaker for seminar",
    "Reserve conference room",
    "Send out invitations"
  ];

  const societies = [
    "Software Square - General Member",
    "MiSA Society - Campus Lead",
    "UET Science Society"
  ];

  const events = [
    { name: "Software Square - Data Science Seminar", date: "15-10-24" },
    { name: "MLSA Society - Annual Get Together", date: "20-10-24" }
  ];

  return (
    <div className="flex flex-row bg-gray-100 min-h-screen">
      <div className="h-96">
        <Sidebar />
      </div>
      <div className="flex-1 p-8">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
          <ProfileHeader
            name="Ashhad Mazhar"
            department="Department of Computer Science"
            imageSrc="path/to/your/profile-image.jpg"
          />
          <div className="w-full mb-6">
            <div className="flex justify-between">
              <TaskList title="TO DO" tasks={todoTasks} />
              <TaskList title="Done Tasks" tasks={doneTasks} />
            </div>
          </div>
          <div className="w-full mb-6">
            <SocietiesList societies={societies} />
          </div>
          <EventList events={events} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
