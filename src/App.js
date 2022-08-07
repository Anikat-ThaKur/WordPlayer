import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from 'react-router-dom'


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
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
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
      <Router>
      <Navbar title="Word Player" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/home">
            <TextForm showAlert={showAlert} heading="Word Player - Word Counter, Character Counter, Remove extra space" mode={mode} />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Redirect exact from="/WordPlayer" to="/home" />
        </Switch>
      </div>
      </Router>

    </>

  );
}

export default App;
