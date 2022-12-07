import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Menu/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";

// Esquema de cores para os temas claro e escuro
const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

// Wrapper dara o contexto do Provider e passará para os "children"
function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"light"}>
      {props.children}
    </ColorModeProvider>
  );
}

// Componente raiz do projecto e com o ThemeProvider para settar o contexto do thema
function Root({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo />
    </ThemeProvider>
  );
}

// Componente que será exportado para inciar aplicação
export default function _App(props) {
  return (
    <ProviderWrapper>
      <Root {...props} />
    </ProviderWrapper>
  );
}
