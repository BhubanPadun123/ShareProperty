import React from "react";
import { DNALoader } from "../Helper/Loader"
import { 
  HomeHeader ,
  RoomCard
} from "../Helper/HomeHeader"
import {
  Box,
  Container,
  Paper
} from "@mui/material"

const Home = () => {
  return (
    <Box sx={{
      width: `${window ? `${window.innerWidth}px ` : "100%"}`,
      textAlign: 'center',
      paddingTop: 2
    }} component={Paper}>
      <HomeHeader />
      <Container maxWidth='md' sx={{
        '.MuiContainer-maxWidthMd':{
          overflowY:'scroll',
          overflowX:'hidden'
        }
      }}>
        <RoomCard />
      </Container>
    </Box>
  );
};

export default Home;
