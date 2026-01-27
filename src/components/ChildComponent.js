import React from "react";




function ChildComponent(props){

    function clickHandler(){
        console.log('button clicked')
    }
return(
    <div>
        <button onClick={()=>props.greetHandler('child')}>Greet parent</button>
    </div>
)

}

export default ChildComponent