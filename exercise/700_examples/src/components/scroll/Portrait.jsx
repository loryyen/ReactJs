require('./portrait.scss');

var cx = require('utils/cx');

var Portrait = React.createClass({
  getInitialState: function() {
    return {show: false};
  },
  componentDidMount: function() {
    var node = $(ReactDOM.findDOMNode(this));
    this.bottom = node.offset().top + node.height();
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.position > this.bottom){
      this.setState({show:true});
    }
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.show !== this.state.show;
  },
  render:function(){
    var className = cx({
      'portrait': true,
      'show': this.state.show
    });
    var src = require('img/char_got'+this.props.id+'.jpg');
    return (
      <img className={className} src={src}/>
    );
  }
});
module.exports = Portrait;
