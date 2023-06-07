'use client'

import { 
  Button, 
  Container, 
  Grid, 
  Typography } from '@mui/material'

import TemplateDefault from '../../../src/template/Default'
import Card from '../../../src/components/Card'


export default function Home() {
  return (
   
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography
          sx={{mt: '50px'}} 
          component="h1" 
          align='center'
          variant="h2">
          Meus Anúncios
        </Typography>
        <Button 
          sx={{
            mt: '50px',
            mx: 'auto', 
            display: 'block'
          }}
          variant='contained'>
          Publicar novo Anúncio
        </Button>
      </Container>

      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          sx={{mt: '50px'}}
          >

          <Grid item sx={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/140x140/?products'}   
              title="Produto x" 
              subtitle="R$ 60,00"  
              actions={
                <>  
                  <Button size="small">
                    Editar
                  </Button> 
                  <Button size="small">
                    Remover
                  </Button>
                </>
              }   
            />
           </Grid>   

           <Grid item sx={12} sm={6} md={4}>
              <Card 
              image={'https://source.unsplash.com/random/140x140/?products'}   
              title="Produto x" 
              subtitle="R$ 60,00"  
              actions={
                <>  
                  <Button size="small">
                    Editar
                  </Button> 
                  <Button size="small">
                    Remover
                  </Button>
                </>
              }   
            />
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/140x140/?products'}   
              title="Produto x" 
              subtitle="R$ 60,00"  
              actions={
                <>  
                  <Button size="small">
                    Editar
                  </Button> 
                  <Button size="small">
                    Remover
                  </Button>
                </>
              }   
            />
          </Grid>


        </Grid>
      </Container>
    </TemplateDefault>
      
  )
}
