import React, { useContext } from 'react';
import { Box, TextareaAutosize } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import { GlobalInfo } from "../../../App";



const ListComponent3 = () => {
  const {appgoal,getdescription} = useContext(GlobalInfo);

  const getdescription1 = () => {
      let a = document.getElementById("description").value;
      console.log(a);
      getdescription(a);
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
          <TextareaAutosize
           id='description' 
           className='textarea' 
           placeholder='Tell us brifly'
           onChange={getdescription1}
            />
      </Box>
      </Box>
    </div>
  )
}

export default ListComponent3