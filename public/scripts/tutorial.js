// 2) THE ARRAY OF DATA TO RENDER AS DATA OF NEWS
var newsList = [{
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
      var newsArrayHolderToRender = this.props.newsArray.map(function(index, elem) {
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

      console.log(newsArrayHolderToRender);
     return (<div>{newsArrayHolderToRender}</div>)
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
        <News newsArray={newsList} />
        <Comments />
      </div>
     )
  }
});

ReactDOM.render(<App />, document.getElementById('root'));