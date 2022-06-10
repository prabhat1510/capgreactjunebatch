import Component4 from './Component4';
import { useContext } from "react";
import {UserContext} from './Component1';

function Component3(){
    const user = useContext(UserContext);
    return (
        <>
            <h1> Component 3</h1>
            <h2> {`Hello ${user} again !`}</h2>
            <Component4 />
        </>
    );
}

export default Component3;