
import './App.css';
import AppRouter from './config/router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './screen/Home';
import { BrowserRouter } from 'react-router-dom';
// import SignUp from './screen/SignUp';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <div>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    
    
   </div>
  );
}

export default App;
