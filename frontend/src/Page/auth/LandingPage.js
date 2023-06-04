import React from "react";
import {Box, Container, Typography , styled} from "@mui/material";
import Button from "@mui/material/Button";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import ImageList from "@mui/material/ImageList";
import Picture from "../../components/images/authPageImage.png";
import { Link } from "react-router-dom";


const LandingPage = () => {
  const styles = {
    backgroundImage: 'url("https://1.bp.blogspot.com/_y8UUOgY_SFo/S9L1Q4jtXcI/AAAAAAAAOH0/Iqez2w981WI/s1600/DSC_2365.JPG")',
    backgroundSize: 'cover',
    height: '100vh'
    
  };
  const MainBox = styled(Box)({
  });

  const StyledButton = styled(Button)({
    justifyContent: "space-between",
    marginTop:400,
    marginLeft: 680,
    backgroundColor:'#CBD91E'
    
  });
  
  return (
    

    <MainBox style={styles}>
      <NavbarAuth/>
      <Link to="prediction">
        <StyledButton variant="contained" color="success" fontSize="Large">
           Cek Padi Anda
        </StyledButton>
      </Link>
    </MainBox>
  )
}
export default LandingPage;
