/**
 * The useEffect Hook allows you to perform side effects in your components
 * Example of side effects are : fetching dat, directly updating the DOM and timers
 * 
 * This useEffect accepts two arguments. The 2nd argument is optional
 * useEffect(<function>,<dependency>)
 */
import {useState , useEffect} from 'react';

function Timer(){
    const [count, setCount] = useState(0);
    //We have passed any dependency in useEffect function , so it runs on every render
    /**
    useEffect(
        ()=>{
            setTimeout(()=>{
                setCount((count) => count + 1);
            },1000);
            }
    );*/
    //An empty array is passed as 2nd argument. It runs only on the first render
    useEffect(
        ()=>{
            setTimeout(()=>{
                setCount((count) => count + 1);
            },1000);
            },[]
    );
    return <h1> I've rendered {count} times !</h1>
}

export default Timer;