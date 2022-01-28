import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Routes, Route, useLocation } from "react-router-dom";
import { AboutPage, Main, ProjectsPage } from "./components";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH } from "./constants";
import { AnimatePresence } from "framer-motion";
import { MusicPlayer } from "./atoms";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence>
          <MusicPlayer />
          <Routes location={location} key={location.key}>
            <Route exact path={HOME_PATH} element={<Main />} />
            <Route exact path={ABOUT_PATH} element={<AboutPage />} />
            <Route exact path={PROJECTS_PATH} element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
