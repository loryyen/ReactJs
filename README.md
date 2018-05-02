# ReactJs

https://dotblogs.com.tw/lapland/2015/09/08/153315

http://blog.kkbruce.net/2015/10/webpack.html#.WDPZsdJ95qR


# Webpack
https://rhadow.github.io/2015/04/02/webpack-workflow/

# Redux
https://github.com/kdchang/reactjs101/blob/master/Ch07/react-redux-real-world-example.md
https://notes.knovour.ninja/2016/05/23/my-experience-about-react-redux-in-one-month/
https://jigsawye.com/2015/11/29/instruction-with-redux/

# Atom-live-server
https://atom.io/packages/atom-live-server



# PHP
https://dotblogs.com.tw/ianchiu28/2017/06/15/180900


--------------
Sass evnoriment setup in VS steps:

1.install Ruby
  http://rubyinstaller.org/downloads/
  
2. install MINDSCAPE
  https://visualstudiogallery.msdn.microsoft.com/2b96d16a-c986-4501-8f97-8008f9db141a

3. Go to C:\Users\{UserName}\AppData\Local\Temp\Mindscape\WebWorkbench\Ruby193\Ruby193

4. Copy all (lib and bin folder) under above mentioned path

5. Create a folder named "Ruby" under C:\ like: C:\Ruby and paste the bin and lib into it.

6.  Open VS -> TOOLS-> Options -> Web Workbench -> Ruby installation path -> " C:\Ruby\bin"

reference: http://www.mindscapehq.com/forums/thread/1238937

------
Sass study list:

1.SUSY

2.BEM - css design pattern

3.Pure.css 
http://purecss.io/

4.https://github.com/doggy8088/CSS-Guidelines

----
Add Glup into VisualStudio
Noted:VS Tools -> Option ->Project and Solution ->External Web Tools ==>this order of external might havs influence of Gulp.

https://www.davepaquette.com/archive/2014/10/08/how-to-use-gulp-in-visual-studio.aspx
https://www.mikesdotnetting.com/article/283/asp-net-5-managing-client-side-dependencies-with-npm-bower-and-gulp

Glup file encodeing maight influence the npm can recongnize it or not.
https://blog.miniasp.com/post/2015/02/21/solving-asp-net-5-npm-package-json-utf8-with-bom-problem.aspx

-----
Nodejs Anywhere
Static run html pages.
https://www.npmjs.com/package/anywhere
https://segmentfault.com/a/1190000003960609

------
Angular5
https://gist.github.com/doggy8088/1447a4797e5911248f19d10507b6f1f5

------
不同的IE視窗共用相同的SessionID
http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/04/08/ie8-nomerge.aspx
http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/07/05/one-session-each-tab-in-ie.aspx
https://blog.miniasp.com/post/2009/04/09/Command-line-switches-for-Internet-Explorer.aspx
https://dotblogs.com.tw/jimmyyu/archive/2009/11/21/12097.aspx

---------
# 静态资源缓存控制编译工具
https://github.com/fouber/static-resource-digest-project

http://fis.baidu.com/fis3/index.html

https://www.zhihu.com/question/20790576/answer/32602154

https://goo.gl/9BZxbH

发布项目
不加 -d 参数默认被发布到内置 Web Server的根目录下，当启动服务时访问此目录下的资源。
fis release

fis release -d ../output

启动测试
fis server start
fis server start --type node


文件监听
为了方便开发，FIS3 支持文件监听，当启动文件监听时，修改文件会构建发布。而且其编译是增量的，编译花费时间少。
FIS3 通过对 release 命令添加 -w 或者 —watch 参数启动文件监听功能。
fis3 release -w

浏览器自动刷新
文件修改自动构建发布后，如果浏览器能自动刷新，这是一个非常好的开发体验。FIS3 支持浏览器自动刷新功能，只需要给 release 命令添加 -L 参数，通常 -w 和 -L 一起使用。
fis3 release -wL

----------------
#Others
#Hacks:
http://www.jb51.net/css/226888.html
https://github.com/saadeghi/browser-hack-sass-mixins

#Javacript float:
https://github.com/camsong/blog/issues/9

#color convert tool:
https://www.rapidtables.com/web/color/RGB_Color.html

#Del with ES3
https://developer.telerik.com/featured/using-javascript-next-features-es3-enterprise-world/

#切分session
https://dotblogs.com.tw/jimmyyu/archive/2009/11/21/12097.aspx

#div+CSS瀏覽器兼容問題整理(IE6.0、IE7.0 ,ie8 , FireFox...)
http://registerboy.pixnet.net/blog/post/24764866

#IE8 下访问webpack.UglifyJsPlugin 压缩的代码出错
https://github.com/SamHwang1990/blog/issues/6

#Webpack-IE低版本兼容指南
https://github.com/zuojj/fedlab/issues/5

#React+Redux+router兼容ie8 修改！！！！
http://www.cnblogs.com/godghdai/p/7690085.html

#ES各版本支援度
http://kangax.github.io/compat-table/es6/


