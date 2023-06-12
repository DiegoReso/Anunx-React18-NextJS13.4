'use client'

import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Typography, CircularProgress } from '@mui/material'
import TemplateDefault from '../../../src/template/Default'
import Link from 'next/link'

import { Formik } from 'formik'
import {initialValues, validationSchema} from './formValidationSignUp'
import axios from 'axios'

import useToasty from '../../../src/contexts/Toasty'
import { useRouter } from 'next/navigation'

const styleBox = {
  bgcolor: 'white',
  borderRadius: '12px',
  p: '10px',
  mb: '10px'
}


const SignUp =()=>{

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
                Crie sua conta
              </Typography>
              <Typography
                component="p"
                align='center'>
                E anuncie para todo o Brasil
              </Typography>
              <FormControl
                error={errors.name && touched.name}
                sx={{mt:'30px'}}
                fullWidth>
                <InputLabel >
                  Nome
                </InputLabel>
                <Input
                  name="name"
                  value={values.name}
                  onChange={handleChange}>
                  Nome
                </Input>
                <FormHelperText>
                  {errors.name}
                </FormHelperText>
              </FormControl>

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

              <FormControl
                error={errors.confirm_password && touched.confirm_password}
                sx={{mt:'20px'}}
                fullWidth>
                <InputLabel>
                  Confirmar Senha
                </InputLabel>
                <Input
                  type="password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}>
                  Confirmar Senha
                </Input>
                <FormHelperText>
                  {errors.confirm_password}
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
                Já tem uma conta? 
                <Link 
                  className="listStyle" 
                  href="/signin" 
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


export default SignUp