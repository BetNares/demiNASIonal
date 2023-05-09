import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

const Navbar = () => {
    const StyledToolBar = styled(Toolbar)({
        display:"flex",
        justifyContent: "space-between",
    });
  return (
    <AppBar>
        <StyledToolBar>
            demiNasional
        </StyledToolBar>
    </AppBar>
  );
};

export default Navbar