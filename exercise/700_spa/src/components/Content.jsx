require('./content.scss');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Content = React.createClass({
  // code here...











  render:function(){
    // code here...
     var Component=this.props.page.component;
     return(
      <div className='content-container'>
        <div className='content' id={this.props.page.id}>
          <Component></Component>
        </div>

      </div>
    );





  }
});

module.exports = Content;
