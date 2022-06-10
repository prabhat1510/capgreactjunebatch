import React , {useState} from "react";

function Car(){
    /**
    const [brand,setBrand] = useState("Volvo");
    const [model,setModel] = useState("XC90");
    const [year,setYear] = useState("2021");
    const [color,setColor] = useState("white");

    return (
        <>
            <h1>My {brand} !</h1>
            <p> It is {color} {model} from {year}</p>
        </>
    );

     */

    const [car ,setCar] = useState({
        brand: "Honda",
        model: "City",
        year: "2022",
        color: "red"

    });

    const updateColor =()=>{

        setCar(previousSate =>{ return { ...previousSate, color: "white"}});
    }
    return (
        <>
            <h1>My {car.brand} !</h1>
            <p> It is {car.color} {car.model} from {car.year}</p>

            <button type="button" onClick={()=>updateColor()}>
            Update Color
        </button>
        </>
    );

}
export default Car;