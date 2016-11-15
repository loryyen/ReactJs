var TodoInput = React.createClass({
  render: function() {
    return (
      <div className="todo-input">
        我是輸入框
      </div>
    );
  }
});

var TodoItem = React.createClass({
  render: function() {
    var cn = "todo-item";
    if(this.props.done) cn += " done"

    return (
      <li className={cn}>
        {this.props.children}
      </li>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
        {
          //code here...






        }
      </ul>
    );
  }
});


var data = //code here...




var Todo = React.createClass({
  render: function() {
    return (
      <div className="todo">
        <h1>採買清單</h1>
        <TodoInput/>
        //code here...
      </div>
    );
  }
});


ReactDOM.render(
  <Todo />,
  document.getElementById('content')
);
