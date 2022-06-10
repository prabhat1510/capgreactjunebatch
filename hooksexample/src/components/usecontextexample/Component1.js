import {useState} from 'react';
import Component2 from './Component2';
function Component1(){
    const[user, setUser] = useState("Rachita");

    return (
        <>
            <h1> {`Hello ${user} !`}</h1>
            <Component2 user={user} />
        </>
    );
}

export default Component1;