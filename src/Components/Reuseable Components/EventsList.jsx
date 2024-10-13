// EventList.js
import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="w-full bg-gray-50 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4">UPCOMING EVENTS</h3>
      <div className="w-full pr-2 bg-gray-100 rounded-lg p-4 mr-3">
        <h4 className="text-lg font-medium mb-4 text-gray-400">Events</h4>
        <ul className="list-none mb-4">
          {events.map((event, index) => (
            <div key={index} className="border bg-white rounded-lg mt-2">
              <li className="w-full py-2 ml-3">{event.name}</li>
              <li className="py-1 ml-3">{event.date}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
