import React from "react";

// function Greet(){

// return <h1>Hello shuedeep</h1>
// }
const Greet = (props) => {
    const {name,Heroname}=props;

    return <div>
        <h1>hello {name}</h1>
        <p>{props.children}</p>
        </div>
}
export default Greet;