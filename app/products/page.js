'use client'

import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@mui/material'
import TemplateDefault from '../../src/template/Default'

const styleBox = {
  bgcolor: 'white',
  borderRadius: '12px',
  p: '10px',
  mb: '10px'
}

const Products =() =>{
  return(
   <TemplateDefault>
      <Container maxWidth="lg" >
        <Grid container spacing={3}> 
          <Grid item xs={8}>
            <Box sx={styleBox}>
              Carrosel
            </Box>
         

        
            <Box sx={styleBox}>
              <Typography component="span" variant="caption" >Publicado 16 de junho de 2021</Typography>
                
              <Typography component="h4" variant="h4" >Jaguar XE 2.0 </Typography>

              <Typography component="h4" variant="h4" >R$ 50.000,00</Typography>
              
              <Chip label="Categoria"/>
            </Box>

            <Box sx={styleBox}>
              <Typography component="h6" variant="h6" >Descrição</Typography>

              <Typography  ypography component="p" variant="body2" >

                Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Mé faiz elementum girarzis, nisi eros vermeio.Quem manda na minha terra sou euzis!

                Manduma pindureta quium dia nois paga.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

              </Typography>

            </Box>
          </Grid>

          <Grid item sx={4}>
            <Card sx={styleBox} elevation={0}>
              <CardHeader 
                avatar={
                  <Avatar>T</Avatar>
                }
                title="Diego Reis"
                subheader="diegoreso@me.com"
              />
              <CardMedia
                image="https://source.unsplash.com/random/500x500/?brazil"
                title="Diego Reis"
              />
            </Card>
            
            <Box sx={styleBox}>

              <Typography component="h6" variant="h6">
                Localização
              </Typography>

            </Box>

          </Grid>

        </Grid>
      </Container>
   </TemplateDefault>
  )
}


export default Products