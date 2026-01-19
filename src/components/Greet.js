import React from "react";

// function Greet(){

// return <h1>Hello shuedeep</h1>
// }
const Greet = (props) => {
    return <div>
        <h1>hello {props.name}</h1>
        <p>{props.children}</p>
        </div>
}
export default Greet;