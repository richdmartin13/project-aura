import './App.css';
import React from 'react';

import './index.css';

import NotFound from './routes/NotFound';
import Overview from './routes/Overview';
import Settings from './routes/Settings';
import Login from './routes/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { themes } from './config/theme';
import { SideBar, NavBar } from './components/nav/Navigation';
import DarkToggle from './components/tools/DarkToggle';
import LogoutButton from './components/tools/LogoutButton';

function App() {
  var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkMode, setDarkMode] = React.useState(sysDark)
  const [theme, setTheme] = React.useState(themes.monoGreen)
  const [name, setName] = React.useState('Richard')
  const [sidebarPos, setSidebarPos] = React.useState('left')

  const AUTH = {
    client_id: 'a963af2b9726410ea479d5b6f07e0675',
    redirect_uri: 'http://localhost:3000',
    auth_url: 'https://accounts.spotify.com/authorize',
    scope: 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state',
    response_type: 'token'
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setDarkMode(e.matches)
  })

  return (
    <div className="App" style={{ backgroundColor: darkMode ? theme.dark : theme.light, color: darkMode ? theme.light : theme.dark, position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }}>
      <BrowserRouter>
        {!window.localStorage.token ? null :
          <SideBar
            bgColor={!darkMode ? theme.accent : theme.darkAccent}
            color={darkMode ? theme.accent : theme.darkAccent}
            activeColor={theme.primary}
            initials={name.substring(0, 1)}
            position={sidebarPos}
            setSidebarPos={setSidebarPos}
          >
            {/* <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} color={darkMode ? theme.light : theme.dark} /> */}
          </SideBar>}
        <NavBar
          bgColor={darkMode ? theme.dark : theme.light}
          color={darkMode ? theme.light : theme.dark}
          activeColor={darkMode ? theme.light : theme.dark}
        >
          <div style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <LogoutButton color={darkMode ? theme.light : theme.dark} visible={window.localStorage.token}/>
          <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} color={darkMode ? theme.light : theme.dark} />
          </div>
        </NavBar>
        <div className='container'>
          <Routes>
            <Route path="/" element={
              !window.localStorage.token ? <Login auth={AUTH} color={theme.primary}/> : <Overview />
              } />
            <Route path="/ads" element={
              <Overview/>
            }/>
            <Route path="/playlists" element={
              <Overview/>
            }/>
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
