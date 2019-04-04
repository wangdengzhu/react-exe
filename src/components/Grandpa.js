import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Link, Route
} from 'react-router-dom'

class Grandpa extends Component{
  static childContextTypes = {
    con: PropTypes.string.isRequired
  }
  // 传递给孙子组件的数据
  getChildContext() {
    return {
      con: 'red'
    }
  }
  render(){
    return(
      <div>
        <Pa />
      </div>
    );
  }
}
class Pa extends Component{
  render(){
    return(
      <div>
        <Child/>
      </div>
    );
  }
}
class Child extends Component{
  // 类型限制，静态属性名字固定
  static contextTypes = {
    con: PropTypes.string
  }
  render(){
    return(
      <div>
        <h3>{this.context.con}你看得到</h3>
      </div>
    );
  }
}
export default Grandpa;
