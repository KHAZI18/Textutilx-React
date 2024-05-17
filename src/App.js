import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Developer from './component/Developer';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#435585'; //#000619 //#042743
      showAlert('Dark Mode Enabled', "Success!! ");
      document.title = 'Textutilx - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled", "Success!! ");
      document.title = 'Textutilx - Light Mode';
    }
  }

  return (
    <Router>
      <Navbar title="TextUtilx" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} /> 
      <div className="container my-3">
        <Routes>
          <Route path="/developer" element={<Developer/>} />
          <Route path="/" element={<TextForm title="Enter The Paragraphs" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
