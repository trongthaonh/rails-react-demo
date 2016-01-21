import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
import { EventEmitter } from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  // The view telling the store I'm listening to your CHANGE_EVENT,
  // and here is what I want to be done when it gets fired.
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  // Stop listening
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();


AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;

    default:
      // No action
  }



});

export default TweetStore;