import './App.css';
// website pages:
import Body from './components/Body';
import Menu_page from './pages/menu_page/Menu_page';

// functionalites to perform routing: switch through pages:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// routing: you move from one page to the other.

// the context data Provider component,  for Card rendering:
import { CardContextProvider } from "./context/CardContext";
import { ScreenContextProvider } from "./context/ScreenSizeContext";

function App() {
  return (
    <Router>
      <Routes>
        {/* when the website is accessed, the main page is the Body component.
        url of landing page is: http://localhost:3000/(on local) */}

          {/* in order to go to the menu, url has to switch to: http://localhost:3000/menu_page */}
            <Route path="/" element={
              <ScreenContextProvider>
                <CardContextProvider>
                  <Menu_page/>
              </CardContextProvider>
              </ScreenContextProvider>
             }
            />
             <Route path="/about"  element={<Body/>} />
       
        {/* in order to go to the about_me, url has to switch to: http://localhost:3000/about_me */}
        {/* <Route path="/about_me_page" element={<About_me_page/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
