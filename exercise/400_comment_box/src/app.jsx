var CommentBox=require("CommentBox");

var data = [
  {id:1, author:'某甲', text:'我有一支筆'},
  {id:2, author:'某乙', text:'我有一顆蘋果'},
];
ReactDOM.render(
  /*code here...*/
  <CommentBox title="留言板" url="https://comment-server-scars377.c9users.io/"></CommentBox>,
  document.getElementById('content')
);
