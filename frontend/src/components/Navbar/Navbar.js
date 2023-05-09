import React from 'react'
import { AppBar, Toolbar, styled, Box,Button } from '@mui/material'



const Navbar = () => {
    const StyledToolBar = styled(Toolbar)({
        display:"flex",
        justifyContent: "space-between",
    });
  return (
    <AppBar>
        <StyledToolBar>
            <Box>demiNasional</Box>
        </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;