/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var CommentBox = __webpack_require__(1);

	var data = [{ id: 1, author: '某甲', text: '我有一支筆' }, { id: 2, author: '某乙', text: '我有一顆蘋果' }];
	ReactDOM.render(React.createElement(CommentBox, { title: '\u7559\u8A00\u7248', data: data }), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var CommentInput = __webpack_require__(2);
	var CommentList = __webpack_require__(3);

	var CommentBox = React.createClass({
	  displayName: 'CommentBox',

	  getInitialState: function () {
	    return {
	      data: this.props.data
	    };
	  },
	  addComment: function (comment) {
	    comment.id = this.state.data.length + 1;
	    var data = this.state.data.concat(comment);
	    this.setState({ data: data });
	  },
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'comment-box' },
	      React.createElement(
	        'h1',
	        null,
	        this.props.title
	      ),
	      React.createElement(CommentList, { data: this.state.data }),
	      React.createElement(CommentInput, { addComment: this.addComment })
	    );
	  }
	});
	module.exports = CommentBox;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var CommentInput = React.createClass({
	  displayName: 'CommentInput',

	  getInitialState: function () {
	    return { author: '', text: '' };
	  },
	  onSubmit: function (e) {
	    e.preventDefault();
	    this.props.addComment(this.state);
	    this.setState({ text: '' });
	  },
	  setAuthor: function (e) {
	    this.setState({ author: e.target.value });
	  },
	  setText: function (e) {
	    this.setState({ text: e.target.value });
	  },
	  render: function () {
	    return React.createElement(
	      'form',
	      { className: 'comment-input', onSubmit: this.onSubmit },
	      React.createElement('input', {
	        className: 'author',
	        type: 'text',
	        placeholder: '\u540D\u5B57',
	        value: this.state.author,
	        onChange: this.setAuthor
	      }),
	      React.createElement('input', {
	        className: 'text',
	        type: 'text',
	        placeholder: '\u7559\u8A00',
	        value: this.state.text,
	        onChange: this.setText
	      }),
	      React.createElement('input', { className: 'submit', type: 'submit', value: '\u9001\u51FA' })
	    );
	  }
	});
	module.exports = CommentInput;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var CommentItem = __webpack_require__(4);

	var CommentList = React.createClass({
	  displayName: 'CommentList',

	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'comment-list' },
	      this.props.data.map(function (item) {
	        return React.createElement(
	          CommentItem,
	          { key: item.id, author: item.author },
	          item.text
	        );
	      })
	    );
	  }
	});
	module.exports = CommentList;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var CommentItem = React.createClass({
	  displayName: 'CommentItem',

	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'comment-item' },
	      React.createElement(
	        'div',
	        { className: 'author' },
	        this.props.author
	      ),
	      React.createElement(
	        'div',
	        { className: 'text' },
	        this.props.children
	      )
	    );
	  }
	});
	module.exports = CommentItem;

/***/ }
/******/ ]);