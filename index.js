const contacts = require("./contacts")
const argv = require("yargs").argv;




// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsAll = await contacts.listContacts()
      console.table(contactsAll);
      break;

    case "get":
        const oneContact = await contacts.getContactById(id)
        console.table(oneContact);
      break;

    case "add":
        const newContact = await contacts.addContact(name,email,phone) 
        console.table(newContact);

      break;

    case "remove":
        const deletContact = await contacts.removeContact(id)
        console.table(deletContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);