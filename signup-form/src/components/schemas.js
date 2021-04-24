import * as yup from 'yup';

let schema1 = yup.object().shape({
    firstName: yup.string().required('This field is required.'), 
    lastName: yup.string().required('This field is required.'), 
    email: yup.string().email().required('This field is required.'), 
    password: yup.string()
        .min(6, 'Password is too short.')
        .max(20, 'Password is too long.')
        .required('This field is required.')
  });

let schema2 = yup.object().shape({
    street: yup.string().required('This field is required.'), 
    steet2: yup.string(), 
    city: yup.string().required('This field is required.'), 
    province: yup.string()
        .required('This field is required.')
  });

let schema = [schema1,schema2]
export default schema