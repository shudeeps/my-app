
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {

  constructor(){
        super()
        this.state={
            parentName:'parent'
        }
         this.greetParent=this.greetParent.bind(this);
    }
    greetParent(childName){
        alert('Hello '+ this.state.parentName +' from  '+ `${childName}`)
    }
   
    
  render() {
    return (
    <div>
        <h1>Welcome</h1>
        <ChildComponent greetHandler={this.greetParent}/>
    </div>
    )
  }
}

export default ParentComponent