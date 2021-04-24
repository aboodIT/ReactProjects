import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Templatefield from './Template'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(4),
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
    divider: {
        marginBottom: 10,
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


function PersonalInfo({ step, setForm, state }) {

    const classes = useStyles();
    console.log(state)
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Formik
                    initialValues={state}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        setForm({ ...values })
                        console.log("state", state)
                        step(s => s + 1)
                    }
                    }>
                    <Form className={classes.form}>
                        <Grid container spacing={1}>
                            <Grid item xs={6} className={classes.divider}>
                                <Templatefield
                                    name="firstName"
                                    label="First Name"
                                />

                            </Grid>
                            <Grid item xs={6} className={classes.divider}>
                                <Templatefield
                                    name="lastName"
                                    label="Last Name"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.divider}>
                            <Templatefield
                                name="email"
                                label="Email"
                                type='email'
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.divider}>
                            <Templatefield
                                name="password"
                                label="Password"
                                type='password'
                            />
                        </Grid>

                        <Button
                            type="submit"
                            id="next"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Next
                    </Button>
                    </Form>
                </Formik>
            </div>
        </Container>
    );
}

export default PersonalInfo;


