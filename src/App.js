import Navbar from './components/Navbar';
import Text from './components/Text'
import React,{useState} from 'react'
import './App.css';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null)
  
  const showAlert = (message,type)=>{
    setAlert({
    msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled","succes")
      document.title = 'TextUtils - dark Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = "";
      showAlert("light mode has been enabled","succes")
      document.title = 'TextUtils - light Mode';
    }
  }
  return (
   <>
   <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}  mode = {mode}/>
   <div className = "container my-3"/>
   <Text  mode = {mode} showAlert = {showAlert}/>
   </>
  );
}

export default App;