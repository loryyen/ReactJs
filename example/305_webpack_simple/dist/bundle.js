/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** ./app.jsx ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	var Todo = __webpack_require__(/*! Todo */ 1);
	
	ReactDOM.render(React.createElement(Todo, null), document.getElementById('content'));

/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./components/Todo.jsx ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var TodoInput = __webpack_require__(/*! TodoInput */ 2);
	var TodoList = __webpack_require__(/*! TodoList */ 3);
	
	var Todo = React.createClass({
	  displayName: 'Todo',
	
	  getInitialState: function () {
	    return {
	      data: [{ id: 1, done: false, text: '買一瓶醬油' }, { id: 2, done: true, text: '買六個雞蛋' }]
	    };
	  },
	
	  addItem: function (text) {
	    var data = this.state.data.concat({
	      id: this.state.data.length + 1,
	      done: false,
	      text: text
	    });
	    this.setState({ data: data });
	  },
	
	  setItemDone: function (id, done) {
	    for (var i in this.state.data) {
	      var item = this.state.data[i];
	      if (item.id === id) {
	        item.done = done;
	        break;
	      }
	    }
	    this.forceUpdate();
	  },
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'todo' },
	      React.createElement(
	        'h1',
	        null,
	        '\u63A1\u8CB7\u6E05\u55AE'
	      ),
	      React.createElement(TodoInput, { addItem: this.addItem }),
	      React.createElement(TodoList, { data: this.state.data, setItemDone: this.setItemDone })
	    );
	  }
	});
	
	module.exports = Todo;

/***/ },
/* 2 */
/*!**********************************!*\
  !*** ./components/TodoInput.jsx ***!
  \**********************************/
/***/ function(module, exports) {

	var TodoInput = React.createClass({
	  displayName: 'TodoInput',
	
	  getInitialState: function () {
	    return {
	      text: ''
	    };
	  },
	  onChange: function (e) {
	    this.setState({
	      text: e.target.value
	    });
	  },
	  onSubmit: function (e) {
	    e.preventDefault();
	    this.props.addItem(this.state.text);
	    this.setState({ text: '' });
	  },
	  render: function () {
	    return React.createElement(
	      'form',
	      { className: 'todo-input', onSubmit: this.onSubmit },
	      React.createElement('input', { type: 'text', onChange: this.onChange, value: this.state.text })
	    );
	  }
	});
	
	module.exports = TodoInput;

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./components/TodoList.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var TodoItem = __webpack_require__(/*! TodoItem */ 4);
	
	var TodoList = React.createClass({
	  displayName: "TodoList",
	
	  render: function () {
	    var setItemDone = this.props.setItemDone;
	    return React.createElement(
	      "ul",
	      { className: "todo-list" },
	      this.props.data.map(function (item) {
	        return React.createElement(
	          TodoItem,
	          {
	            key: item.id,
	            id: item.id,
	            done: item.done,
	            setItemDone: setItemDone
	          },
	          item.text
	        );
	      })
	    );
	  }
	});
	
	module.exports = TodoList;

/***/ },
/* 4 */
/*!*********************************!*\
  !*** ./components/TodoItem.jsx ***!
  \*********************************/
/***/ function(module, exports) {

	var TodoItem = React.createClass({
	  displayName: "TodoItem",
	
	  toggleDone: function () {
	    var id = this.props.id;
	    var done = !this.props.done;
	    this.props.setItemDone(id, done);
	  },
	  render: function () {
	    var cn = "todo-item";
	    if (this.props.done) cn += " done";
	
	    return React.createElement(
	      "li",
	      { className: cn, onClick: this.toggleDone },
	      this.props.children
	    );
	  }
	});
	
	module.exports = TodoItem;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map