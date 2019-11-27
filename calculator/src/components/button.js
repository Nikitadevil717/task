import React from 'react';

export default class Button extends React.Component{
  render(){
    let classes = ['defaultButton'];
    classes.push(this.props.className);
    return (
      <button type="button" className={classes.join(' ')} onClick={(e) => this.props.onClick(e, this.props.label)}>
        {this.props.label}
      </button>
    );
  }
};