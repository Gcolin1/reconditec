import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';  

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" exact element={<Login />} />
    </Routes>
  );
}

export default App;
