import React, { Component } from 'react';
export default (OldComponent, name) => {
  class NewComponent extends Component{
    constructor(){
      super();
      this.state = {
        data: null
      }
    }
    componentWillMount(){
      const storage = localStorage.getItem(name);
      try {
        this.setState({
          data: JSON.parse(storage)
        })
      } catch (error) {
        this.setState({
          data: storage
        });
      }
    }
    saveData(data){
      try {
        this.setState({data: JSON.stringify(data)})
      } catch (error) {
        this.setState({data})
      }
    }
    render(){
      return(
        <OldComponent data={this.state.data} saveData={this.saveData.bind(this)} {...this.props}/>
      )
    }
  }
  return NewComponent;
}