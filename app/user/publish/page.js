'use client'

import { Box, Button, Container, IconButton, Select, TextField, Typography } from "@mui/material"
import TemplateDefault from "../../../src/template/Default"
import { DeleteForever } from "@mui/icons-material"

import {useDropzone} from 'react-dropzone'
import { useState } from "react"


const Publish =()=>{

  const [files,setFiles] = useState([])
 
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile)=>{
      
      const newFiles = acceptedFile.map( file => {
        return Object.assign(file,{
          preview: URL.createObjectURL(file)
        })
      })

        setFiles([
          ...files,
          ...newFiles
        ])
    }
  })


  const handleRemoveFile = fileName => {
    const newfileState = files.filter (file => file.name !== fileName)

    setFiles(newfileState)
  }


  return(


    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography 
        component="h1" 
        variant="h2" 
        align="center"
        sx={{mt: '50px'}}>
          Publicar Anúncio
        </Typography>

        <Typography 
        component="h5" 
        variant="h5" 
        align="center"
        sx={{mt: '5px'}}>
          Quanto mais detalhado melhor
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box sx={{bgcolor:'white',borderRadius: '12px', p:'10px'}}>
        <Typography 
        component="h6" 
        variant="h6" 
        >
          Título do anúncio
        </Typography>
        <TextField
          label="ex.: Bicicleta Aro 18 com garantia"
          size="small"
          fullWidth
          />

        <Typography 
        component="h6" 
        variant="h6"
        sx={{mt: '15px'}}
        >
          Categoria
        </Typography>
        <Select
        native
        variant="outlined"
        value=""
        fullWidth
        onChange={()=> {}}
        inputProps={{
          name: 'age',
        }}
        >
          
          <option value="">Selecione</option>
          <option value={1}>Bebe e Criança</option>
          <option value={2}>Agricultura</option>
          <option value={3}>Moda</option>
          <option value={4}>CArros, Motos e Barcos</option>
          <option value={5}>Serviços</option>
          <option value={6}>Lazer</option>
          <option value={7}>Animais</option>
          <option value={8}>Moveis, Casa e Jardim</option>
          <option value={9}>Imóveis</option>
          <option value={10}>Equipamentos e ferramentas</option>
          <option value={11}>Celulares e Tablets</option>
          <option value={12}>Esporte</option>
          <option value={13}>Tecnologia</option>
          <option value={14}>Emprego</option>
          <option value={15}>Outros</option>



        </Select>

        </Box>


      </Container>
      
      <Container
       maxWidth="md"
       sx={{mt: '25px'}}
       >
        <Box 
          sx={{bgcolor:'white',
          borderRadius: '12px', 
          p:'10px'
          }}>
          <Typography 
          component="h6" 
          variant="h6" 
          >
            Imagens
          </Typography>
          <Typography component="h7" variant="h7">
            A primeira imagem é a foto principal do anúncio
          </Typography>

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
              <input {...getInputProps()} />
              <Typography
               align="center" 
               variant="body2"
              
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
                      
                      <IconButton onClick={() => handleRemoveFile(file.name)}>
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
        </Box>
      </Container>
      
      <Container
       maxWidth="md"
       sx={{mt: '25px'}}
       >
        <Box sx={{bgcolor:'white',borderRadius: '12px', p:'10px'}}>
        <Typography 
        component="h6" 
        variant="h6" 
        sx={{mt: '10px'}}>
          Escreva os detalhes do item que esta vendendo
        </Typography>
        <TextField
          multiline
          rows={6}
          variant="outlined"
          fullWidth
        />
          
        </Box>
      </Container>

      
      <Container
       maxWidth="md"
       sx={{mt: '25px'}}
       >
        <Box sx={{bgcolor:'white',borderRadius: '12px', p:'10px'}}>
        <Typography 
        component="h6" 
        variant="h6" 
        >
          Dados de contato
        </Typography>
        <TextField
          sx={{mt: '5px'}}
          label="Nome"
          size="small"
          variant="outlined"
          fullWidth
        />

          <TextField
          sx={{mt: '5px'}}
          label="Email"
          size="small"
          variant="outlined"
          fullWidth
        />
          <TextField
          sx={{mt: '5px'}}
          label="Telefone"
          size="small"
          variant="outlined"
          fullWidth
        />
        </Box>

      </Container>

      
      <Container
      sx={{mt: '10px'}}
       maxWidth="md">
          <Box textAlign=
          "right">
            <Button variant="contained">
              Anunciar
            </Button>
          </Box>

      </Container> 

    </TemplateDefault>

  
  )
}


export default Publish