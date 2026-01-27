
import React, { Component } from "react";

class ClassClick extends Component {

    clickHandler(){

        console.log('this button is clicked')
    }

    
  render() {
    
    return (
        <div>
                    <button onClick={this.clickHandler}>Click mee</button>
        </div>
    )
  }
}

export default ClassClick