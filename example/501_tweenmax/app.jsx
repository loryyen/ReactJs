var Item = React.createClass({
  getInitialState: function() {
    return {
      num: 2
    };
  },
  sub:function(){
    this.setState({num: this.state.num-1});
  },
  add:function(){
    this.setState({num: this.state.num+1});
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(prevState.num != this.state.num){
      TweenMax.from(this.refs.num,.3,{
        scaleX:2, scaleY:2,
        startAt: {scaleX:1, scaleY:1}
      });
    }
  },
  render:function(){
    return (
      <div className='item'>
        <div className='title'>涼感內衣</div>
        <div className='img'/>
        <div className='num-group'>
          <div className='btn btn-left' onClick={this.sub}/>
          <div className='num' ref='num'>{this.state.num}</div>
          <div className='btn btn-right' onClick={this.add}/>
        </div>
        <div className='submit'/>
      </div>
    );
  }
});


ReactDOM.render(
  <Item/>,
  document.getElementById('content')
);
