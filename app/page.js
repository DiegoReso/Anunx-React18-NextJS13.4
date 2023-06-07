'use client'

import { Container, Typography, InputBase, IconButton, Paper, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TemplateDefault from '../src/template/Default'
import Card from '../src/components/Card';

export default function Home() {
  return (
   
    <TemplateDefault>
      <Container 
        maxWidth="md">
        <Typography component="h1" variant="h3" align="center" color="textPrimary"> 
          O que você deseja encontrar?
        </Typography>
        <Paper
          sx={{
            display: 'flex',
            mt: '50px'
          }}
        >
          <InputBase
            sx={{
              ml: '20px'
            }}
            placeholder='Ex.: IPhone 12 com garantia'
            fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>
      
    

      
      <Container maxWidth="lg">
      <Typography sx={{mt: '20px'}} component="h2" variant="h5" align="center" color="textPrimary"> 
          Destaques
        </Typography>
      <Grid
          container
          spacing={2}
          sx={{mt: '50px'}}
          >

<Grid item sx={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/500x500/?boston'}   
              title="Produto x" 
              subtitle="R$ 60,00"  
                
            />
           </Grid>   

           <Grid item sx={12} sm={6} md={4}>
             <Card 
                image={'https://source.unsplash.com/random/500x500/?rio%20de%20janeiro'}   
                title="Produto x" 
                subtitle="R$ 60,00"  
              
            />
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/500x500/?sao%20paulo'}   
              title="Produto x" 
              subtitle="R$ 60,00"  
              
            />
          </Grid>

        </Grid>
      </Container>


    </TemplateDefault>
      
    
  )
}
