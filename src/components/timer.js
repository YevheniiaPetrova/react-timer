import React, {useState, useEffect} from "react";

const Timer = ({time, step, autostart, onTick}) => {
    const [timer, setTimer] = useState(time);
    const [timerOn, setTimerOn] = useState();
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        if (autostart) {
        setTimerOn(true);
        }
    }, [])
    
    
    useEffect(() => {
         if (timerOn) {
             setIntervalId(setInterval(() => { setTimer((prev) => prev - 1) }, step));
             console.log('Timer started');
             onTick(timer);
         } else if (timerOn === false){
             console.log('Timer paused');
             clearInterval(intervalId);
            }
    }, [timerOn]);

    useEffect(() => {
        if (timerOn && timer > 0) {
            onTick(timer)
        }
    }, [timer]);

    const timerStop = () => {
        console.log('Timer stopped');
        clearInterval(intervalId);
        setTimer(time);
        setTimerOn('');
    };

    if (timer === 0) {
        console.log('Time is up!');
    } else if (timer < 0) {
        clearInterval(intervalId);
        setTimer(time);
        setTimerOn('');
    }



    return <div className="timer">
        <p>{timer}</p>
        <button onClick={() => { setTimerOn(!timerOn) }}>{timerOn ? 'Pause' : 'Start'}</button>
        <button onClick={timerStop}>Stop</button>

</div>
}

export default Timer