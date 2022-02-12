import '../App.css';
import React from 'react';
import { themes } from '../config/theme';
import { SideBar } from '../components/nav/Navigation';
import DarkToggle from '../components/tools/DarkToggle';

function Workspace() {
  const [darkMode, setDarkMode] = React.useState(true)
  const [activeIndex, setActiveIndex] = React.useState(0)
  var theme = themes.retro;

  return (
    <div>
    
    </div>
  );
}

export default Workspace;