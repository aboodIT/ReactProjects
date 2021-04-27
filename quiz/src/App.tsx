import React, { useState, useEffect } from 'react';
import './App.css';
import { QuestionService, sentQuestion } from './QuestionService';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      width: "70vw",
      height: "50%",
      fontSize: '110%'
    },
    submit:{
        width: '100%',
        height: 25,
        backgroundColor: '#31314e',
        color: 'white',
    }
  }),
);


function App() {
  const classes = useStyles();
  let [quiz, setquiz] = useState<sentQuestion[]>([])
  let [qnumber, setqnumber] = useState<number>(0)
  let [choice, setchoice] = useState<string>("")
  let [score, setscore] = useState<number>(0)
  let [newGame,setnewGame] = useState<boolean>(true)

  useEffect(() => {
    async function fectchQuestions() {
      const questions: sentQuestion[] = await QuestionService()
      console.log(questions)
      setquiz(questions)
    }
    fectchQuestions()
  }, [newGame]);

  const handleOnSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log("submitted")
    if (quiz[qnumber].answer === choice) {
      setscore(++score)
    } else setscore(score)
    console.log("score", score)
    setqnumber(++qnumber)
  }

  const handleOnChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.value)
    setchoice(e.target.value)
  }

  if (!quiz.length) {
    return <p>Loading...</p>
  }

  const handleOnClick = (e: any) => {
    e.preventDefault();
    setquiz([])
    setscore(0)
    setqnumber(0)
    setnewGame(!newGame)
  }

  if (qnumber > 4) {
    // setnewGame(false)
    return (
      <div>
        <h1>Game Ended</h1>
        <h2>Your Score: {score}</h2>
        <button
          onClick={handleOnClick}
        >New Game</button>
      </div>
    )

  }

  return (
    <div >
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h1>QUIZ</h1>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <p>{quiz[qnumber].question}</p>
            <form onSubmit={handleOnSubmit}>
              {quiz[qnumber].option.map((opt: string) => {
                return (
                  <div key={opt} className="label">
                    <label className="opt">
                      <input
                        type="radio"
                        name="opt"
                        value={opt}
                        onChange={handleOnChange} />
                      {opt}
                    </label>
                  </div>
                )
              })}
              <input type="submit" className={classes.submit} />
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
