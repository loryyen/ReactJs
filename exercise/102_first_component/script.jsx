var MyComponent = React.createClass({
  render:function(){
    return (
      <div className="my-component">
        這是一個組件
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('example')
);
