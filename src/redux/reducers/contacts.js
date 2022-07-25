const globalState = {
  contacts: [
    { name: "Shiva", phoneNumber: "1234512345", email: "vshiva@gmail.com" },
    { name: "Sai", phoneNumber: "1234512345", email: "sai@gmai.com"},
    { name: "sushanth", phoneNumber: "78878787", email: "sushanth@gmai.com"},

  ],
  contact: {},
};
export const contactsReducer = (state = globalState, action) => {
  debugger;
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACT": {
      let contacts = [...state.contacts];  //previous Data
      contacts.push(action.payload);  //update data
      return { ...globalState, contacts };  
    }

    case "REGISTER":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
      };

    case "EDIT_CONTACT": {
      let contacts = [...state.contacts];
      contacts[action.id] = action.payload;
      return { ...state, contacts };
    }
    case "DELETE_CONTACT": {
      let contacts = [...state.contacts];
      contacts.splice(action.id, 1);
      return { ...state, contacts };
    }
    case "GET_SINGLE_CONTACT":
      return {
        ...state,
        contact: { ...state.contacts[action.index], id: action.index },
      };
    case "FILTER_CONTACTS": {
      let contacts = [...state.contacts];
      let filteredContacts = contacts.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .indexOf(action.searchInput.toLowerCase()) !== -1
      );
      return { ...state, contacts: filteredContacts };
    }
    default:
      return state;
  }
};
