var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  getInitialState:function(){
    return {data:[]};
  },
  componentDidMount:function(){
    $.get(this.props.url,this.setData,"json");
  },
  addComment:function(comment){
    //comment.id=this.state.data.length+1;
    //var data=this.state.data.concat(comment);
    //this.setState({data:data});
    $.post(this.props.url,comment,this.setData,"json");
  },
  setData:function(data){
    this.setState({data:data})
  },
  render:function(){
    return (
      <div className="comment-box">
        <h1>{this.props.title}</h1>
        <CommentList data={this.state.data}></CommentList>
        <CommentInput addComment={this.addComment}></CommentInput>
      </div>
    );
  }
});
module.exports = CommentBox;
