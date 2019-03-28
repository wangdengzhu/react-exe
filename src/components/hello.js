import React, { Component } from 'react';
import '../assets/css/welcome.css';
class Hello extends Component{
  render(){
    return(
      <div>
        <Lesson/>
        <PercentageApp/>
        <PercentageApp/>
      </div>
    )
  }
}
class Lesson extends Component {
  constructor(){
    super();
    this.state = {
      value: []
    }
  }
  onSubmit(obj){
    this.state.value.push(obj);
    this.setState({
      value: this.state.value
    })
  }
  render(){
    return(
      <div>
        <InputList toSubmit={this.onSubmit.bind(this)}/>
        {
          this.state.value.map((item,i)=>
            <LessonsList key={i} lesson={item}/>
          )
        }
      </div>
    );
  }
}

class LessonsList extends Component {
  render(){
    const {lesson} = this.props;
    return(
      <div >
        <p>{lesson.name}:{lesson.content}</p>  
      </div>
    );
  }
}
class InputList extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      content: '',
    }
  }
  changeName=(e)=>{
    this.setState({
      name: e.target.value
    });
  }
  changeCon=(e)=>{
    this.setState({
      content: e.target.value
    });
  }
  handleClick(a){
    const {name, content} = this.state;
    if('' === name.trim()){
      alert('请输入姓名');
      return;
    }
    if('' === content.trim()){
      alert('请输入内容');
      return;
    }
    this.props.toSubmit({name,content});
    this.setState({
      name: '',
      content: ''
    })
  }
  keyDown=e=>{
    if(e.keyCode === 13){
      this.handleClick();
      e.target.blur();
    }
  }
  render(){
    return(
      <div>
        <div className="input-box">
          姓名：
          <input className="input" type="text" value={this.state.name} onChange={this.changeName}/>
        </div>
        <div className="input-box">
          内容：
          <input type="text" value={this.state.content} onChange={this.changeCon} onKeyDown={this.keyDown}/>
        </div>
        <div className="input-box text-right">
          <button onClick={this.handleClick.bind(this)}>发布</button>
        </div>
        <div>
          <Box content={(a)=><span>{a}</span>}/>
        </div>
      </div>
    );
  }
}
function Box(props){
  const transfer = ['过去没有','过去了'];
  return (
    <div>
      <span>{props.content(transfer)}see it?</span>
    </div>
  )
}

class Input extends Component {
  changeVal(e){
    this.props.trans( e.target.value);
  }
  render () {
    return (
      <div>
        <input type='number' onChange={this.changeVal.bind(this)} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    return (
      <div>{(this.props.content/100).toFixed(2)}%</div>
    )
  }
}

class PercentageApp extends Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }
  transfer(val){
    this.setState({
      value: val
    })
  }
  render () {
    return (
      <div>
        <Input trans={this.transfer.bind(this)}/>
        <PercentageShower content={this.state.value}/>
      </div>
    )
  }
}
export default Hello;