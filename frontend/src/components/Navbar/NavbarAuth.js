import React from 'react'
import { AppBar, Toolbar, styled, Box, Button, Stack, Link } from '@mui/material'



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
            <Box sx={{p:2}}
              fontSize= "28px"
              fontWeight='medium'
            >
              demiNASIonal
            </Box>
          
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
                href="/"
                size="large"
              >
                Beranda
              </Button>
              
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
                href="brownspot"
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