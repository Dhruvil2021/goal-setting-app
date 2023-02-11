import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import FemaleIcon from '@mui/icons-material/Female';
import { GlobalInfo } from "../../../App";


const ListComponent2 = () => {
  const {appgoal,getstate} = useContext(GlobalInfo);
  

  const getGoal2 = (value) => {
    console.log(value);
    // setGoal(value);
    // console.log(goal);
    getstate(value);
  }

  return (
    <div>
      <Box className="List2">
        <Box className="list2-content1">
            <FemaleIcon className="FemaleIcon"/>
          <Box className="list2-content1-heading">You have selected hedomism</Box>
        </Box>
        <Box className="list2-content2">
          <Box className="list2-content2-heading">What would you like to do with selected dimension?</Box>
      <List
        className="List2-elements"
      >
        {["Increse", "Decrease", "Calibrate"].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              className="list2-ele"
              onClick={()=> (getGoal2(value))}
              disablePadding
            >
              <ListItemText className="ListItemText2" id={labelId}>
                {value}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
      </Box>
      </Box>
    </div>
  );
};

export default ListComponent2;
