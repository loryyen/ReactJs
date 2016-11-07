var CommentInput = React.createClass({
  getInitialState:function(){
    return {author:"",text:""};
  },
  setAuthor:function(e){
    this.setState({author:e.target.value});
  },
  setText:function(e){
    this.setState({text:e.target.value});
  },
  onSubmit:function(e){
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({text:""});
  },
  render:function(){
    return (
    <form className="comment-input" onSubmit={this.onSubmit}>
      <input className="author" type="text" placeholder="name" value={this.state.author} onChange={this.setAuthor}></input>
      <input className="text" type="text" placeholder="message" value={this.state.text} onChange={this.setText}></input>
      <input className="submit" type="submit" value="送出"></input>
    </form>
    );
  }
});
module.exports = CommentInput;
