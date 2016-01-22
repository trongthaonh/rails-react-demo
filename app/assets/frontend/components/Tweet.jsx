import React from "react";

export default class Tweet extends React.Component {
  render() {
    return (
      <li>{this.props.body}</li>
    )
  }
}