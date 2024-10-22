// Import necessary modules
const Society = require("../Model/SocietyModel");
const SocietyMember = require("../Model/SocietyMember");

// CREATE a new Society
exports.createSociety = async (req, res) => {
  const userID = req.user._id;
  try {
    const { name, email, description, social_links } = req.body;
    const parsedSocialLinks = JSON.parse(social_links);
    const foundSociety = await Society.findOne({ email });
    if (foundSociety) {
      return res
        .status(400)
        .json({ message: "Society with this email already exists" });
    }
    const newSociety = new Society({
      founder: userID,
      name,
      email,
      description,
      picture: req.filesUploaded[0].url,
      social_links:parsedSocialLinks,
    });

    await newSociety.save();
    res
      .status(201)
      .json({ message: "Society created successfully", newSociety });
  } catch (error) {
    res.status(500).json({ message: "Error creating society", error });
  }
};

// GET Society by ID (fetch society data)
exports.getSocietyById = async (req, res) => {
  try {
    const societyId = req.params.id;
    const society = await Society.findById(societyId)
      .populate("founder") // if the founder is linked to a user
      .populate("socialLinks") // if social media links are in a separate model
      .exec();

    if (!society) {
      return res.status(404).json({ message: "Society not found" });
    }

    res.status(200).json(society);
  } catch (error) {
    res.status(500).json({ message: "Error fetching society", error });
  }
};

// UPDATE Society Information
exports.updateSociety = async (req, res) => {
  try {
    const societyId = req.params.id;
    let updates = req.body; // Allow partial updates
    updates = {
      ...updates,
      picture: req.filesUploaded[0].url,
    };
    const updatedSociety = await Society.findByIdAndUpdate(societyId, updates, {
      new: true,
    });

    if (!updatedSociety) {
      return res.status(404).json({ message: "Society not found" });
    }

    res
      .status(200)
      .json({ message: "Society updated successfully", updatedSociety });
  } catch (error) {
    res.status(500).json({ message: "Error updating society", error });
  }
};

// DELETE Society
exports.deleteSociety = async (req, res) => {
  try {
    const societyId = req.params.id;

    const society = await Society.findByIdAndDelete(societyId);

    if (!society) {
      return res.status(404).json({ message: "Society not found" });
    }

    res.status(200).json({ message: "Society deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting society", error });
  }
};

// LIST all Societies (for admin or search)
exports.getAllSocieties = async (req, res) => {
  try {
    const societies = await Society.find().populate("founder");
    res.status(200).json(societies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching societies", error });
  }
};

// ADD a new member to society
exports.addMemberToSociety = async (req, res) => {
  try {
    const { societyId, userId } = req.params.societyId;
    const { role } = req.body;

    const newMember = new SocietyMember({
      societyId,
      userId,
      role,
      dateOfJoining: Date.now(),
    });

    await newMember.save();
    res
      .status(201)
      .json({ message: "Member added to society successfully", newMember });
  } catch (error) {
    res.status(500).json({ message: "Error adding member to society", error });
  }
};

// GET members of a society
exports.getMembersOfSociety = async (req, res) => {
  try {
    const societyId = req.params.societyId;
    const members = await SocietyMember.find({ societyId })
      .populate("userId") // Populate the user details
      .populate("role") // if roles are stored in another table
      .exec();

    if (!members || members.length === 0) {
      return res
        .status(404)
        .json({ message: "No members found for this society" });
    }

    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: "Error fetching members", error });
  }
};

// REMOVE a member from society
exports.removeMemberFromSociety = async (req, res) => {
  try {
    const societyId = req.params.societyId;
    const memberId = req.params.memberId;

    const member = await SocietyMember.findOneAndDelete({
      societyId,
      userId: memberId,
    });

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res
      .status(200)
      .json({ message: "Member removed from society successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error removing member", error });
  }
};
