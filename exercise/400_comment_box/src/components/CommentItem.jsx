var CommentItem = React.createClass({
  render:function(){
    return (
      <div className="comment-item">
        <div className="author">
          {this.props.author}
        </div>
        <div className="text">
          {this.props.children}
        </div>
      </div>
    );
  }
});
module.exports = CommentItem;
