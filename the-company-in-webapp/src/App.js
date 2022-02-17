import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Form/>}/>
            </Routes>
        </Router>
     </div>
  );
}

export default App;
