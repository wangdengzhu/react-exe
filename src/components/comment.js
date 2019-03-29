import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/welcome.css';
class Comment extends Component{
  constructor(){
    super();
    this.state = {
      comments: []
    }
  }
  componentWillMount(){
    let storage = JSON.parse(localStorage.getItem('comments')) || [];
    this.setState({
      comments: storage
    })
  }
  render(){
    return(
      <div>
        <Lesson data={this.state.comments}/>
        {false && <PercentageApp/>}
      </div>
    )
  }
}
class Lesson extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: this.props.data
    }
  }
  onSubmit(obj){
    this.state.comments.push(obj);
    this.setState({
      comments: this.state.comments
    })
  }
  render(){
    return(
      <div>
        <InputList toSubmit={this.onSubmit.bind(this)}/>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}
class Comments extends Component{
  constructor(props){
    super(props);
    this.state = {
      comments: this.props.comments
    }
  }
  onDelete(index){
    this.state.comments.splice(index,1);
    this.setState({
      comments: this.state.comments
    });
    localStorage.setItem('comments',JSON.stringify(this.state.comments));
  }
  render(){
    return(
      <div>
        {
          this.state.comments.map((item,i)=>
            <LessonsList key={i} lesson={item} index={i} onDelete={this.onDelete.bind(this)}/>
          )
        }
      </div>
    );
  }
}
class LessonsList extends Component {
  static propTypes = {
    lesson: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.lesson.time,
      index: this.props.index
    }
  }
  componentWillMount(){
    this.timer = setInterval(() => {
      this.setState({
        time: this.props.lesson.time
      })
    }, 3000);
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  deleteComment(){
    if(this.props.onDelete){
      this.props.onDelete(this.state.index)
    }
  }
  render(){
    const {lesson} = this.props;
    const duration = (Date.now() - lesson.time)/1000;
    const time = duration > 60
    ? `${Math.round(duration / 60)} 分钟前`
    : `${Math.round(Math.max(duration, 1))} 秒前`
    return(
      <div>
        <div className="comment-list">
          <p><span className="user-name">{lesson.name}</span> ： {lesson.content}</p>
          <div className="time">{time}</div>
          <div className="delete"><span onClick={this.deleteComment.bind(this)}>删除</span></div>
        </div>
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
      time: Date.now()
    }
  }
  changeName=(e)=>{
    this.setState({
      name: e.target.value,
      time: Date.now()
    });
  }
  changeCon=(e)=>{
    this.setState({
      content: e.target.value,
      time: Date.now()
    });
  }
  handleClick(a){
    const {name, content, time} = this.state;
    if('' === name.trim()){
      return alert('请输入姓名');
    }
    if('' === content.trim()){
      return alert('请输入内容');
    }
    if(this.props.toSubmit){
      this.props.toSubmit({name,content,time});
    }
    let storage = JSON.parse(localStorage.getItem('comments')) || [];
    storage.push({name,content,time});
    localStorage.setItem('comments',JSON.stringify(storage));
    this.setState({
      content: ''
    })
  }
  keyDown=e=>{
    if(e.keyCode === 13){
      this.handleClick();
      e.target.blur();
    }
  }
  nameBlur=e=>{
    localStorage.setItem('user',e.target.value);
  }
  componentWillMount(){
    const user = localStorage.getItem('user');
    if(user){
      this.setState({
        name: user
      })
    }
  }
  componentDidMount(){
    this.input.focus();
  }
  render(){
    return(
      <div>
        <div className="input-box">
          姓名：
          <input className="input" type="text" value={this.state.name} onChange={this.changeName} onBlur={this.nameBlur}/>
        </div>
        <div className="input-box">
          内容：
          <input type="text" value={this.state.content} onChange={this.changeCon} onKeyDown={this.keyDown} ref={input=>this.input = input}/>
        </div>
        <div className="input-box text-right">
          <button onClick={this.handleClick.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
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
export default Comment;