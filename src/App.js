import './App.css';
import React from 'react';

import './index.css';

import Messaging from './routes/Messaging';
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
import { SideBar, NavBar } from './components/nav/Navigation';
import DarkToggle from './components/tools/DarkToggle';

function App() {
  var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkMode, setDarkMode] = React.useState(sysDark)
  const [theme, setTheme] = React.useState(themes.monoBlue)
  const [name, setName] = React.useState('Richard')
  const [sidebarPos, setSidebarPos] = React.useState('left')

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setDarkMode(e.matches)
  })

  return (
    <div className="App" style={{ backgroundColor: darkMode ? theme.dark : theme.light, color: darkMode ? theme.light : theme.dark, position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }}>
      <BrowserRouter>
      <SideBar
        bgColor={!darkMode ? theme.accent : theme.darkAccent }
        color={ darkMode ? theme.accent : theme.darkAccent }
        activeColor={ theme.primary }
        initials={ name.substring(0, 1)}
        position={sidebarPos}
        setSidebarPos={setSidebarPos}
      >
        {/* <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} color={darkMode ? theme.light : theme.dark} /> */}
      </SideBar>
      <NavBar
      bgColor={darkMode ? theme.dark : theme.light }
      color={ darkMode ? theme.light : theme.dark }
      activeColor={ darkMode ? theme.light : theme.dark }
       >
         <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} color={darkMode ? theme.light : theme.dark} />
       </NavBar>
       <div className='container'>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="workspace" element={<Workspace />} />
          <Route path="webstore" element={<Webstore />} />
          <Route path="messaging" element={<Messaging />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers 
            bgColor={!darkMode ? theme.accent : theme.darkAccent}
            color={darkMode ? theme.accent : theme.darkAccent}/>} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="settings" element={
            <Settings 
              setTheme={setTheme}
              setName={setName}
              bgColor={!darkMode ? theme.accent : theme.darkAccent}
              color={darkMode ? theme.accent : theme.darkAccent}
            />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
