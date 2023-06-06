import { useRef } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

export default function UploadButtons() {
  //const [imageUrl, setImageUrl] = useState(null);
  const fileInput = useRef(null)

  const handleFileUpload = (event) => {
     // handle validations
     const file = event.target.files[0];
    if (file.size > 1024)
        this.onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    else this.onFileSelectSuccess(event);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-image">
          <Button variant="contained" component="span">
            Upload
          </Button>
          <input
            id="upload-image"
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
        <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
      
      </Stack>
    </Container>
  );
}