const Contact = require('../models/contactModel');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 }); 
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete contact' });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts,
  deleteContact
};
