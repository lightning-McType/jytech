import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ShowUser from "./components/ShowUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/show" element={<ShowUser />} />
      </Routes>
    </>
  );
}

export default App;
