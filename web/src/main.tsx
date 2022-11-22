import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import TabProvider from "./providers/TabProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <TabProvider>
        <ThemeProvider>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </TabProvider>
    </VisibilityProvider>
  </React.StrictMode>
);
