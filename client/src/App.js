import './App.css';
import { BrowserRouter as Brouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';

function App() {

  return <div className="App">
    <Brouter>
    <Link to="/createuser">Add user</Link>
    <Link to="/">Home</Link>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createuser" element={<CreatePost/>} />
    </Routes>
    </Brouter></div>
}

export default App;
