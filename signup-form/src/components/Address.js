import React, {useState} from 'react';
import { Formik, Form, useFormik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  '@global': {
      body: {
          backgroundColor: theme.palette.common.white,
      },
  },
  paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
  },
  form: {
      width: '100%',
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
  divider:{
      marginBottom: 4,
  }
}));

let schema = yup.object().shape({
  firstName: yup.string().required('This field is required.'), 
  lastName: yup.string().required('This field is required.'), 
  email: yup.string().email().required('This field is required.'), 
  password: yup.string()
      .min(6, 'Password is too short.')
      .max(20, 'Password is too long.')
      .required('This field is required.')
});


function Address() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Formik 
                    initialValues={{
                      firstName:'',
                      lastName:'',
                      email:'',
                      password:''
                    }} 
                    validationSchema={schema} 
                    onSubmit ={(values)=>{
                        console.log('submitted',values)}
                }>
                  {({ handleSubmit, handleChange, errors, touched})=>(
                  <Form className={classes.form} onSubmit={handleSubmit}>
                        <Grid item xs={12} className={classes.divider}>
                            <Field
                                as = {TextField}
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                label="First Name"
                                helperText={<ErrorMessage name='firstName'/>}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <Field
                                as = {TextField}
                                error={errors.lastName && touched.lastName}
                                onChange={handleChange}
                                helperText={errors.lastName && touched.lastName ? errors.lastName : null}
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                as = {TextField}
                                error={errors.email}
                                onChange={handleChange}
                                helperText={errors.email ? errors.email : null}
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={errors.password}
                                onChange={handleChange}
                                helperText={errors.password ? errors.password : null}
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                </Form>
                  )}
              </Formik>
            </div>
        </Container>
  );
}

export default Address;

