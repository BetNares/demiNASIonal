import React from "react";
import {Box, Container, styled, ima} from "@mui/material";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import ImageList from "@mui/material/ImageList";
import Picture from "../../components/images/authPageImage.png"

const LandingPage = () => {
  const MainBox = styled(Box)({
    justifyContent:"space-between",
  });
  const ContentBox = styled(Box)({
  display:"flex",
  });
  const LoginBox = styled(Box)({
  display:"flex",
  });
  const RegisterBox = styled(Box)({
  display:"flex",
  });
  return (
    
    <MainBox>
      <NavbarAuth/>
      <ContentBox>
        <ImageList>
          <img src={Picture} />
        </ImageList>
      </ContentBox>
    </MainBox>
  )
}
export default LandingPage;
