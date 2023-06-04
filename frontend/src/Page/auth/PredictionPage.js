import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import {Box, Container, Typography , styled} from "@mui/material";
import Button from "@mui/material/Button";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import UploadButtons from "../../components/FileUploader";

const Classifier = () => {

//style
  const styles = {
    backgroundImage: 'url("https://1.bp.blogspot.com/_y8UUOgY_SFo/S9L1Q4jtXcI/AAAAAAAAOH0/Iqez2w981WI/s1600/DSC_2365.JPG")',
    backgroundSize: 'cover',
    height: '100vh'
    
  };
  const MainBox = styled(Box)({
  });
  const ContentBox = styled(Box)({
    justifyContent:"space-between",

  });
  const StyledButton = styled(Button)({
    justifyContent: "space-between",
    marginTop:400,
    marginLeft: 680,
    backgroundColor:'#CBD91E'
    
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
  
  const submitForm = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

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

  return (

    <MainBox style={styles}>

      <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <button onClick={submitForm}>Submit</button>
      <p>Currently seeing: {result}</p>
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