'use client'

import { 
  Button,
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Container, 
  Grid, 
  Typography } from '@mui/material'

import TemplateDefault from '../../../src/template/Default'

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
            <Card>
              <CardMedia
                component="img"
                image={'https://source.unsplash.com/random/140x140/?products'}
                title="Titulo da imagem"
                sx={{height: 140}}
              />
              <CardContent>
                <Typography variant='h5' component="h2">
                  Produto x
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Editar
                </Button> 
                <Button size="small">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={'https://source.unsplash.com/random/140x140/?products'}
                title="Titulo da imagem"
                sx={{height: 140}}
              />
              <CardContent>
                <Typography variant='h5' component="h2">
                  Produto x
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Editar
                </Button> 
                <Button size="small">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={'https://source.unsplash.com/random/140x140/?products'}
                title="Titulo da imagem"
                sx={{height: 140}}
              />
              <CardContent>
                <Typography variant='h5' component="h2">
                  Produto x
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Editar
                </Button> 
                <Button size="small">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={'https://source.unsplash.com/random/140x140/?products'}
                title="Titulo da imagem"
                sx={{height: 140}}
              />
              <CardContent>
                <Typography variant='h5' component="h2">
                  Produto x
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Editar
                </Button> 
                <Button size="small">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>


        </Grid>
      </Container>
    </TemplateDefault>
      
  )
}
