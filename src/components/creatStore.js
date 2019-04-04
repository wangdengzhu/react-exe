import React,{Component} from 'react';
function create(state,change){
  const listeners = [];
  const subscribe = (listener)=>listeners.push(listener)
  const getState = ()=>state;
  const dispatch = (action)=>{
    change(state,action);
    listeners.forEach(item => {
      item();
    })
  }
  debugger
  return {getState, dispatch, subscribe}
}
create(1,tell(111));
function tell(a){
  console.log(a)
}
class Index extends Component{
  constructor(){
    super();
    this.state = {
      color: '#f00'
    }
  }
  handleChangeColor(){
    this.setState({
      color: '#0f0'
    })
  }
  render(){
    return(
      <div>
        <h2 style={{color: this.state.color}}>满金店</h2>
        <button onClick={this.handleChangeColor.bind(this)}>change</button>
      </div>
    )
  }
}

export default Index;