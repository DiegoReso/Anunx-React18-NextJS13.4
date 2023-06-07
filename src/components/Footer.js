import { Container, Grid, Box, Typography } from "@mui/material"
import Link from "next/link"



const Footer = () =>{

  return(
    <Container 
      maxWidth="lg" 
      component="footer"
      sx={{
        position: 'absulute',
        botton: 0,
        borderTop: '1px solid grey',
        p:'50px',
        mt: '30px'
      }}
      >
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref  className="listStyle">  
            <Typography  variant="subtitle1">
              Ajuda e Contato
            </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref className="listStyle">
              <Typography  variant="subtitle1">
                Dicas de Segurança
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref className="listStyle">
              <Typography  variant="subtitle1">
                Vender e Publicar
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref className="listStyle">
              <Typography variant="subtitle1">
                Sobre Nós
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}


export default Footer