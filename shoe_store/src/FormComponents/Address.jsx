import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Templatefield from './template'

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
    street: yup.string().required('This field is required.'),
    steet2: yup.string(),
    city: yup.string().required('This field is required.'),
    province: yup.string()
        .required('This field is required.')
});



function PersonalInfo({ step, setForm, state }) {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Formik
                    initialValues={state}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        setForm({ ...values })
                        console.log(state)
                        step(s => s + 1)
                    }
                    }>
                    <Form className={classes.form}>
                        <Grid container spacing={1}>
                            <Grid item xs={6} className={classes.divider}>
                                <Templatefield
                                    name="street"
                                    label="Address Line 1"
                                />

                            </Grid>
                            <Grid item xs={6} className={classes.divider}>
                                <Templatefield
                                    name="street2"
                                    label="Address Line 2"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.divider}>
                            <Templatefield
                                name="city"
                                label="City"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.divider}>
                            <Templatefield
                                name="province"
                                label="Province"
                            />
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} className={classes.divider}>
                                <Button
                                    onClick={() => { step(0) }}
                                    id="back"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Back
                        </Button>
                            </Grid>
                            <Grid item xs={6} className={classes.divider}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    id="next"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Next
                        </Button>
                            </Grid>
                        </Grid>

                    </Form>
                </Formik>
            </div>
        </Container>
    );
}

export default PersonalInfo;


