const globalState = {
    login: [{
        email:"keethi@gmail.com",
        password:1234234
    }]
  };
  export const LoginReducer = (state = globalState, action) => {
    debugger;
    switch (action.type) {
      case "loginCred": {
        let initialData = [...state.login];  //previous Data
        initialData.push(action.data);  //update data
        return { ...globalState, initialData  };  
      }
  
      case "intialValues":
        return {...state}

      default:
        return {...state};
    }
  };
  