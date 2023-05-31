'use client'

import { Box, Button, Container, Select, TextField, Typography } from "@mui/material"
import TemplateDefault from "../../../src/template/Default"


const Publish =()=>{


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
        <Box sx={{bgcolor:'white',borderRadius: '12px', p:'10px'}}>
        <Typography 
        component="h6" 
        variant="h6" 
        >
          Imagens
        </Typography>
        <Typography component="h7" variant="h7">
          A primeira imagem é a foto principal do anúncio
        </Typography>
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