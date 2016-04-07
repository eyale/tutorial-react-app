var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>

      )
    });
    return (
      <ul className="commentList">
        {commentNodes}
      </ul>
    );
  }
});

var data = [
  {
    id:1,
    author: 'Pete',
    text: 'Pete some text'
  },
  {
    id:2,
    author: 'Jordan',
    text: 'Jordan some text'
  },
  {
    id:3,
    author: 'Den',
    text: 'Den some text'
  }
];

// https://facebook.github.io/react-native/docs/image.html
// renderImages: function() {
//   return (
//     <View>
//       <Image
//         style={styles.icon}
//         source={require('./myIcon.png')}
//       />
//       <Image
//         style={styles.logo}
//         source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
//       />
//     </View>
//   );
// },
var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h3 className="commentAuthor">
          {this.props.author}
        </h3>
          {this.props.children}
      </div>
    )
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <form className="commentForm">
        <label>Label</label>
        <input type='text' placeholder='some_text' />
      </form>
    )
  }
});


var CommentBox = React.createClass({
  render: function () {
     return (
      <div className="commentBox">
        <h1>The comment box holder</h1>
        <h2>Comments:</h2>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
     )
  }
});

ReactDOM.render( 
  <CommentBox data={data}/>,
  document.getElementById('tutorial')
);