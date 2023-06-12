'use client'

import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Typography, CircularProgress } from '@mui/material'
import TemplateDefault from '../../../src/template/Default'
import Link from 'next/link'

import { Formik } from 'formik'
import {initialValues, validationSchema} from './formValidationSignIn'
import axios from 'axios'

import useToasty from '../../../src/contexts/Toasty'
import { useRouter } from 'next/navigation'

const styleBox = {
  bgcolor: 'white',
  borderRadius: '12px',
  p: '10px',
  mb: '10px'
}


const SignIn =()=>{

  const {setToasty} = useToasty()
  
  const router = useRouter()

  const handleFormSubmit = async values => {
    const response = await axios.post('/api/users', values)

    if (response.data.success){
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastrado com sucesso'
      })
      router.push('/auth/signin')
    }
  }


  return(
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
          })=>{
            

         return(
          <form onSubmit={handleSubmit}>       
            <Container maxWidth="md">
              <Box sx={styleBox}>
              <Typography
                align='center' 
                component="h2" 
                variant="h2">
                Entre na sua conta!
              </Typography>
              
              <FormControl
                error={errors.email && touched.email}
                sx={{mt:'20px'}}
                fullWidth>
                <InputLabel>
                  Email
                </InputLabel>
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                >
                  Email
                </Input>
                <FormHelperText>
                  {errors.email}
                </FormHelperText>
              </FormControl>

              <FormControl
                error={errors.password && touched.password}
                sx={{mt:'20px'}}
                fullWidth>
                <InputLabel>
                  Senha
                </InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}>
                  Senha
                </Input>
                <FormHelperText>
                  {errors.password}
                </FormHelperText>
              </FormControl>

             
              {
                isSubmitting
                ? (
                  <Box 
                    sx={{display: 'flex',
                    justifyContent: 'center',
                    mt:'20px'
                    }}>
                    <CircularProgress/> 
                 </Box>)
                : (
                <Button
                  sx={{mt:'20px'}}
                  type="submit"
                  variant='contained'
                  fullWidth>
                  Cadastrar 
                 </Button>
                )
              }
             
              
              <Typography
                sx={{mt:'20px'}}>
                Não tem uma conta? 
                <Link 
                  className="listStyle" 
                  href="/signup" 
                  passHref>
                    Entre aqui
                </Link>
              </Typography>
              </Box>
              
            </Container>
            </form>
              )
            }
          }
            </Formik>
          </TemplateDefault>
  )
}


export default SignIn