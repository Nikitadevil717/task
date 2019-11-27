import React from 'react';

export default class Screen extends React.Component{
  render(){
    return (
      <div id="display">
        <span className="clean" onClick={this.props.onClickClean}>x</span>
        {this.props.displayText}
      </div>
    );
  }
}