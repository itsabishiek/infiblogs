import { ThemeProvider } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import darkTheme from "../components/MuiTheme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
