
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavbarCom from './Component/Navbar/NavbarCom';
import Home from './Component/Navbar/Home';
import About from './Component/About';
import Blog from './Component/Navbar/Blog';
import Contect from './Component/Navbar/Contect';
import More from './Component/Navbar/More';
import { ThemeContext } from './Component/ThemeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light")
  const changeHandle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={theme} >
      <div className={theme} >
        <button onClick={changeHandle} className={theme}>changeTheme</button>
        <BrowserRouter >
          <NavbarCom />



          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Contect' element={<Contect />} />
            <Route path='/More' element={<More />} />




          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>


  );
}

export default App;
