"use strict";
class User {
    constructor(id, name, email, phone, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
    updateDetails(name, email, phone, address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
    showDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Address: ${this.address}`);
    }
}
class UserManager {
    constructor() {
        this.contacts = [];
        this.nextId = 1;
    }
    addContact(name, email, phone, address) {
        const contact = new User(this.nextId, name, email, phone, address);
        this.contacts.push(contact);
        this.nextId++;
    }
    editContact(id, name, email, phone, address) {
        const contact = this.contacts.find((contact) => contact.id === id);
        if (contact) {
            contact.updateDetails(name, email, phone, address);
        }
        else {
            console.log(`Contact with ID ${id} not found.`);
        }
    }
    showContact(id) {
        const contact = this.contacts.find((contact) => contact.id === id);
        if (contact) {
            contact.showDetails();
        }
        else {
            console.log(`Contact with ID ${id} not found.`);
        }
    }
    showAllContacts() {
        if (this.contacts.length === 0) {
            alert("No Contacts, Please add Some.");
        }
        this.contacts.forEach((contact) => contact.showDetails());
    }
}
const addNewContact = new UserManager();
addNewContact.showAllContacts();
addNewContact.addContact("Imon", "imon@gmail.com", "01521325206", "Narayanganj");
addNewContact.addContact("Tanmoy", "tanmoy@gmail.com", "0152100000", "Narayanganj");
addNewContact.showAllContacts();
addNewContact.showContact(1);
addNewContact.editContact(2, "Mynul", "mynul@gmail.com", "0133300000", "Dhaka");
addNewContact.showContact(2);
addNewContact.showAllContacts();
