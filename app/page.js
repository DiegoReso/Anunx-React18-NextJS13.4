'use client'

import { Container, Typography, InputBase, IconButton, Paper, Grid,Card,CardMedia, Button,CardContent, CardActions } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TemplateDefault from '../src/template/Default'

export default function Home() {
  return (
   
    <TemplateDefault>
      <Container 
        sx={{mt: '80px'}}
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
            <Card>
              <CardMedia
                component="img"
                image={'https://source.unsplash.com/random/500x500/?china'}
                title="Titulo da imagem"
                sx={{height: 150}}
              />
              <CardContent>
                <Typography variant='h5' component="h2">
                  Produto x
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
         
            </Card>
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={'https://source.unsplash.com/random/500x500/?brazil'}
                title="Titulo da imagem"
                sx={{height: 150}}
              />
              <CardContent>
                <Typography variant='h5' component="h2">
                  Produto x
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
         
            </Card>
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={'https://source.unsplash.com/random/500x500/?japan'}
                title="Titulo da imagem"
                sx={{height: 150}}
              />
              <CardContent>
                <Typography variant='h5' component="h2">
                  Produto x
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
         
            </Card>
          </Grid>

        </Grid>
      </Container>


    </TemplateDefault>
      
    
  )
}
