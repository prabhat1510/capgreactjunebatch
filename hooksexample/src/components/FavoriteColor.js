/**
 * Hooks were added to React in version 16.8
 * 
 * It allows function components to have access to state and 
 * other React features
 *  
 * Hooks allow us to "hook" into React features 
 * such as state and lifecycle methods.
 * useState is one of the hooks available in 'react' module
 * 
 * There are 3 rules for Hooks:
 * It can only be called inside React function components.
 * It can only be called at the top level of a component.
 * It cannot be conditional
 * Note: Hooks will not work in React class components
 * 
 * If you have stateful logic that needs to be reused in several components, 
 * you can build your own custom Hooks.
 */

 // here we are using useState Hook to keep track of the application state
 //State generally refers to data or properties that need to be tracking in an application
import React ,{useState} from 'react';// We are destructuring useState from react as it is a name export
function FavoriteColor(){
    //initializing useState
    /**
     * useState accepts an initial state and returns two values
     * 1. The current state.
     * 2. A function that updates the state
     */
   const [color ,setColor] = useState("red"); 
   
   return (
    <>
        <h1> My favorite color is  {color} !</h1>
        
        <button type="button" onClick={()=>setColor("blue")}>
            Blue
        </button>
        <button type="button" onClick={()=>setColor("red")}>
            Red
        </button>

        <button type="button" onClick={()=>setColor("pink")}>
            Pink
        </button>
        <button type="button" onClick={()=>setColor("green")}>
            Green
        </button>
    </>
   );
}

export default FavoriteColor;