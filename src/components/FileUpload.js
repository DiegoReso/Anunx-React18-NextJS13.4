import {useDropzone} from 'react-dropzone'
import { Box, IconButton,Typography,} from "@mui/material"
import { DeleteForever } from "@mui/icons-material"


const FileUpload =({files,errors, touched, setFieldValue})=>{

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile)=>{
      
      const newFiles = acceptedFile.map( file => {
        return Object.assign(file,{
          preview: URL.createObjectURL(file)
        })
      })


        setFieldValue('files',[
          ...files,
          ...newFiles
        ])
    }
  })


const handleRemoveFile = filePath => {
  
const newfileState = files.filter (file => file.path !== filePath)

setFieldValue('files', newfileState)
}


  return(
    <>
       <Typography 
        component="h6" 
        variant="h6" 
        color={ errors ? 'error' : "primary"}
        >
          Imagens
        </Typography>
        <Typography component="h7" variant="h7" color={ errors ? 'error' : "primary"}>
          A primeira imagem é a foto principal do anúncio
        </Typography>
        {
          
          errors && touched
          ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
          : null

        }
        <Box 
          sx={{
            display: 'flex',
            gap : 1,
            flexWrap: 'wrap',
            ml: '15px'
        }}>
          <Box 
          {...getRootProps()}

          sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'Center',
            mt: '10px',
            border: '2px dashed grey',
            width: 150,
            height: 150,
            bgcolor: '#e0e0e0'
            
          }}>
            <input name="files" {...getInputProps()} />
            <Typography
            align="center" 
            variant="body2"
            color={ errors ? 'error' : "primary"}
            >
              Clique ou arraste a imagem aqui.
            </Typography>

          </Box>

            {

              files.map((file , index)=> (
                
              <Box
                key={file.name}
                sx={{
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'Center',
                  mt: '10px',
                  border: '2px dashed grey',
                  width: 150,
                  height: 150,
                  bgcolor: '#e0e0e0',
                  backgroundSize: 'Cover',
                  backgroundImage: `url(${file.preview})`,
                    
                
                }}>
                  <Box
                    sx={{
                      display:'flex',
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'Center',
                      width: 150,
                      height: 150,
                      "&:hover": {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                      },
                    }}
                  >
                    
                    <IconButton onClick={() => handleRemoveFile(file.path)}>
                      <DeleteForever fontSize="large" color="secondary"/>
                    </IconButton>

                    {

                      index === 0 ?
                      <Box 
                      sx={{
                        position: 'absolute',
                        left: 0,
                        bottom:0,
                        backgroundColor: 'blue',
                      }}
                    >
                      <Typography variant="body2" color="secondary">
                        Principal
                      </Typography>
                    </Box>

                    : null


                    }
                  
                  </Box>
                  
              </Box>


              ))
            }

        
        </Box>

    </>
  )
} 

export default FileUpload