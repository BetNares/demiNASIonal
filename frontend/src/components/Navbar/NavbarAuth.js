import React from 'react'
import { AppBar, Toolbar, styled, Box,Button } from '@mui/material'



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
            
            <Box sx={{
              color:"black",
              cursor: "pointer",
              }}
              >

            </Box>

        </StyledToolBar>
    </StyledAppBar>
  );
};

export default NavbarAuth;