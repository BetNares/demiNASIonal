import React from 'react'
import { AppBar, Toolbar, styled, Box,Button } from '@mui/material'
import Menu from '@mui/icons-material/Menu';


const NavbarAuth = () => {
    const StyledToolBar = styled(Toolbar)({
        display:"flex",
        justifyContent: "space-between",
    });

  return (
    <AppBar sx={{background: '#CBD91E'}}>
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
              <Menu/>
            </Box>

        </StyledToolBar>
    </AppBar>
  );
};

export default NavbarAuth;