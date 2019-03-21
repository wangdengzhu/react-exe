import React, { Component } from 'react';

class Welcome extends Component{
  
  render(){
    const num = this.props.names;
    const isshow = true;
    const list = num.map((item,i)=>{
      return <div className="welcome" key={i} onClick={this.props.clickme}>welcome to my home! {item}</div>
    })
    if(isshow){
      return(
        list
      );
    }else{
      return(
        <h2>not show</h2>
      );
    }
    
  }
}

export default Welcome;
