'use client'

import { Box, Button, Container, FormControl, IconButton, InputAdornment, MenuItem, Select, Typography, FormHelperText, Input, InputLabel } from "@mui/material"
import TemplateDefault from "../../../src/template/Default"
import { DeleteForever } from "@mui/icons-material"

import {useDropzone} from 'react-dropzone'
import { useState } from "react"

import { Formik } from "formik"
import * as yup from 'yup'


const styleInputLabel ={
  color : 'black'
}

const formStyle = {
  mt: '15px'
}


const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100,'Título muito grande')
    .required('Campo Obrigatório'),

    category: yup.string().required('Campo Obrigatório'),

    description: yup.string()
    .min(50, 'Escreva uma descrição com min 50 caracteres')
    .required('Campo Obrigatório'),

    price: yup.number()
    .required('Campo Obrigatório'),

    name: yup.string()
    .required('Campo Obrigatório'),

    email: yup.string()
    .email('Digite um email válido')
    .required('Campo Obrigatório'),

    phone: yup.number()
    .required('Campo Obrigatório'),

    files: yup.array()
    .min(1, 'Envie pelo menos uma foto')
    .required('Obrigatório')
})


const Publish =()=>{

  const [files,setFiles] = useState([])



  return(


    <TemplateDefault>
      <Formik
        initialValues={{
          title: '',
          category: '',
          description: '',
          price: '',
          name: '',
          email: '',
          phone:'',
          files: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
          console.log('Ok enviou', values)
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          })=>{
            
           
            const {getRootProps, getInputProps} = useDropzone({
              accept: 'image/*',
              onDrop: (acceptedFile)=>{
                
                const newFiles = acceptedFile.map( file => {
                  return Object.assign(file,{
                    preview: URL.createObjectURL(file)
                  })
                })


                  setFieldValue('files',[
                    ...values.files,
                    ...newFiles
                  ])
              }
            })


  const handleRemoveFile = fileName => {
    const newfileState = values.files.filter (file => file.name !== fileName)

    setFieldValue('files', newfileState)
  }


            return(
              <form onSubmit={handleSubmit}>
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
                  sx={{mt: '5px', mb: '20px'}}>
                    Quanto mais detalhado melhor
                  </Typography>
                </Container>

                <Container maxWidth="md">
                  <Box sx={{bgcolor:'white',borderRadius: '12px', p:'10px'}}>
              
                  <FormControl error={errors.title && touched.title} fullWidth>
                    <InputLabel sx={styleInputLabel}>Título do Anúncio</InputLabel>
                      <Input
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        placeholder="ex.: Bicicleta Aro 18 com garantia"
                        />
                    <FormHelperText>
                      {errors.title && touched.title ? errors.title : null}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    sx={{mt:'30px'}}
                    fullWidth
                    variant="standard"
                    error={errors.category && touched.category}>
                      <InputLabel sx={styleInputLabel}>Categoria</InputLabel>
                    <Select
                                
                      name="category"
                      value={values.category}
                      fullWidth
                      onChange={handleChange}                  
                    >
                      
                      <MenuItem value="Bebe e Criança">Bebe e Criança</MenuItem>
                      <MenuItem value="Agricultura">Agricultura</MenuItem>
                      <MenuItem value="Moda">Moda</MenuItem>
                      <MenuItem value="Carros, Motos e Barcos ">Carros, Motos e Barcos</MenuItem>
                      <MenuItem value="Serviços">Serviços</MenuItem>
                      <MenuItem value="Lazer">Lazer</MenuItem>
                      <MenuItem value="Animais">Animais</MenuItem>
                      <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                      <MenuItem value="Imóveis">Imóveis</MenuItem>
                      <MenuItem value="Equipamentos e ferramentas ">Equipamentos e ferramentas</MenuItem>
                      <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                      <MenuItem value="Esporte">Esporte</MenuItem>
                      <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                      <MenuItem value="Emprego">Emprego</MenuItem>
                      <MenuItem value="Outros">Outros</MenuItem>

                    </Select>
                    <FormHelperText>
                      {errors.category && touched.title ? errors.category : null}
                    </FormHelperText>
                  </FormControl>
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
                    color={ errors.files ? 'error' : "primary"}
                    >
                      Imagens
                    </Typography>
                    <Typography component="h7" variant="h7" color={ errors.files ? 'error' : "primary"}>
                      A primeira imagem é a foto principal do anúncio
                    </Typography>
                    {
                      
                      errors.files && touched.files
                      ? <Typography variant="body2" color="error" gutterBottom>{errors.files}</Typography>
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
                        color={ errors.files ? 'error' : "primary"}
                        >
                          Clique ou arraste a imagem aqui.
                        </Typography>

                      </Box>

                        {

                          values.files.map((file , index)=> (
                            
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
            
                  <FormControl error={errors.description && touched.description} fullWidth>
                    <InputLabel sx={styleInputLabel}>Escreva os detalhes do item que esta vendendo</InputLabel>
                    <Input                     
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      multiline
                      rows={6}
                                          
                    />
                  <FormHelperText>
                    {errors.description && touched.description ? errors.description :  null}
                  </FormHelperText>
                  </FormControl>  
                  </Box>
                </Container>

              <Container
                maxWidth="md"
                sx={{mt: '25px'}}
                >
                  <Box sx={{bgcolor:'white',borderRadius: '12px', p:'10px'}}>
                 
                    <br />
                      <FormControl fullWidth error={errors.price && touched.price}>
                        <InputLabel>Preço</InputLabel>
                        <Input
                          name="price" 
                          value={values.price}
                          onChange={handleChange}
                          startAdornment ={<InputAdornment sx={{ml:'14px'}}position="start">R$</InputAdornment>}
                          labelWidth={40}
                          placeholder="Preço"
                    
                      />
                        
                      <FormHelperText>
                        {errors.price && touched.price ? errors.price : null}
                      </FormHelperText>
                    </FormControl>
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

                   <FormControl sx={formStyle} fullWidth error={errors.name && touched.name}>
                        <InputLabel>Nome</InputLabel>
                        <Input
                          name="name" 
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Nome"
                    
                      />
                        
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl  sx={formStyle} fullWidth error={errors.email && touched.email}>
                        <InputLabel>Email</InputLabel>
                        <Input
                          name="email" 
                          value={values.email}
                          onChange={handleChange}
                          placeholder="E-mail"
                    
                      />
                        
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl  sx={formStyle} fullWidth error={errors.phone && touched.phone}>
                        <InputLabel>Phone</InputLabel>
                        <Input
                          name="phone" 
                          value={values.prone}
                          onChange={handleChange}
                          placeholder="Telefone"
                    
                      />
                        
                      <FormHelperText>
                        {errors.phone && touched.phone ? errors.phone : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>

                </Container>

                
                <Container
                  sx={{mt: '10px'}}
                  maxWidth="md">
                    <Box textAlign=
                    "right">
                      <Button type="submit" variant="contained">
                        Anunciar
                      </Button>
                    </Box>

                </Container> 
                        
            </form>
                      )
                    }
                  }
                </Formik>
                

    </TemplateDefault>

  
  )
}


export default Publish