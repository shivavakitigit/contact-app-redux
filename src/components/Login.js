import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {

  const [state, setState] = useState({});

  const initialData = useSelector(globalState => globalState.login);
  console.log("jshdfjs", initialData)
  const dispatch = useDispatch();
  // const instName = "Instagram";
  // const instaCredentiqls = {
  //     email: ' ',
  //     password:
  // };

  // const button = "Button";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // state[name] = value;
    setState(values => ({...values,[name]:value}));

 
    // const previousData = ...
  };

  const handleSubmit = () => {
   console.log(state);
   const arr = []
   arr.push(state);
   dispatch({type:"loginCred", data:[state]})
  };

useEffect(() => {
 dispatch({type:'intialValues'})
//  dispatch({type:'GET_ALL_CONTACTS'})
}, [])



  return (
    <React.Fragment>
      <div>Login</div>
      Email
      <input type="text" name="email" onChange={handleChange} />
      <br />
      Password
      <input type="password" name="password" onChange={handleChange} />
      <br />
      <button type="button" onClick={handleSubmit}>
        {" "}
        Login{" "}
      </button>
     <br/>


      { 
       initialData.length > 0 && initialData.map(globalState=>{
        const {email,password} = globalState
            return (
                <>
                {email}
                {password}
                <br/>
                </>
            )
        })
    }
    
    </React.Fragment>
  );
}

export default Login;
