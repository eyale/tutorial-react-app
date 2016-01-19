var CommentBox = React.createClass({
  render: function () {
     return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
     )
  }
});
var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        this is commentList
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        this is commentForm
      </div>
    )
  }
});

ReactDOM.render( 
  <CommentBox />,
  document.getElementById('tutorial')
);
