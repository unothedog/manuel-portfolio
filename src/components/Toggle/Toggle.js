import React, { useContext } from 'react';
import './Toggle.css';
import { themeContext } from '../../Context';
import Switch from '@mui/material/Switch';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: 'toggle' });
  };
  const label = { inputProps: { 'aria-label': 'Dark Mode' } };

  return (
    <div className="toggle" onClick={handleClick}>
      <Switch {...label} />

      <div
        className="t-button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default Toggle;
