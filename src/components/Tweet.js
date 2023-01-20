function Tweet() {
  return (
    <div className="tweet">
      <img
        src="https://www.tecnoempleo.com/logotipos/202114.png?02"
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">GammaTech</span>
            <span className="handle">@gammatech</span>
          </span>

          <span className="timestamp">Dec 06, 2022</span>
        </div>

        <p className="message">
          Tendremos los vinilos en clase para la vuelta del puente
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
