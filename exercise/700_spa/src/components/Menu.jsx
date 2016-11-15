require('./menu.scss');

var cx = require('utils/cx');

var Menu = function(props){
  return (
    <div className='menu'>
      {/* code here... */}
        {props.pages.map(function(page){
         var className=cx({
           "menu-item":true,
           "active":page.id===props.page.id
         })

         return (
           <a key={page.id} className={className} onClick={function(e){
               e.preventDefault();
               props.setPage(page);
             }}>
             {page.title}
           </a>
         );

      })}


    </div>
  );
};
module.exports = Menu;
