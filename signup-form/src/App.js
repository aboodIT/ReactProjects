import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from './components/PersonalInfo';
import Address from './components/Address';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Review from './components/Review'
import FinalStep from './FinalStep'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal Info', 'Address', 'Review'];
}

function getStepContent(stepIndex,setActiveStep,setstate,state) {
  switch (stepIndex) {
    case 0:
      return <PersonalInfo step={setActiveStep} setForm={setstate} state={state} />;
    case 1:
      return <Address step={setActiveStep} setForm={setstate} state={state}/>;
    case 2:
      return <Review step={setActiveStep} state={state}/>;
    default:
      return <FinalStep></FinalStep>;
  }
}

export default function App() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setstate] = useState({})
  const steps = getSteps();
  
  

  return (
    <div><div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Form
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep,setActiveStep,setstate,state)}  
      
    </div>
    </div>
  );
}
