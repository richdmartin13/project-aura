import './App.css';
import React from 'react';

import './index.css';

import Agenda from './routes/Agenda';
import Customers from './routes/Customers';
import NotFound from './routes/NotFound';
import Overview from './routes/Overview';
import Products from './routes/Products';
import Settings from './routes/Settings';
import Wallet from './routes/Wallet';
import Webstore from './routes/Webstore';
import Workspace from './routes/Workspace';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { themes } from './config/theme';
import { SideBar } from './components/nav/Navigation';
import DarkToggle from './components/tools/DarkToggle';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  var theme = themes.retro;

  return (
    <div className="App" style={{ backgroundColor: darkMode ? theme.dark : theme.light, color: darkMode ? theme.light : theme.dark }}>
      <BrowserRouter>
      <SideBar
        bgColor={!darkMode ? theme.accent : theme.darkAccent }
        color={ darkMode ? theme.accent : theme.darkAccent }
        activeColor={ darkMode ? theme.light : theme.dark }
      >
        <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} color={darkMode ? theme.light : theme.dark} />
      </SideBar>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="workspace" element={<Workspace />} />
          <Route path="cms" element={<Webstore />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
