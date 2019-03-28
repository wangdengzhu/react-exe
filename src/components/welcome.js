import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.show,
      name: 'jjj',
      inputVal: ''
    }
    //this.showName = this.showName.bind(this);
  }
  // componentDidCatch(){
  //   alert('compnentDidCatch');
  // }
  // componentDidUpdate(){
  //   alert('componentDidUpdate');
  // }
  // componentDidMount(){
  //   alert('componentDidMount');
  // }
  // componentWillMount(){
  //   alert('componentWillMount');
  // }
  // componentWillUnmount(){
  //   alert('componentWillUnmount');
  // }
  // componentWillUpdate(){
  //   alert('componentWillUpdate');
  // }
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps);
  // }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps, nextState)
  //   return false;
  // }

  showName=(e)=>{
    this.setState(prevState => ({
      value: !prevState.value,
      name: prevState.name + 'kkk'
    }));
  }
  handleChange = (e)=>{
    this.setState({
      inputVal: e.target.value
    })
  }
  render(){
    const isshow = this.state.value;
    let list;
    if(!isshow){
      list = this.props.names.map((item,i)=>{
        return <div className="welcome" key={i} onClick={this.showName}>welcome to my home! {item}</div>
      });
    }else{
      list = this.props.name.map((item,i)=>{
        return <h2 onClick={this.showName} key={i+'id'}>{this.state.name}</h2>
      });
    }
    return(
      <div>
        {!isshow ? 
        (<div>hhh</div>) :
        (<div>
          {list}
          <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
          <div>{this.state.inputVal}</div>
          <textarea value={this.state.inputVal}  onChange={this.handleChange}/>
          <Button warn={this.state.value} text="login it"/>
        </div>)}
        <NumberList numbers={[1,2,3]} values={['a','b','c']}/>
        <My.picker value='my choose'></My.picker>
        <ListOfTenThings nice="beautiful" login={(userName)=><span>please login {userName}</span>}></ListOfTenThings>
        <p>{this.props.children}+++</p>
      </div>
    );
  }
}
Welcome.defaultProps = {
  name1: ['you can\'t see me', 'oh my god', 'good luck to you'],
  names: ['wangdeng','denzel','jack', 'rose']
}
Welcome.propTypes = {
  name: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired
}
function ListItem(props) {
  // 对啦！这里不需要指定key:
  return <li>{props.children}</li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number,i) =>
    // 又对啦！key应该在数组的上下文中被指定
    <ListItem key={number.toString()}>
      <b>{props.values[i]}</b><hr/>
    </ListItem>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
function Button(props){
  return(
    <button>{props.text}</button>
  )
}

const My = {
  picker: function(props){
    return <div>Hello {props.value}</div>
  }
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings(props) {
  const user = 'wangdenzel';
  return (
    <div>
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
      <div>{props.login(user)} {props.nice}</div>
    </div>
  );
}
export default Welcome;
