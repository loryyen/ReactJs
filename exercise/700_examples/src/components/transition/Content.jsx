require('./content.scss');

var cx = require('utils/cx');

var Content = React.createClass({
  getInitialState:function(){
    return{transitionName:"right"};
  },
  componentWillReceiveProps:function(nextProps){
      if(nextProps.currentPage!==this.props.currentPage){
        this.setState({transitionName:"left"});
      }
  },
  render:function(){
    var CSSTransitionGroup = React.addons.CSSTransitionGroup;
    return (
      <div className='content-container'>
        <CSSTransitionGroup transitionName={this.state.transitionName}>
          <div className="content" key={this.props.content}>
            {this.props.content}
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
});
module.exports = Content;
