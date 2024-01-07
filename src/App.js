import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Text from './components/Text';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? 'grey' : '';
    showAlert(`${newMode} mode has been enabled`, 'success');
    document.title = `TextUtils - ${newMode} Mode`;
  };

  return (
    // <Router>
      <>
        <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />
        {/* // <div className="container my-3" />
        // <Routes> */}
          {/* // <Route exact path="/about" element={<About />} /> */}
          {/* <Route  exact path="/" element={ */}
            <Text mode={mode} showAlert={showAlert}/>
    {/* //     </Routes> */}
      </>
    // </Router>
  );
}

export default App;
