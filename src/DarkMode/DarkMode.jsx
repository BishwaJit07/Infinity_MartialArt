import React from "react";
import Moon from './Moon.svg';
import Sun from './Sun.svg';
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode =()=>{
        document.querySelector('html').setAttribute('data-theme','night')
    }
    const setLightMode =()=>{
        document.querySelector('html').setAttribute('data-theme','light')
    }

    const toggleTheme = e=>{
    if(e.target.checked) setDarkMode();
    else setLightMode();
    }
    return (
        <div className='dark_mode'>
        <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <div className="sun-icon">
                    <img src={Sun} alt="Sun" />
                </div>
                <div className="moon-icon">
                    <img src={Moon} alt="Moon" />
                </div>
            </label>
    </div>
    );
};

export default DarkMode;
