import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
     <li><Link to="/Main">Main Page</Link></li>
     <li><Link to="/Login">Login</Link></li>
     <Routes>
      <Route path="/Main" element={<Main />}/>
      <Route path="*" element={<Error />}/>
      <Route path="/Login" element={<Login />}/>
      </Routes>
    </div>
   
  );
  }

export default App;
