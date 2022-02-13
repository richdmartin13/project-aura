import '../App.css';
import React from 'react';
import { settings } from '../config/settings_cfg';
import { themesArr, themes } from '../config/theme';

function Settings(props) {
  const themesList = themesArr.map((theme) => 
      <button onClick={() => props.setTheme(theme)} key={theme.light}
      style={{
        backgroundColor: 'transparent', borderColor: props.color, color: props.color, borderRadius: '10px',
        padding: '10px 20px', minWidth: '270px',
        display: 'flex', flexFlow: 'row-reverse nowrap', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'flex-start'}}>
          <div style={{backgroundColor: theme.light, width: '16px', height: '16px', borderRadius: '4px', margin: '5px', border: '1px solid #fff', borderColor: theme.primary,}}></div>
          <div style={{backgroundColor: theme.accent, width: '16px', height: '16px', borderRadius: '4px', margin: '5px', border: '1px solid #fff', borderColor: theme.primary}}></div>
          <div style={{backgroundColor: theme.primary, width: '16px', height: '16px', borderRadius: '4px', margin: '5px', border: '1px solid #fff', borderColor: theme.primary}}></div>
          <div style={{backgroundColor: theme.darkAccent, width: '16px', height: '16px', borderRadius: '4px', margin: '5px', border: '1px solid #fff', borderColor: theme.primary}}></div>
          <div style={{backgroundColor: theme.dark, width: '16px', height: '16px', borderRadius: '4px', margin: '5px', border: '1px solid #fff', borderColor: theme.primary}}></div>
        </div>
        <div style={{width: 0, height: '18px', border: '0.6px solid #fff', borderColor: props.color, margin: "6px 0px"}}></div>
        <h3 style={{margin: 0, textAlign: 'start', marginLeft: "4px", width: '70px'}}>{theme.key.toUpperCase()}</h3>
      </button>
  )

  return (
    <div style={{
      display: 'flex',
      flexFlow: 'column nowrap', alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%'
    }}>

      <h4 style={{textTransform: 'uppercase'}}>Theme Selection</h4>
      <div className='themeList'>
        {themesList}
      </div>

    </div>
  );
}

export default Settings;