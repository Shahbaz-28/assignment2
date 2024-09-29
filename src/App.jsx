import { Routes, Route } from "react-router-dom";
import "./App.css";
// import MasterForm from "./components/task1/MasterForm";
import MasterCreateAccount from "./components/task2/MasterCreateAccount";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MasterForm />} /> */}
        <Route path="/" element={<MasterCreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
