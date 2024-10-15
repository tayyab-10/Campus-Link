const Event = require("../Model/EventModel");

// CREATE a new event in a society
exports.createEvent = async (req, res) => {
  try {
    const societyId = req.params.societyId;
    const { name, eventType, dateOfEvent } = req.body;

    const newEvent = new Event({
      societyId,
      name,
      eventType,
      dateOfEvent,
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};

// GET all events for a society
exports.getEventsForSociety = async (req, res) => {
  try {
    const societyId = req.params.societyId;
    const events = await Event.find({ societyId });

    if (!events || events.length === 0) {
      return res
        .status(404)
        .json({ message: "No events found for this society" });
    }

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

// UPDATE an event
exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const updates = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(eventId, updates, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res
      .status(200)
      .json({ message: "Event updated successfully", updatedEvent });
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

// DELETE an event
exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const event = await Event.findByIdAndDelete(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};
