import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import TabProvider from "./providers/TabProvider";

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
        <GlobalStyle />
        <App />
      </TabProvider>
    </VisibilityProvider>
  </React.StrictMode>
);
