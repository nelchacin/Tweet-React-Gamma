import Actions from "./Actions/Actions";
import Message from "./Message/Message";
import ProfileImage from "./ProfileImage/ProfileImage";
import Timestamp from "./Timestamp/Timestamp";
import User from "./User/User";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage tweet={props.tweet.user}/>
      

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user}</span>
            <span className="handle">@{props.tweet.user}</span>
          </span>

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

        <p className="message">
         {props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
