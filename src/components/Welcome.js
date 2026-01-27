
import React, { Component } from "react";

class Welcome extends Component {

    
  render() {
      const {name,heroName}=this.props
    return <h1>Welcome form {name}</h1>
  }
}

export default Welcome