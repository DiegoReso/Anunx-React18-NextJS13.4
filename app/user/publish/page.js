'use client'

import { Box, Button, Container, FormControl, InputAdornment, MenuItem, Select, Typography, FormHelperText, Input, InputLabel } from "@mui/material"
import TemplateDefault from "../../../src/template/Default"


import { initialValues,validationSchema } from "./formValidation"

import { Formik } from "formik"
import FileUpload from "../../../src/components/FileUpload"



const styleInputLabel ={
  color : 'black'
}

const formStyle = {
  mt: '15px'
}


const Publish =()=>{

  return(


    <TemplateDefault>
      <Formik
        initialValues={initialValues}
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
                     
                    <FileUpload
                      files={values.files}
                      errors={errors.files}
                      touched={touched.files}
                      setFieldValue={setFieldValue}
                      />

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
                  sx={{mt: '20px'}}
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