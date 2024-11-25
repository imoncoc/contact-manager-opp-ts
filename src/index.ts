class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
    public address: string
  ) {}

  updateDetails(name: string, email: string, phone: string, address: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  showDetails(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Address: ${this.address}`);
  }
}

class UserManager {
  private contacts: User[] = [];
  private nextId: number = 1;

  addContact(
    name: string,
    email: string,
    phone: string,
    address: string
  ): void {
    const contact = new User(this.nextId, name, email, phone, address);
    this.contacts.push(contact);
    this.nextId++;
  }

  editContact(
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string
  ): void {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (contact) {
      contact.updateDetails(name, email, phone, address);
    } else {
      console.log(`Contact with ID ${id} not found.`);
    }
  }

  showContact(id: number): void {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (contact) {
      contact.showDetails();
    } else {
      console.log(`Contact with ID ${id} not found.`);
    }
  }

  showAllContacts(): void {
    if (this.contacts.length === 0) {
      alert("No Contacts, Please add Some.");
    }
    this.contacts.forEach((contact) => contact.showDetails());
  }
}

const addNewContact = new UserManager();

addNewContact.showAllContacts();
addNewContact.addContact(
  "Imon",
  "imon@gmail.com",
  "01521325206",
  "Narayanganj"
);
addNewContact.addContact(
  "Tanmoy",
  "tanmoy@gmail.com",
  "0152100000",
  "Narayanganj"
);

addNewContact.showAllContacts();
addNewContact.showContact(1);

addNewContact.editContact(2, "Mynul", "mynul@gmail.com", "0133300000", "Dhaka");

addNewContact.showContact(2);
addNewContact.showAllContacts();
