import React, { useContext } from 'react';
import { Box, Chip, } from '@mui/material';
import FemaleIcon from "@mui/icons-material/Female";
import { GlobalInfo } from "../../../App";



const ListComponent5 = () => {
  const {appgoal,getname,getreason} = useContext(GlobalInfo);

  const getname1 = () => {
    let a = document.getElementById("Give-it-a-name").value;
    console.log(a);
    getname(a);
}

const getreason1 = () => {
  let a = document.getElementById("why-this-action").value;
  console.log(a);
  getreason(a);
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
            Add an Action
          </Box>
          <Box className="list5-below-content">
            <Box className="list5-below-content-heading">Give it a name</Box>
            <Box className="list4-below-content-ele">
              <input placeholder="Text" className="list4-below-content-ele-text" id='Give-it-a-name'
              onChange={getname1}/>
            </Box>
          </Box>          
          <Box className="list5-below-content">
            <Box className="list5-below-content-heading">Tell yourself why this action</Box>
            <Box className="list-below-content-ele">
              <input placeholder="Text" className="list4-below-content-ele-text" 
              id='why-this-action'
              onChange={getreason1}/>
            </Box>
              <Chip className="list4-chip" label="Add more +"></Chip>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ListComponent5