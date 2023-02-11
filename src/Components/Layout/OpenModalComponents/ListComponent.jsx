import React, { useContext, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ReactDOM from 'react-dom';

import "./style.css";
import { GlobalInfo } from "../../../App";

const ListComponent = () => {
  const {appgoal,getGoal} = useContext(GlobalInfo);
  const [isSelect, setisSelect] = useState(false)
  const selectArr = ["Agape", "Exercise", "Agape1", "Agape2", "Agape3", "Agape4", "Agape5", "Agape6", "Agape7", "Agape8", "Agape9", "Agape10"];

  const getGoal1 = (value,e) => {
    console.log(value);
    // setGoal(value);
    // console.log(goal);
    getGoal(value);
    let active_border = document.getElementsByName("value");
    // e.target.classList.add("listitem2");
    // ReactDOM.findDOMNode(active_border).style.backgroundColor = "red";
    // active_border.classList.remove("listitem");
    // active_border.classList.add("listitem2");    
    // e.target.style.backgroundColor="red";
  }

  return (
    <div>
      <Box className="modal-body-list1">
        <Typography className="modal-body-title-list1">
          Select Dimension
        </Typography>
      </Box>
      <Box className="modal-body-content-list1">
        <Box className="list1-switches">
          <Box className="switch1">All</Box>
          <Box className="switch2">Favourite</Box>
        </Box>

        <List
          className="list1"
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {selectArr.map(
            (value,index) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                className = "listitem"
                  // className={clsx(
                  //   isSelect
                  //     ? "listitem"
                  //     : "listitem2"
                  // )}
                  key={index}
                  name="value"
                  onClick={(e)=> (getGoal1(value,e))}
                  >
                  <ListItemText
                    id={labelId}
                    // className={clsx(
                    //   isSelect
                    //     ? "listitem"
                    //     : "listitem2"
                    // )}
                    // primary={`${value}`}
                  >
                    <Box className="ListItemText1">
                    <Box className="list-icon-text">
                      <FavoriteIcon id="FavoriteIcon"/>
                      <Box id="goal">
                        {value}
                      </Box>
                    </Box>
                      <InfoOutlinedIcon id="InfoOutlinedIcon"/>
                  </Box>
                  </ListItemText>
                  {/* </ListItemButton> */}
                </ListItem>
              );
            }
          )}
        </List>
      </Box>
    </div>
  );
};

export default ListComponent;
