'use client'

import { Box } from '@mui/material'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Default =({children})=>{

  return(
    <>
      <Header/>
        <Box
          sx={{
            p:'80px'
          }}
        >
        {children}
        </Box>
      <Footer/>
    </>
  )
}

export default Default