import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>welcome shudeep</div>
    ) : (
      <div>welcome guest </div>
    );
    // let message
    // if(this.state.isLoggedIn){
    //     message='welcome shudeep'

    // }else{
    //     message='welcome guest'

    // }
    // return(
    //     <div>{message}</div>
    // )

    // return (
    //   <div>
    //     <div> Welcome shudeep  </div>
    //     <div>Welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
