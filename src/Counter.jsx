import { useState, useEffect } from "react"

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    function handelCountx(){
        setCountx(countx+1);
    }

    function handelCounty(){
        setCounty(county+1);
    }

    useEffect(function printSomething(){
        console.log("this is side effect");
    },
    [countx]
    );

    return(
        <div>
            <span>
            <h3>countx = {countx}</h3>
            <h3>county = {county}</h3>
            </span>
            <br /><br />
            <span>
            <button onClick = {handelCountx}>x : +1</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick = {handelCounty}>y : +1</button>
            </span>
        </div>
    )
}