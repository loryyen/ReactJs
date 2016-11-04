require('./app.scss');

var Portrait = require('./Portrait.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {position: 0};
  },
  componentDidMount: function() {
    $(window).on('scroll',this.scroll);
    this.scroll();
  },
  scroll:function(){
    var position = $(window).scrollTop() + $(window).height();
    this.setState({position: position});
  },
  render: function() {
    var imgs = [];
    for(var i=1;i<=9;i++){
      imgs.push(
        <Portrait key={i} id={i} position={this.state.position}/>
      );
    }
    return (
      <div className='app'>
        {imgs}
      </div>
    );
  }
});
module.exports = App;
