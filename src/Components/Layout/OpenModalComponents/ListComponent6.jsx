import React, { useContext } from 'react';
import { Box, Chip } from '@mui/material';
import FemaleIcon from "@mui/icons-material/Female";
import { GlobalInfo } from "../../../App";



const ListComponent6 = () => {
  const {appgoal,gethobby,getwhythishobby,gethowoften} = useContext(GlobalInfo);

  const gethobby1 = () => {
    let a = document.getElementById("hobby").value;
    console.log(a);
    gethobby(a);
}

const getwhythishobby1 = () => {
  let a = document.getElementById("why-this-hobby").value;
  console.log(a);
  getwhythishobby(a);
}

const gethowoften1 = () => {
  let a = document.getElementById("howoften").value;
  console.log(a);
  gethowoften(a);
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
            <Box className="list5-below-content-heading">Give name to Hobby</Box>
            <Box className="list4-below-content-ele">
              <input placeholder="Running" className="list4-below-content-ele-text"
              id='hobby'
              onChange={gethobby1} />
            </Box>
          </Box>     
          <Box className="list5-below-content">
            <Box className="list5-below-content-heading">Tell yourself why this habit</Box>
            <Box className="list4-below-content-ele">
              <input placeholder="Allows to appreciate others" className="list4-below-content-ele-text"
              id='why-this-hobby'
              onChange={getwhythishobby1} />
            </Box>
          </Box>          
        <Box className="list5-below-content">
            <Box className="list5-below-content-heading">How often</Box>
            <Box className="list-below-content-ele">
              <select placeholder="Allow to appreciate others" className="list4-below-content-ele-text"
              id='howoften'
              onChange={gethowoften1}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
                </select> 
            </Box>
              <Chip className="list4-chip" label="Add more +"></Chip>
          </Box>
          </Box>
      </Box>
    </div>
  )
}

export default ListComponent6