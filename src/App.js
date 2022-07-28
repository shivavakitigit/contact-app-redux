import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Login from "./components/Login";
import Practice from "./components/Practice";
function App() {
  return (
    <div className="App">
      {/* <Practice></Practice> */}
      <Header />
      <Login></Login>
      {/* <Contacts /> */}
    </div>
  );
}

export default App;
