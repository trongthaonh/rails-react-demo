import React from "react";
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import TweetStore from '../stores/TweetStore';
import TweetActions from "../actions/TweetActions";


TweetActions.getAllTweets();


// Prepares an object of data for the state of the component
// We should also do that whenever the store emits a CHANGE_EVENT
let getAppState = () => {
  return { tweetsList : TweetStore.getAll() }
};


export default class Main extends React.Component {
  // Initialize the main component state to re-render itself
  constructor(props) {
    super(props);
    this.state = getAppState();

    // Sure that when the data change in the store,
    // this callback will be executed
    this._onChange = this._onChange.bind(this);
  }

  // Invoked once, only on the client (not on the server)
  // immediately after the initial rendering occurs
  // A good place to add the change listener is when the component has completely mounted itself in the DOM
  componentDidMount() {
    TweetStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
        <div className="container">
          <TweetBox />
          <TweetList tweets={this.state.tweetsList}/>
        </div>
    );
  }
}