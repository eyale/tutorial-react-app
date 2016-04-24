// 2) THE ARRAY OF DATA TO RENDER AS DATA OF NEWS
var news_list = [{
    author: 'Alex',
    text: 'At the Monday....'
},{
    author: 'David',
    text: 'At the Tuesday...'
},{
    author: 'Michael',
    text: 'At the Wednesday...'
}];

// 3) THE COMPONENT TO HANDLE THE DATA
var News = React.createClass({
  render: function () {
    // 4) MAKING THE HOLDER TO HOLD THE DATA AFTER BUSTING ARRAY
      var news_array_holder_to_render = this.props.news_array.map(function(index, elem) {
        return (
          <div key={elem}>
            <p>{index.author}</p>
            <p>{index.text}</p>
          </div>
        )
      })
      // 5) THE MAIN RETURN FROM THE NEWS COMPONENT THAT
      //    WE HAVE TO TRANSFER TO OUTSIDE
      //    IN OUR CASE TO App COMPONENT
     return (<div>{news_array_holder_to_render}</div>)
  }
});

var Comments = React.createClass({
  render: function () {
     return (
      <div>Have no news -> have no Comments </div>
    )
  }
});

var App = React.createClass({
  // 1) THE MAIN COMPONENT TO HOLD ALL THE COMPONENTS
  render: function () {
     return (
      <div>
        <h1>-----App-THE-MAIN-COMPONENT-----</h1>
        <News news_array={news_list} />
        <Comments />
      </div>
     )
  }
});

ReactDOM.render(<App />, document.getElementById('root'));