// Import necessary modules
const Society = require('../Model/SocietyModel');
const Event = require('../Model/EventModel');
// const User = require('../models/User');
// const Channel = require('../models/Channel');
const SocietyMember = require('../Model/SocietyMember');
// const Post = require('../models/Post');

// CREATE a new Society
exports.createSociety = async (req, res) => {
    const userID = req.user._id; 
    console.log("The userid is",userID)
  try {
    const { name, founder, email, password, description, banner } = req.body;

    // Create a new Society document
    const newSociety = new Society({
      userID,
      name,
      founder,
      email,
      password, // ideally should be hashed
      description,
      banner
    });

    await newSociety.save();
    res.status(201).json({ message: 'Society created successfully', newSociety });
  } catch (error) {
    res.status(500).json({ message: 'Error creating society', error });
  }
};

// GET Society by ID (fetch society data)
exports.getSocietyById = async (req, res) => {
  try {
    const societyId = req.params.id;
    const society = await Society.findById(societyId)
      .populate('founder') // if the founder is linked to a user
      .populate('socialLinks') // if social media links are in a separate model
      .exec();

    if (!society) {
      return res.status(404).json({ message: 'Society not found' });
    }

    res.status(200).json(society);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching society', error });
  }
};

// UPDATE Society Information
exports.updateSociety = async (req, res) => {
  try {
    const societyId = req.params.id;
    const updates = req.body; // Allow partial updates

    const updatedSociety = await Society.findByIdAndUpdate(societyId, updates, { new: true });

    if (!updatedSociety) {
      return res.status(404).json({ message: 'Society not found' });
    }

    res.status(200).json({ message: 'Society updated successfully', updatedSociety });
  } catch (error) {
    res.status(500).json({ message: 'Error updating society', error });
  }
};

// DELETE Society
exports.deleteSociety = async (req, res) => {
  try {
    const societyId = req.params.id;

    const society = await Society.findByIdAndDelete(societyId);

    if (!society) {
      return res.status(404).json({ message: 'Society not found' });
    }

    res.status(200).json({ message: 'Society deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting society', error });
  }
};

// LIST all Societies (for admin or search)
exports.getAllSocieties = async (req, res) => {
  try {
    const societies = await Society.find().populate('founder');
    res.status(200).json(societies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching societies', error });
  }
};


// CREATE a new event in a society
exports.createEvent = async (req, res) => {
    try {
      const societyId = req.params.societyId;
      const { name, eventType, dateOfEvent } = req.body;
  
      const newEvent = new Event({
        societyId,
        name,
        eventType,
        dateOfEvent
      });
  
      await newEvent.save();
      res.status(201).json({ message: 'Event created successfully', newEvent });
    } catch (error) {
      res.status(500).json({ message: 'Error creating event', error });
    }
  };
  
  // GET all events for a society
  exports.getEventsForSociety = async (req, res) => {
    try {
      const societyId = req.params.societyId;
      const events = await Event.find({ societyId });
  
      if (!events || events.length === 0) {
        return res.status(404).json({ message: 'No events found for this society' });
      }
  
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching events', error });
    }
  };
  
  // UPDATE an event
  exports.updateEvent = async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const updates = req.body;
  
      const updatedEvent = await Event.findByIdAndUpdate(eventId, updates, { new: true });
  
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      res.status(200).json({ message: 'Event updated successfully', updatedEvent });
    } catch (error) {
      res.status(500).json({ message: 'Error updating event', error });
    }
  };
  
  // DELETE an event
  exports.deleteEvent = async (req, res) => {
    try {
      const eventId = req.params.eventId;
  
      const event = await Event.findByIdAndDelete(eventId);
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting event', error });
    }
  };

  

  // ADD a new member to society
exports.addMemberToSociety = async (req, res) => {
    try {
      const societyId = req.params.societyId;
      const { userId, role } = req.body;
  
      const newMember = new SocietyMember({
        societyId,
        userId,
        role,
        dateOfJoining: Date.now()
      });
  
      await newMember.save();
      res.status(201).json({ message: 'Member added to society successfully', newMember });
    } catch (error) {
      res.status(500).json({ message: 'Error adding member to society', error });
    }
  };
  
  // GET members of a society
  exports.getMembersOfSociety = async (req, res) => {
    try {
      const societyId = req.params.societyId;
      const members = await SocietyMember.find({ societyId })
        .populate('userId') // Populate the user details
        .populate('role') // if roles are stored in another table
        .exec();
  
      if (!members || members.length === 0) {
        return res.status(404).json({ message: 'No members found for this society' });
      }
  
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching members', error });
    }
  };
  
  // REMOVE a member from society
  exports.removeMemberFromSociety = async (req, res) => {
    try {
      const societyId = req.params.societyId;
      const memberId = req.params.memberId;
  
      const member = await SocietyMember.findOneAndDelete({ societyId, userId: memberId });
  
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }
  
      res.status(200).json({ message: 'Member removed from society successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error removing member', error });
    }
  };
  
