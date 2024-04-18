import React from "react";
import {DNALoader} from "../Helper/Loader"
import {
  Box
} from "@mui/material"

const Home = () => {
  return (
    <Box sx={{
      height:"90vh",
      width: `${window ? window.innerWidth : "100%"}`,
      textAlign:'center'
    }}>
      <p>Home</p>
      <DNALoader 
        visible={true}
        height={100}
        width={100}        
      />
    </Box>
  );
};

export default Home;
