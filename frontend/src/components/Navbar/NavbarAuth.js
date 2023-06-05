import React from 'react'
import { AppBar, Toolbar, styled, Box, Button, Stack } from '@mui/material'
import { Link } from "react-router-dom";



const NavbarAuth = () => {
    const StyledToolBar = styled(Toolbar)({
        display:"flex",
        justifyContent: "space-between",
    });
    const StyledAppBar = styled(AppBar)({
      display:"flex",
    })

  return (
    <StyledAppBar sx={{background: '#CBD91E'}}>
        <StyledToolBar>
            <Box sx={{
              color:'black', 
              fontSize: "30px", 
              fontWeight:'medium'}}
              >
                demiNasional</Box>
          
            <Stack
              direction="row"
              justifyContent="center"
            >
              <Button sx={{
                color:"black",
                cursor: "pointer",
                p:2
                }}
                variant='text'
                href="prediction"
                size="large"
              >
                Periksa
              </Button>

              <Button sx={{
                color:"black",
                cursor: "pointer",
                p:2
                }}
                variant='text'
                href=""
                size="large"
              >
                Artikel
              </Button>
            </Stack>

        </StyledToolBar>
    </StyledAppBar>
  );
};

export default NavbarAuth;