import React, { useState } from "react";
import { Header, Sidebar, Feed, Rightside, Add } from "../components/index";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
const Homepage = () => {
  const [mode, setMode] = useState("dark");
  const currentTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={currentTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightside />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default Homepage;
