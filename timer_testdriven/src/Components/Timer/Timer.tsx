import React, { useState, useEffect } from 'react';
import TimerButton from '../TimeButton/TimerButton';
import "./Timer.css"

function Timer() {
  let [seconds,setSeconds] = useState<number>(59)
  let [minutes,setMinutes] = useState<number>(24)
  let [isOn,setIsOn] = useState<boolean>(false)
  let [id, setId] = useState<any>(null)


  useEffect(()=>{
    if(isOn){  
    let myInterval = setTimeout(() => {
        if (seconds > 0) {
          setSeconds(seconds-1)}
        if (seconds === 0 && minutes===0) {
          clearInterval(myInterval);}
        if(seconds <= 0) {
          setSeconds(59)
          setMinutes(minutes-1)
        }
          
      },1000)
      setId(myInterval)}
    else(clearInterval(id))
  },[seconds,isOn,minutes])

  const  startTimer = () =>{
    console.log('Starting timer.');
    setIsOn(true)
  }

  function stopTimer() {
    console.log('Stopping timer.');
    setIsOn(false)
  }

 function resetTimer() {
    console.log('Resetting timer.');
    stopTimer();
    setSeconds(0)
    setMinutes(25)
  }
  
    return (
      <div className="timer-container">
          <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
          <div className="timer-button-container">
            <TimerButton className="start-timer" id='start-timer' buttonAction={startTimer} buttonValue={'Start'} />
            <TimerButton className="stop-timer"  id='stop-timer' buttonAction={stopTimer} buttonValue={'Stop'} />
            <TimerButton className="reset-timer" id='reset-timer'buttonAction={resetTimer} buttonValue={'Reset'} />
          </div>
        </div>
  );
  
}

export default Timer;