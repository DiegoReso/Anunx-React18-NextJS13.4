'use client'

import { Button, Container, Typography } from '@mui/material'
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
            mx: 'auto', 
            display: 'block'
          }}
          variant='contained'>
          Publicar novo Anúncio
        </Button>
      </Container>
    </TemplateDefault>
      
  )
}
