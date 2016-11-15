require('./content.scss');

var cx = require('utils/cx');

var Content = React.createClass({
  getInitialState: function() {
    return {
      content: this.props.content,
      nextContent: this.props.content,
      fade: false
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.content !== this.props.content){
      this.refs.cont.addEventListener('transitionend',this.show);
      this.setState({
        fade:true,
        nextContent: nextProps.content
      });
    }
  },

  show:function(){
    console.log('show');
    this.refs.cont.removeEventListener('transitionend',this.show);
    this.setState({
      fade:false,
      content: this.state.nextContent
    });
  },

  render:function(){
    var className = cx({
      'content': true,
      'fade': this.state.fade
    });
    return (
      <div className='content-container'>
        <div className={className} ref='cont'>
          {this.state.content}
        </div>
      </div>
    );
  }
});
module.exports = Content;
