import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
        {/* {<Router>} */}
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
      
         {/*<About  mode={mode} */}
         <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" showAlert={showAlert}  mode={mode}/>
               
          </div>
           </>
    
  );
}

export default App;