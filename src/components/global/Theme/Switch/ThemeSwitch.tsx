import React, { useState } from "react";
import "./ThemeSwitch.css";

interface IToggle {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ThemeSwitch: React.FC<IToggle> = ({ checked, onChange}) => {

  return (
    <label className="theme-switch">
      <div className="moon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="moon"
        >
          <path
            d="M21 13.9066C19.805 14.6253 18.4055 15.0386 16.9095 15.0386C12.5198 15.0386 8.9612 11.4801 8.9612 7.09034C8.9612 5.59439 9.37447 4.19496 10.0931 3C6.03221 3.91866 3 7.5491 3 11.8878C3 16.9203 7.07968 21 12.1122 21C16.451 21 20.0815 17.9676 21 13.9066Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div className="sun">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sun"
        >
          <path
            d="M12 23V22M4.22183 19.7782L4.92893 19.0711M1 12H2M4.22183 4.22183L4.92893 4.92893M12 2V1M19.0711 4.92893L19.7782 4.22183M22 12H23M19.0711 19.0711L19.7782 19.7782M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <input
        type="checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        checked={checked}
        onChange={(e) => onChange(e.data.checked)}
      />
      <div className="theme-switch__slider"></div>
    </label>
  );
};

export { ThemeSwitch };
