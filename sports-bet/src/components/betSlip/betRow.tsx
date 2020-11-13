import React, { useCallback } from "react";
import { Card, Button } from "@material-ui/core";
import { Bet } from "../../model/bet";
import { removeBet } from "../../store/actions/actions";
import { useDispatch } from "react-redux";
import styles from "./betSplit.module.scss";

interface BetRowProps {
    bet: Bet;
  }
const BetRow : React.FC<BetRowProps> = bet => {
    const dispatch = useDispatch();
  
    const handleMobileDrawerOpen = useCallback(() => {
      dispatch(removeBet(bet.bet.id));
    }, [dispatch,bet]);
    
  return (
    <Card className={styles.card}>
      <div className={styles.eventTitle}>{bet.bet.name}</div> 
      <div className={styles.eventTitle}>{bet.bet.price}</div>
      <div className={styles.eventTitle}><Button onClick={handleMobileDrawerOpen}>Delete</Button></div>
    </Card>
    );
  };
  
  export default BetRow;