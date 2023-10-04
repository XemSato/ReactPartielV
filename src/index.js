import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Nav.css';
import './Style.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import News from './Pages/News';
import About from './Pages/About';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import Nav from './Components/Nav';
import Accueil from './Pages/Accueil';
import NotFoud from './Pages/NotFoud';
import Valeurs from './Components/Valeurs';
import Missions from './Components/Missions';
import Chiffres from './Components/Chiffres';
import NewsDetails from './Pages/NewsDetails';
import Login from './Pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Accueil/>}/>
        <Route path='/About' element={<About/>}>
            <Route path='nos-missions' element={<Missions/>}/>
            <Route path='nos-valeurs' element={<Valeurs/>}/>
            <Route path='nos-chiffres' element={<Chiffres/>}/>
        </Route>
        <Route path='/News/' element={<News/>}/>
        <Route path='/News/:slug' element={<NewsDetails/>}/>
        <Route path='/Faq' element={<Faq/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path="*" element={<NotFoud/>}/>
      </Routes>
      
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
