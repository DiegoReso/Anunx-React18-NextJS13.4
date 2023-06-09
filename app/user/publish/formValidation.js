import * as yup from 'yup'


 const initialValues={
  title: '',
  category: '',
  description: '',
  price: '',
  name: '',
  email: '',
  phone:'',
  files: [],
}


const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100,'Título muito grande')
    .required('Campo Obrigatório'),

  category: yup.string().required('Campo Obrigatório'),

  description: yup.string()
    .min(50, 'Escreva uma descrição com min 50 caracteres')
    .required('Campo Obrigatório'),

  price: yup.number()
    .required('Campo Obrigatório'),

  name: yup.string()
    .required('Campo Obrigatório'),

  email: yup.string()
    .email('Digite um email válido')
    .required('Campo Obrigatório'),

  phone: yup.number()
    .required('Campo Obrigatório'),

  files: yup.array()
    .min(1, 'Envie pelo menos uma foto')
    .required('Obrigatório')
})

export {
  initialValues,
  validationSchema
}