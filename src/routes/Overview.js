import '../App.css';
import React from 'react';
import { themes } from '../config/theme';
import { SideBar } from '../components/nav/Navigation';
import DarkToggle from '../components/tools/DarkToggle';

function Overview() {
  const [darkMode, setDarkMode] = React.useState(true)
  const [activeIndex, setActiveIndex] = React.useState(0)
  var theme = themes.retro;

  return (
    <div style={{ marginLeft: "62px", display: "flex", alignItems: "flex-start", justifyContent: 'flex-start' }}>
      <h2>Overview</h2>
    </div>
  );
}

export default Overview;