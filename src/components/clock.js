import React, { Component } from 'react';
import '../assets/css/welcome.css';

class Clock extends Component {
  constructor(){
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
      timer: null,
      show: !0
    }
  }
  componentWillMount(){
    this.timer = setInterval(()=>{
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render(){
    let time = this.state.time;
    return(
      <div>
        <span>{time}</span>
      </div>
    );
  }
}

class Index extends Component{
  constructor(){
    super();
    this.p = 0;
    this.state = {
      show: !0
    }
  }
  handClick(){
    this.setState({
      show: !this.state.show
    });
    this.loadData().then((e)=>{
      console.log(e);
    });
  }
  async loadData(){
    console.log(1);
    const data = await this.getData();
    return data;
  }
  getData(){
    return new Promise(function(resolve){
      setTimeout(()=>{
        resolve(2);
      },2000)
    })
  }
  render(){
    const con = 'p元素内容'
    return(
      <div>
        <button onClick={this.handClick.bind(this)}>click me</button>
        {
          this.state.show && <Clock/>
        }
        <button onClick={()=>console.log(this.p.clientHeight)}>获取高度</button>
        <p className="set-height" ref={(p)=>this.p = p}>{con}</p>
      </div>
    );
  }
}

export default Index;