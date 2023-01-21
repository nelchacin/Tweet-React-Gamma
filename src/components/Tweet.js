import Actions from "./Actions/Actions";
import Message from "./Message/Message";
import ProfileImage from "./ProfileImage/ProfileImage";
import Timestamp from "./Timestamp/Timestamp";
import User from "./User/User";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image= {props.tweet.user.image}/>
      
      

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user}/>
        <Timestamp timestamp={props.tweet.timestamp}/>
        </div>

       <Message message={props.tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
