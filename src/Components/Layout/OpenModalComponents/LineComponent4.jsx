import React, { useContext } from "react";
import FemaleIcon from "@mui/icons-material/Female";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { GlobalInfo } from "../../../App";


const ListComponent4 = () => {
  const {appgoal,getgrowth} = useContext(GlobalInfo);

  const getgrowth1 = (value) => {
    console.log(value);
    // setGoal(value);
    // console.log(goal);
    getgrowth(value);
  }


  return (
    <div>
      <Box className="List2">
        <Box className="list2-content1">
          <FemaleIcon className="FemaleIcon" />
          <Box className="list2-content1-heading">
            You have selected hedomism
          </Box>
        </Box>
        <Box className="list2-content2">
          <Box className="list2-content2-heading">
            Choose preselected growth area or type in your own
          </Box>
          <List className="List2-elements">
            {[
              "How to avoid disregarding other people’s opinions too hastily?",
              "How to maintain a balance between taking risks and conceding?",
              "How to maintain a balance between taking risks and conceding?",
            ].map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                  key={value}
                  className="list2-ele"
                  disablePadding
                  onClick={()=> (getgrowth1(value))}
                >
                  <ListItemText className="ListItemText2" id={labelId}>
                    {value}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
          <Box className="list4-below-content">
            <Box className="list4-below-content-heading">or add your own</Box>
            <Box className="list4-below-content-ele">
              <input placeholder="Text" className="list4-below-content-ele-text" />
              <Chip className="list4-chip" label="Add more +"></Chip>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ListComponent4;
