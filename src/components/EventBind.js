
import React, { Component } from "react";

class EventBind extends Component {

      constructor(props){
        super(props)
        this.state={
            message: 'Hello'
        }
    } 

    clickHandler(){
        this.setState({
            message:'goodbye'

        })
        console.log('this button is clicked')
    }

    
  render() {
    
    return (
        <div>
            <div>{this.state.message}</div>
                    <button onClick={() =>this.clickHandler()}>Click mee1</button>
        </div>
    )
  }
}

export default EventBind