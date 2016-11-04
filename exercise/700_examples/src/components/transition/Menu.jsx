require('./menu.scss');

var cx = require('utils/cx');

var Menu = function(props){
  var setPage = props.setPage;
  var currentPage = props.currentPage;
  return (
    <div className='menu'>
      {props.pages.map(function(page,idx){
        return (
          <span
            key={idx}
            className={cx({
              'menu-item': true,
              'active': idx===currentPage
            })}
            onClick={function(){
              setPage(idx);
            }}
            >
            {page.title}
          </span>
        );
      })}
    </div>
  );
};
module.exports = Menu;
