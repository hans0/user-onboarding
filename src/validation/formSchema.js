import * as yup from 'yup';



const formSchema = yup.object().shape({
  // Name
  name: yup.string()
    .required('Name is required')
    .min(1, 'Must be 1+ character(s)'),
  // Email
  email: yup.string()
    .email('Must be a valid e-mail address')
    .required('Email required'),  
  // Password
  password: yup.string()
    .min(8, 'Password must be at leat 8 characters'),
  // Terms of Service (checkbox)
  tos: yup.boolean()
    .oneOf([true], 'You must agree to the Terms of Service')
  
})

export default formSchema;

