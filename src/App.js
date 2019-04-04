import React, { Component } from 'react';
import './assets/css/App.css';
// import Welcome from './components/welcome';
// import Comment from './components/comment';
// import Index from './components/clock';
// import Index from './components/creatStore';
// import Grandpa from './components/Grandpa';
import Myrouter from './components/Myrouter';
import './assets/css/welcome.css';
import PropTypes from 'prop-types'
// import Header from './pages/hearder'
// import Content from './pages/content'
// import { Provider } from './pages/react-redux'
function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
  }
  render() {
    // const obj = {
    //   show: true,
    //   name: ['hah']
    // } 
    return (
      // <div className="App">
      //   <header className="App-header">
      //     {/* <Welcome {...obj}>
      //       <span>this is a child</span>
      //     </Welcome> */}
      //     {/* <Comment {...obj}/> */}
      //     {/* <Index/> */}
      //     <Index />
      //   </header>
      // </div>
      <div>
        {/* <Provider store={store}>
          <Header />
          <Content />
        </Provider> */}
        {/* <div className="loading">
            <div className="loading-box">
                <i className="fade-item fade-item1"></i>
                <i className="fade-item fade-item2"></i>
                <i className="fade-item fade-item3"></i>
                <i className="fade-item fade-item4"></i>
                <i className="fade-item fade-item5"></i>
                <i className="fade-item fade-item6"></i>
                <i className="fade-item fade-item7"></i>
                <i className="fade-item fade-item8"></i>
                <i className="fade-item fade-item9"></i>
                <i className="fade-item fade-item10"></i>
                <i className="fade-item fade-item11"></i>
                <i className="fade-item fade-item12"></i>
            </div>
        </div> */}
        {/* <Grandpa /> */}
        <Myrouter/>
      </div>
    );
  }
}

export default App;
