//code here...




var MyComponent=React.createClass({
  render:function(){
    return(
      <div className="my-compnent">
        這是一個組件
        <h1>Hello</h1>
        <a href="http://www.googl.com">test</a>
      </div>
    );
  }
});




ReactDOM.render(
  <MyComponent/>,
  document.getElementById('example')
);
