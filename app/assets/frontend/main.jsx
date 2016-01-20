import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {id: 1, name: 'Trong Thao', body: 'My First Tweet'},
  {id: 2, name: 'Trong Thao', body: 'My Second Tweet'},
  {id: 3, name: 'Trong Thao', body: 'My Third Tweet'}
];

class Main extends React.Component {
  addTweet(){

  };

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={mockTweets}/>
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
      <Main />,
      document.getElementById("react")
  );
};

$(documentReady);