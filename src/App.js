import './App.css';
// website pages:
import Body from './components/Body';
import Menu_page from './pages/menu_page/Menu_page';
import About_me_page from '../src/pages/about_me_page/About_me_page';

// functionalites to perform routing: switch through pages:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// routing: you move from one page to the other.



function App() {
  return (
    <Router>
      <Routes>
        {/* when the website is accessed, the main page is the Body component.
        url of landing page is: http://localhost:3000/(on local) */}
        <Route path="/"  element={<Body/>} />

        {/* in order to go to the menu, url has to switch to: http://localhost:3000/menu_page */}
        <Route path="/menu_page" element={<Menu_page/>}/>
       
        {/* in order to go to the about_me, url has to switch to: http://localhost:3000/about_me */}
        <Route path="/about_me_page" element={<About_me_page/>}/>
      </Routes>
    </Router>
  );
}

export default App;
