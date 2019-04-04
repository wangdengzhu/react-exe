import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './switch'
import { connect } from './react-redux'
// import { Router, Route, Link } from 'react-router'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content