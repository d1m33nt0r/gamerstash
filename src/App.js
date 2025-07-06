import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameSections from './components/GameSections';
import theme from './components/Theme';
import Header from './components/Header';
import Company from './components/Company';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy'; 

const Home = () => (
  <>
    <Header />
    <Company id="home" />
    <GameSections id="games" />
    <Footer />
  </>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/gamerstash">
        <div className="background-animation" />
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            background: 'linear-gradient(197deg, #222, #333 )',
            maskImage: 'radial-gradient(circle, transparent 0%, black 100%)',
            WebkitMaskImage: 'radial-gradient(circle, transparent 0%, black 100%)',
            backdropFilter: 'blur(8px)',
            zIndex: -1,
          }}
        />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
