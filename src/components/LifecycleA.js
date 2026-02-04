
import React, { Component } from "react";


export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'shudep'
      }
    }
  render() {
    return (
      <div>
       
        LifecycleA
      </div>
    )
  }
}

export default LifecycleA