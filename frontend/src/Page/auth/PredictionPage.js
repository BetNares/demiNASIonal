import React, { useState } from "react";
import {Box, Container, Typography , styled} from "@mui/material";
import Button from "@mui/material/Button";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Classifier = () => {

//style
  const styles = {
    backgroundImage: 'url("https://1.bp.blogspot.com/_y8UUOgY_SFo/S9L1Q4jtXcI/AAAAAAAAOH0/Iqez2w981WI/s1600/DSC_2365.JPG")',
    backgroundSize: 'cover',
    height: '100vh'
    
  };
  const MainBox = styled(Box)({
  
  });

  const StyledButton = styled(Button)({
    justifyContent: "space-between",
    justifyItems:"center",
    backgroundColor:'#CBD91E',
    display:'inline'
  });

  const STypography = styled(Typography)({
    color: 'White'
  });

  // take a picture
  /*
  const canvasRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  const [result, setResult] = useState("");

  useEffect(() => {
    async function getCameraStream() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });
  
      if (videoRef.current) {      
        videoRef.current.srcObject = stream;
      }
    };
  
    getCameraStream();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(async () => {
      captureImageFromCamera();

      if (imageRef.current) {
        const formData = new FormData();
        formData.append('image', imageRef.current);

        const response = await fetch('/classify', {
          method: "POST",
          body: formData,
        });

        if (response.status === 200) {
          const text = await response.text();
          setResult(text);
        } else {
          setResult("Error from API.");
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const playCameraStream = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const captureImageFromCamera = () => {
    const context = canvasRef.current.getContext('2d');
    const { videoWidth, videoHeight } = videoRef.current;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

    canvasRef.current.toBlob((blob) => {
      imageRef.current = blob;
    })
  };
*/

  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState("");  
  const [imageUrl, setImageUrl] = useState(null);
  
  const submitForm = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append('fileName', selectedFile.name);

    const response = await fetch('/classify', {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      const text = await response.text();
      setResult(text);
    } else {
      setResult("Error from API.");
    }

  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    
    setSelectedFile(file)
    reader.readAsDataURL(file);
  };

  return (

    <MainBox style={styles}>
    <NavbarAuth />
    <Container
    sx={{
      height:'100%',
      alignContent:'center',
      justifyContent:'center',
      display:'flex',
      flexDirection:'column',

    }}
    >
      <Box sx={{py:3, mx:'auto'}}>
        <input
            hidden
            id="upload-image"
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
          
        <StyledButton variant="contained" color="success"
          sx={{
            width: 250,
            height: 70,
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          >
          <label htmlFor="upload-image">
              <InsertPhotoIcon/>
              <Typography>Masukan Gambar</Typography>
          </label>
        </StyledButton>
        
      </Box>
        
      <Box sx={{
          width: 350,
          height: 150,
          py:5,
          justifyContent: 'center',
          display:'flex',
          mx:'auto',
        }}
      >
      {imageUrl && <img src={imageUrl} style={{maxHeight:'100%',maxWidth:'100%'}}/>}
      </Box>

      <Box 
      sx={{
        py:3,
        mx:'auto'
      }}>
        <StyledButton variant="contained" color="success" 
              onClick={submitForm}>
                Submit
              </StyledButton>
      </Box>
        
     
        
        <Box sx={{
          width: 350,
          height: 50,
          py:5,
          backgroundColor: 'rgba(0,0,0, 0.5)',
          borderRadius:2,
          display:'flex',
          justifyContent:'center',
          mx:'auto',
          flexDirection:'column',
        }}
        > 
          <STypography fontSize={'large'} sx={{mx:"auto"}}
          >Hasil Klasifikasi: </STypography>
          <STypography fontSize={'large'} sx={{mx:"auto"}}>  {result}</STypography>
        </Box>


    </Container>
     
      
    </MainBox>
  /*  <>
      <header>
        <h1>Image classifier</h1>
      </header>
      <main>
        <video ref={videoRef} onCanPlay={() => playCameraStream()} id="video" />
        <canvas ref={canvasRef} hidden></canvas>
        <p>Currently seeing: {result}</p>
      </main>
    </>*/
  )
};

export default Classifier;