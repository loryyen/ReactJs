var pages = {};
window.context.forEach(function(c){
  pages[c.name] = {
    path: c.path,
    node: $('<a/>').attr('href', '#'+c.name).text(c.name).appendTo('.panel')
  };
})

$.address.change(function(evt){
  var page = pages[evt.value.replace(/^\//,'')];
  if(!!page){
    page.node.addClass('on').siblings().removeClass('on');
    $('.viewer').attr('src',page.path);
  }
});
