import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { AppState } from "./store";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BetSlip from "./components/betSlip/betSlip";
import { EventComponent } from "./components/eventList/eventList";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [changeCurrentColor, setCurrentColor] = useState(false);
  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
    setCurrentColor(!changeCurrentColor);
  }, [setCurrentColor,setIsMobileDrawerOpen,changeCurrentColor]);
  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);
  
  const bets = useSelector((state: AppState) => state.bets);
  const events = useSelector((state: AppState) => state.events.events);

  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6">              
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMobileDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <BetSlip open={isMobileDrawerOpen} betItems={bets.bets} onClose={handleMobileDrawerClose}/>
        <EventComponent events={events} onClose={handleMobileDrawerOpen} betDeleteClicked={bets.betDeleteClicked} betIdClicked={bets.betIdClicked}/>
    </div>
  );
};

export default App;
