import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../layout";
import Swal from "sweetalert2";

const darkAlert = (theme) => {
  if (theme === "light") {
    Swal.fire({
      icon: 'info',
      title: 'Esta opción está en desarrollo',
      text: 'El modo oscuro aún no está optimizado, disculpen las molestias ocasionadas.',
    })
  }
};

export const SwitchLight = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
    darkAlert(theme); 
  };

  return (
    <div className="switch ms-4 mt-2 me-3">
      <label className="mode me-2 switch">
        {theme === "light" ? (
          <i className="fa-regular fa-lightbulb" />
        ) : (
          <i className="fa-solid fa-lightbulb" />
        )}
      </label>
      <ReactSwitch
        onChange={handleToggleTheme}
        checked={theme === "dark"}
        className="switch"
        checkedIcon={null}
        uncheckedIcon={null}
        onColor="#200000"
        
        
      />
    </div>
  );
};
