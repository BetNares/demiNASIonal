import React from "react";
import {Button, Box, Container, Typography} from "@mui/material";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import Footer from "../../components/Navbar/Footer";

const brownSpot = () => {
    return (
        <Box 
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            
          }}
        >
          <NavbarAuth/>
            <Container 
              sx={{
              height: '50vh',
              width: '100%',
              pt: 15, pb: 6,
              alignContent: "center",
              justifyContent: "space-between",
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <Box>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="white"
                >
                  Tentang Brown Spot
                </Typography>
              </Box>
              <Box sx={{ width: '25%' }}>
                <img src="https://images.unsplash.com/photo-1600738925139-4c4f9e1cc7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
              </Box>
      
            </Container>
          <Footer/>
        </Box>
        
    )
};
export default brownSpot;