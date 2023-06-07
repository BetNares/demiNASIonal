import React from "react";
import {Button, Box, Container, Typography , styled, Grid, Card, CardMedia, CardContent, CardActions} from "@mui/material";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import Footer from "../../components/Navbar/Footer";


const leafBlast = () => {
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
              Tentang Leaf Blast
            </Typography>
          </Box>
          <Box sx={{ width: '25%' }}>
            <img 
            alt=""
            src="https://images.unsplash.com/photo-1600738925139-4c4f9e1cc7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
          </Box>
  
        </Container>
        <Container>
          <Typography variant="subtitle1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu massa condimentum, accumsan neque id, luctus dolor. Mauris purus nunc, rutrum sit amet venenatis non, tristique sit amet ipsum. Sed consectetur in ipsum ut aliquam. Curabitur nec egestas ante. Phasellus dictum rutrum consequat. Aenean metus lorem, lacinia sit amet fringilla quis, sagittis eu ante. Sed facilisis egestas erat. Suspendisse gravida nunc dignissim orci pharetra, ac tristique mauris porttitor. Sed lacus orci, tempor non varius nec, auctor eget libero.
            
            Sed posuere, leo nec facilisis porta, lorem nisl fringilla enim, eget scelerisque arcu urna eget leo. Vivamus ut eleifend tellus. Maecenas arcu mauris, blandit in felis non, hendrerit scelerisque leo. Proin ultrices orci libero, vel vehicula neque convallis eget. Donec tempus porta neque nec bibendum. Nullam nec nunc vitae lectus posuere pulvinar at ut dolor. Mauris sed felis ac mi molestie blandit vitae et arcu. Suspendisse gravida, est id convallis ornare, arcu magna consectetur dolor, placerat lobortis orci eros a dolor. Etiam at condimentum lectus, ac tincidunt diam. Ut ac nisi eget metus sollicitudin cursus. Sed elit enim, placerat bibendum lectus a, vulputate condimentum nisi. Vestibulum quis nibh eu enim semper hendrerit id in ipsum.
            
            Vestibulum non mauris ultrices, vehicula nibh non, euismod nunc. Vestibulum eleifend massa sed vestibulum rhoncus. Morbi commodo velit purus, id porta quam cursus non. Donec porta, elit eu laoreet tempor, ante libero laoreet ipsum, ac ornare erat nisi a nisi. Sed pharetra libero ut tempor sagittis. Ut tincidunt nisi et massa placerat dapibus. Mauris vel porttitor ante. Quisque quam leo, vehicula vitae tempus quis, ornare hendrerit purus. Integer viverra augue ante, ut porttitor nisl posuere non. Fusce sed vehicula lacus. In hac habitasse platea dictumst. Pellentesque nec bibendum lectus, nec volutpat nisl. Fusce volutpat leo nec metus ornare lacinia. Nulla volutpat luctus commodo.
            
            Donec efficitur nec diam vel varius. Donec venenatis, nulla cursus bibendum posuere, nisl leo rhoncus felis, sit amet pretium odio mi sit amet augue. Suspendisse lobortis lorem cursus, laoreet tortor ac, ultrices velit. Pellentesque auctor nisi in nunc posuere tincidunt. Ut efficitur bibendum felis ac tincidunt. Duis ut efficitur erat. Vivamus ac urna erat. Ut quis interdum lacus. Quisque eu gravida dui. Sed at odio sollicitudin, gravida eros ac, lobortis quam. Suspendisse et mauris interdum, porta ante id, vehicula leo. Quisque malesuada mauris vitae risus malesuada venenatis. Nam vel metus suscipit, rhoncus massa sit amet, finibus nibh. In id ipsum eu est pulvinar varius a eleifend ipsum. Quisque porta est turpis, et venenatis quam pharetra vel. Nullam pulvinar, velit vitae ornare consequat, lacus felis mollis velit, vel ornare mauris elit vel libero.
            
            Nunc quis libero et nulla condimentum ultrices sit amet vel lectus. Aenean egestas vestibulum felis at rutrum. Suspendisse potenti. Sed tempus sagittis nisi, vel sollicitudin sem tincidunt at. Sed nec egestas turpis. Nulla placerat, turpis et aliquet dignissim, purus mi facilisis eros, eu semper est nunc ut risus. Duis non diam dapibus, fringilla eros nec, posuere odio.
          </Typography>
        </Container>
      <Footer/>
    </Box>
  )
}
export default leafBlast;
