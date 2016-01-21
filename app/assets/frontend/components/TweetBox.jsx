import React from "react";
import TweetActions from "../actions/TweetActions"

export default class TweetBox extends React.Component {
  sendTweet(event){
    event.preventDefault();
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendTweet.bind(this)}>
          <textarea ref="tweetTextArea" />
          <label>What's happening?</label>
          <button type="submit">Tweet</button>
        </form>
      </div>
    )
  }
}