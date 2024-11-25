declare class User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    constructor(id: number, name: string, email: string, phone: string, address: string);
    updateDetails(name: string, email: string, phone: string, address: string): void;
    showDetails(): void;
}
declare class UserManager {
    private contacts;
    private nextId;
    addContact(name: string, email: string, phone: string, address: string): void;
    editContact(id: number, name: string, email: string, phone: string, address: string): void;
    showContact(id: number): void;
    showAllContacts(): void;
}
declare const addNewContact: UserManager;
