var Item = React.createClass({
  getInitialState:function(){
    return {num:1};
  },
  sub:function(){
    this.setState({num:this.state.num-1<0?0:this.state.num-1});
  },
  add:function(){
    this.setState({num:this.state.num+1});
  },
  componentDidUpdate:function(prevProps,prevstate){
    //$.get(this.props.url,this.setData,"json");
    if(prevState.num!=this.state.num){
      TweenMax.from(
        this.refs.num,3,{scaleX:2,scaleY:2,startAt:{scaleX:1,scaleY:1}}
      );
    }

  },
  render:function(){
    return (
      <div className="item">
          <span className="title">test</span>
          <div className="img"></div>
          <div className="num-group">
            <div className="btn-left btn" onClick={this.sub}></div>
            <div className="num" ref="num">{this.state.num}</div>
            <div className="btn-right btn" onClick={this.add}></div>
          </div>
          <div className="submit"></div>
      </div>
    );
  }
});

ReactDOM.render(
  /*code here...*/
  <Item></Item>,
  document.getElementById('content')
);
