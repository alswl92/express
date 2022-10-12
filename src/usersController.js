import {v4 as uuid} from 'uuid';

let contacts = [];

export const getContacts = (req, res) => {
    res.send(contacts);
}

export const createContact = (req,res)=>{
    const contact = req.body;
    contacts.push({...contact, id: uuid()});
    res.send("User Added Successfully");
}

export const getContact = (req,res) => {
    const singleContact = contacts.filter((contact)=> contact.id === req.params.id);
    res.send(singleContact);
}

export const deleteContact=(req,res) => {
    contacts = contacts.filter((contact)=> contact.id !== req.params.id);
    res.send("Contact deleted successfully");
}

export const updateContact = (req,res) => {
    const contact = contacts.find((contact)=> contact.id === req.params.id);
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.address = req.body.address;
    res.send("User updated successfully");
}