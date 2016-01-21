import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [];

class Main extends React.Component {
  // Initialize the main component state to re-render itself
  constructor(props) {
    super(props);
    this.state = { tweetsList : mockTweets };
  }

  addTweet(tweetToAdd){
    $.post("/tweets", { tweet: tweetToAdd })
    .success(savedTweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);
      this.setState({ tweetsList : newTweetsList })
    })
    .error(error => console.log(error));
  };

  // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs
  // Interactive with api directly HERE!!!
  componentDidMount() {
    $.ajax("/tweets")
    .success(data => this.setState({ tweetsList: data}))
    .error(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById("react");
  if (reactNode){
    ReactDOM.render(
        <Main />,
        reactNode
    );
  }
};

$(documentReady);