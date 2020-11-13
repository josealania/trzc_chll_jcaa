import React, { useState, useCallback } from "react";
import { SelectionType } from "../../model/selection";
import { Button,Grid } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import { useDispatch } from "react-redux";
import { addBet,removeBet } from "../../store/actions/actions";
import styles from "./Selection.module.scss";
import classnames from 'classnames';

const useSelectionCollection = () => {
  const [marketCollection, setSelectionCollection] = React.useState<
    SelectionType[]
  >([]);

  const loadSelectionCollection = async (selections: SelectionType[]) => {
    const selectionCollection = selections;
    setSelectionCollection(selectionCollection);
  };

  return { selectionCollection: marketCollection, loadSelectionCollection: loadSelectionCollection };
};
interface Props {
  selections: SelectionType[];
  onClose: any;
  betDeleteClicked:boolean;
  betIdClicked: string;
  betMarketName: string; 
}
export const SelectionComponent: React.FunctionComponent<Props> = props => {
  const { selectionCollection, loadSelectionCollection } = useSelectionCollection();

  React.useEffect(() => {
    loadSelectionCollection(props.selections);
  }, [props.selections,loadSelectionCollection]);

  return (
    <>
        <Grid container spacing={selectionCollection.length>2?3:7} justify="center">
            {selectionCollection.map((selection) => (
                <SelectionRow key={selection.id} selection={selection} betMarketName={props.betMarketName} onClose={props.onClose} betDeleteClicked={props.betDeleteClicked} betIdClicked={props.betIdClicked}/>
            ))}
        </Grid>
    </>
  );
};
interface Selection {
  selection: SelectionType;
  onClose: any;
  betDeleteClicked:boolean;
  betIdClicked:string;
  betMarketName: string; 
}

export const SelectionRow : React.FunctionComponent<Selection> = selection => { 

  const dispatch = useDispatch();

  // to avoid re-rendering, wrapping under usecallback
  const [changeCurrentColor, setCurrentColor] = useState(false);

  React.useEffect(() => {
    if(selection.selection.changeColor!==changeCurrentColor && selection.betDeleteClicked===true && selection.betIdClicked===selection.selection.id){
      setCurrentColor(false);
    }
  }, [selection,changeCurrentColor]);

  const handleMobileDrawerOpen = useCallback(() => {
    setCurrentColor(!changeCurrentColor);
    selection.onClose();
    if(changeCurrentColor===true){
      dispatch(removeBet(selection.selection.id));
    }
    else{
      dispatch(addBet(selection.selection.name + " " + selection.betMarketName,selection.selection.price,selection.selection.id));
    }  
  }, [setCurrentColor,changeCurrentColor,dispatch,selection]);

  const [defaultColor, checkedColor] = ['#3CB371', '#FFFFFF'];
  
  if(selection.betDeleteClicked===true && selection.betIdClicked===selection.selection.id){
    selection.selection.changeColor=false;
  }
  else{
    selection.selection.changeColor=typeof selection.selection.changeColor==="undefined"?false:changeCurrentColor;
  }

  const color = { backgroundColor: selection.selection.changeColor ? defaultColor : checkedColor };

  return (
    <Grid item>
      <Button className={classnames(styles.button)} onClick={handleMobileDrawerOpen}>
      <Card style={color} className={styles.card}>
          <div>{selection.selection.name}</div> <div>{selection.selection.price}</div>
      </Card>
      </Button>
    </Grid>
)};
