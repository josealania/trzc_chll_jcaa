import React, { useCallback } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Drawer, IconButton, ListItem, ListItemIcon, Toolbar, Card, Button } from "@material-ui/core";
import { Bet } from "../../model/bet";
import { removeBet } from "../../store/actions/actions";
import { useDispatch } from "react-redux";
import styles from "./betSplit.module.scss";

interface BetListProps {
  betItems: Bet[];
  open: boolean;
  onClose: any;
}
const BetSlip: React.FC<BetListProps> = props => {

  return (
    <>
    <Drawer variant="temporary" open={props.open} anchor="right">
      <Toolbar className={styles.headSection}>
        <ListItem
          className={styles.listItem}
          disableGutters
        >
          <ListItemIcon className={styles.closeIcon}>
            <IconButton onClick={props.onClose} aria-label="Close Navigation">
              <CloseIcon color="primary" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <div className={styles.betdiv}>
          {props.betItems.map((bet) => (
                  <BetRow key={bet.id} bet={bet} />         
          ))}
      </div>
    </Drawer>
    </>
  );
};

export const BetRow = ({ bet }: { bet: Bet }) => {
 const dispatch = useDispatch();

  const handleMobileDrawerOpen = useCallback(() => {
    dispatch(removeBet(bet.id));
  }, [dispatch,bet]);
  
return (
  <Card className={styles.card}>
    <div className={styles.eventTitle}>{bet.name}</div> 
    <div className={styles.eventTitle}>{bet.price}</div>
    <div className={styles.eventTitle}><Button onClick={handleMobileDrawerOpen}>Delete</Button></div>
  </Card>
  );
};

export default BetSlip;