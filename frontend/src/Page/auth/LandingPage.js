import React from "react";
import {Button, Box, Container, Typography , styled, Grid, Card, CardMedia, CardContent, CardActions} from "@mui/material";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import Footer from "../../components/Navbar/Footer";


const LandingPage = () => {
  const styles = {
    backgroundImage: 'url("https://1.bp.blogspot.com/_y8UUOgY_SFo/S9L1Q4jtXcI/AAAAAAAAOH0/Iqez2w981WI/s1600/DSC_2365.JPG")',
    backgroundSize: 'cover',
    height: '100vh'
    
  };
  const MainContainer = styled(Box)({
  });

  const StyledButton = styled(Button)({
    justifyContent: "space-between",
    // marginTop:400,
    // marginLeft: 680,
    backgroundColor:'#CBD91E',
    display: 'inline',
    
  });
  
  const cards = [1, 2, 3];

  return (
    <Box 
      sx={{
        bgcolor: 'background.paper',
        // backgroundImage: 'url("https://1.bp.blogspot.com/_y8UUOgY_SFo/S9L1Q4jtXcI/AAAAAAAAOH0/Iqez2w981WI/s1600/DSC_2365.JPG")',
        // backgroundSize: 'cover',
        // height: '100vh',
        pt: 8,
        pb: 6,
        
      }}
    >
      <NavbarAuth/>
      <Container 
        sx={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600387845879-a4713f764110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZSUyMGZpZWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60")',
          backgroundSize: 'cover',
          height: '60vh',
          width: '100%',
          pt: 10,
          pb: 8,
          alignContent: "center",
          justifyContent: "center",
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="white"
            sx={{pb:4}}
          >
            Kesehatan nasional dimulai dari kesehatan padi.
          </Typography>
        </Box>

        <StyledButton 
          href="prediction" 
          color="success" 
          variant="contained" 
          size="large"
          sx={{mx: 'auto'}}
        >
          Cek Padi Anda
        </StyledButton>

      </Container>
      <Container sx={{ pt: 8 }}maxWidth="sl">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://images.unsplash.com/photo-1600738925139-4c4f9e1cc7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions >
                  <Button href="" size="small">View</Button>
                  {/* <Button size="small">Edit</Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </Box>
  )
}
export default LandingPage;
