import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {
    alert("Me configure");
  },
  toggleMode: () => {
    alert("Me configure");
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);

  function toggleMode() {
    mode == "dark" ? setMode("light") : setMode("dark");
  }

  return (
    <ColorModeContext.Provider value={{ mode: mode, toggleMode: toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
