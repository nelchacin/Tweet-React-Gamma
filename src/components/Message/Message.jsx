const Message=(props)=> {
    
    return (
        <div>
        <p className="message">
        {props.tweet.message}
       </p>
       </div>
    )
  }

export default Message