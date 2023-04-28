import React from "react";
import "./App.css";
import { DAppProvider, ChainId } from "@usedapp/core";
import { Header } from "./components/Header";
import Container from "@mui/material/Container";
import { Main } from "./components/Main";
import { ThemeProvider } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <DAppProvider
        config={{
          supportedChains: [ChainId.Sepolia, 1337],
        }}
      >
        <Header />
        <Container maxWidth="sm">
          <Main />
        </Container>
      </DAppProvider>
    </ThemeProvider>
  );
}

export default App;
