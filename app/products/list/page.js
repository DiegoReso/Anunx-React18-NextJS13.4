'use client'

import { Container, Typography, InputBase, IconButton, Paper, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TemplateDefault from '../../../src/template/Default'
import Card from '../../../src/components/Card';

const stylePaper = {
  display: 'flex',
  mt: '50px'
}

const List =()=>{
  return(
    <>

<TemplateDefault>
      <Container 
        maxWidth="md">
        <Paper
          sx={stylePaper}
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
        <Typography 
          sx={{mt: '20px'}} component="h3" variant="h4"       align="center" color="textPrimary"> 
          Anúncios
        </Typography>

        <Typography 
          sx={{mt: '20px'}} component="h5" variant="h6"       align="center" color="textPrimary"> 
          Encontrado 3 anúncios
        </Typography>


      <Grid
          container
          spacing={2}
          sx={{mt: '50px'}}
          >

        <Grid item sx={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/500x500/?nyc'}   
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
     

     <Container>
      <Grid>
        <Grid item>


        </Grid>
      </Grid>
     </Container>


    </>
  )
}

export default List