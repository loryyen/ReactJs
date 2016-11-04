var User = React.createClass({
  getDefaultProps: function() {
    return {
      img: 'default.jpg',
      name: '姓名',
      children: '發言'
    };
  },
  render:function(){
    return (
      <div className="user">
        <img className="img" src={this.props.img}/>
        <div className="name">{this.props.name}</div>
        <div className="quote">{this.props.children}</div>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
    <h1>我們的客服</h1>
    <User img="Judi.jpg" name="Judi Anderson">我是 Judi, 您好!</User>
    <User img="John.jpg" name="John Stewart">去找 Judi 不要找我</User>
    <User/>
  </div>,
  document.getElementById("example1")
);
