import React from 'react'
import { useState, useEffect } from 'react';

const Timer2 = () => {
    //const {initialMinute = 0,initialSeconds = 10} = props;
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
    const [contador, setContador ] =  useState(1);
    
    useEffect(()=>{
    let myInterval = setInterval(() => {
        
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                setContador(contador+1)
                if(contador===1){
                    clearInterval(myInterval)
                    setMinutes('0');
                    setSeconds('5');
                }else{
                    if(contador===2)
                        clearInterval(myInterval)
                        setMinutes('0');
                        setSeconds('10');

                }
                   
                   
                
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div style={{textAlign: 'center'}}>
        { minutes === 0 && seconds === 0
            ? null
            : <h1 style={{fontSize: '100px'}}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer2;