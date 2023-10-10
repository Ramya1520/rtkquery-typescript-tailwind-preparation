import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Counter from "./Components/counter";
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";
import Signup from "./Components/Signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <Counter /> */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
