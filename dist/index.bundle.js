webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _refluxCounter = __webpack_require__(3);
	
	var _refluxCounter2 = _interopRequireDefault(_refluxCounter);
	
	var _uistatesCounter = __webpack_require__(25);
	
	var _uistatesCounter2 = _interopRequireDefault(_uistatesCounter);
	
	var _refluxCounterWithoutActions = __webpack_require__(27);
	
	var _refluxCounterWithoutActions2 = _interopRequireDefault(_refluxCounterWithoutActions);
	
	var _mobxCounter = __webpack_require__(28);
	
	var _mobxCounter2 = _interopRequireDefault(_mobxCounter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_mobxCounter2.default, { list: _mobxCounter.sampleArray }), document.getElementById('react-mobx-root'));
	
	// ReactDOM.render(
	//     <div>
	//         <RefluxCounter/>
	//         <UIStateCounter/>
	//         <RefluxCounterWithoutActions/>
	//     </div>
	//     ,
	//     document.getElementById('react-root')
	// );
	//
	//
	//
	// import ReduxCounter, {reduxStore} from 'redux-counter'
	//
	// const reduxAppRender = () =>
	//     ReactDOM.render(
	//     <div>
	//         <ReduxCounter/>
	//     </div>
	//     ,
	//     document.getElementById('react-redux-root')
	// );
	//
	// reduxAppRender();
	// reduxStore.subscribe(reduxAppRender);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(4);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Actions = _reflux2.default.createActions(['increment', 'decrement', 'changeBy']);
	
	var CounterStore = function (_Reflux$Store) {
	    _inherits(CounterStore, _Reflux$Store);
	
	    function CounterStore() {
	        _classCallCheck(this, CounterStore);
	
	        var _this = _possibleConstructorReturn(this, (CounterStore.__proto__ || Object.getPrototypeOf(CounterStore)).call(this));
	
	        _this.state = { count: 0 };
	        _this.listenables = Actions;
	        return _this;
	    }
	
	    _createClass(CounterStore, [{
	        key: 'onIncrement',
	        value: function onIncrement() {
	            this.setState({ count: this.state.count + 1 });
	        }
	    }, {
	        key: 'onDecrement',
	        value: function onDecrement() {
	            this.setState({ count: this.state.count - 1 });
	        }
	    }, {
	        key: 'onChangeBy',
	        value: function onChangeBy(amount) {
	            this.setState({ count: this.state.count + amount });
	        }
	    }]);
	
	    return CounterStore;
	}(_reflux2.default.Store);
	
	var Counter = function (_Reflux$Component) {
	    _inherits(Counter, _Reflux$Component);
	
	    function Counter(props) {
	        _classCallCheck(this, Counter);
	
	        var _this2 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
	
	        _this2.store = CounterStore;
	        return _this2;
	    }
	
	    _createClass(Counter, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.state.count
	            );
	        }
	    }]);
	
	    return Counter;
	}(_reflux2.default.Component);
	
	exports.default = Counter;
	
	
	setInterval(Actions.increment, 1000);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(5);
	
	Reflux.serverMode = typeof window !== 'object';
	
	Reflux.connect = __webpack_require__(18);
	
	Reflux.connectFilter = __webpack_require__(20);
	
	Reflux.ListenerMixin = __webpack_require__(19);
	
	Reflux.listenTo = __webpack_require__(21);
	
	Reflux.listenToMany = __webpack_require__(22);
	
	__webpack_require__(23);
	
	module.exports = Reflux;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.__keep = exports.joinConcat = exports.joinStrict = exports.joinLeading = exports.all = exports.joinTrailing = exports.use = exports.nextTick = exports.setEventEmitter = exports.createActions = exports.createStore = exports.createAction = exports.utils = exports.StoreMethods = exports.PublisherMethods = exports.ListenerMethods = exports.ActionMethods = exports.version = undefined;
	
	var _ActionMethods = __webpack_require__(6);
	
	var ActionMethods = _interopRequireWildcard(_ActionMethods);
	
	var _ListenerMethods = __webpack_require__(7);
	
	var ListenerMethods = _interopRequireWildcard(_ListenerMethods);
	
	var _PublisherMethods = __webpack_require__(16);
	
	var PublisherMethods = _interopRequireWildcard(_PublisherMethods);
	
	var _StoreMethods = __webpack_require__(15);
	
	var StoreMethods = _interopRequireWildcard(_StoreMethods);
	
	var _joins = __webpack_require__(10);
	
	var _utils = __webpack_require__(8);
	
	var _ = _interopRequireWildcard(_utils);
	
	var _createAction = __webpack_require__(17);
	
	var _createStore = __webpack_require__(11);
	
	var _Keep = __webpack_require__(12);
	
	var __keep = _interopRequireWildcard(_Keep);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var version = {
	    "reflux-core": "1.0.0"
	};
	
	var joinTrailing = (0, _joins.staticJoinCreator)("last");
	var all = joinTrailing; // Reflux.all alias for backward compatibility
	var joinLeading = (0, _joins.staticJoinCreator)("first");
	var joinStrict = (0, _joins.staticJoinCreator)("strict");
	var joinConcat = (0, _joins.staticJoinCreator)("all");
	
	var utils = _;
	
	
	/**
	 * Convenience function for creating a set of actions
	 *
	 * @param definitions the definitions for the actions to be created
	 * @returns an object with actions of corresponding action names
	 */
	var createActions = function () {
	    var reducer = function reducer(definitions, actions) {
	        Object.keys(definitions).forEach(function (actionName) {
	            var val = definitions[actionName];
	            actions[actionName] = (0, _createAction.createAction)(val);
	        });
	    };
	
	    return function (definitions) {
	        var actions = {};
	        if (definitions instanceof Array) {
	            definitions.forEach(function (val) {
	                if (_.isObject(val)) {
	                    reducer(val, actions);
	                } else {
	                    actions[val] = (0, _createAction.createAction)(val);
	                }
	            });
	        } else {
	            reducer(definitions, actions);
	        }
	        return actions;
	    };
	}();
	
	/**
	 * Sets the eventmitter that Reflux uses
	 */
	function setEventEmitter(ctx) {
	    _.EventEmitter = ctx;
	}
	
	/**
	 * Sets the method used for deferring actions and stores
	 */
	function nextTick(nextTick) {
	    _.nextTick = nextTick;
	}
	
	function use(pluginCb) {
	    pluginCb(this);
	}
	
	/**
	 * Provides the set of created actions and stores for introspection
	 */
	/*eslint-disable no-underscore-dangle*/
	
	
	// export in format that supports syntax: var Reflux = require('reflux-core');
	exports.version = version;
	exports.ActionMethods = ActionMethods;
	exports.ListenerMethods = ListenerMethods;
	exports.PublisherMethods = PublisherMethods;
	exports.StoreMethods = StoreMethods;
	exports.utils = utils;
	exports.createAction = _createAction.createAction;
	exports.createStore = _createStore.createStore;
	exports.createActions = createActions;
	exports.setEventEmitter = setEventEmitter;
	exports.nextTick = nextTick;
	exports.use = use;
	exports.joinTrailing = joinTrailing;
	exports.all = all;
	exports.joinLeading = joinLeading;
	exports.joinStrict = joinStrict;
	exports.joinConcat = joinConcat;
	exports.__keep = __keep;
	/*eslint-enable no-underscore-dangle*/
	
	// export in format that supports syntax: import Reflux from 'reflux-core';
	
	Object.defineProperty(exports, "default", {
	    get: function get() {
	        return exports;
	    }
	});
	
	/**
	 * Warn if Function.prototype.bind not available
	 */
	if (!Function.prototype.bind) {
	    console.error("Function.prototype.bind not available. " + "ES5 shim required. " + "https://github.com/spoike/refluxjs#es5");
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.joinStrict = exports.joinConcat = exports.joinLeading = exports.joinTrailing = exports.fetchInitialState = exports.stopListeningToAll = exports.stopListeningTo = exports.listenTo = exports.validateListening = exports.listenToMany = exports.hasListener = undefined;
	
	var _utils = __webpack_require__(8);
	
	var _ = _interopRequireWildcard(_utils);
	
	var _joins = __webpack_require__(10);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Extract child listenables from a parent from their
	 * children property and return them in a keyed Object
	 *
	 * @param {Object} listenable The parent listenable
	 */
	var mapChildListenables = function mapChildListenables(listenable) {
	    var i = 0,
	        children = {},
	        childName;
	    for (; i < (listenable.children || []).length; ++i) {
	        childName = listenable.children[i];
	        if (listenable[childName]) {
	            children[childName] = listenable[childName];
	        }
	    }
	    return children;
	};
	
	/**
	 * Make a flat dictionary of all listenables including their
	 * possible children (recursively), concatenating names in camelCase.
	 *
	 * @param {Object} listenables The top-level listenables
	 */
	var flattenListenables = function flattenListenables(listenables) {
	    var flattened = {};
	    for (var key in listenables) {
	        var listenable = listenables[key];
	        var childMap = mapChildListenables(listenable);
	
	        // recursively flatten children
	        var children = flattenListenables(childMap);
	
	        // add the primary listenable and chilren
	        flattened[key] = listenable;
	        for (var childKey in children) {
	            var childListenable = children[childKey];
	            flattened[key + _.capitalize(childKey)] = childListenable;
	        }
	    }
	
	    return flattened;
	};
	
	/**
	 * An internal utility function used by `validateListening`
	 *
	 * @param {Action|Store} listenable The listenable we want to search for
	 * @returns {Boolean} The result of a recursive search among `this.subscriptions`
	 */
	var hasListener = exports.hasListener = function hasListener(listenable) {
	    var i = 0,
	        j,
	        listener,
	        listenables;
	    for (; i < (this.subscriptions || []).length; ++i) {
	        listenables = [].concat(this.subscriptions[i].listenable);
	        for (j = 0; j < listenables.length; j++) {
	            listener = listenables[j];
	            if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
	                return true;
	            }
	        }
	    }
	    return false;
	};
	
	/**
	 * A convenience method that listens to all listenables in the given object.
	 *
	 * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
	 */
	var listenToMany = exports.listenToMany = function listenToMany(listenables) {
	    var allListenables = flattenListenables(listenables);
	    for (var key in allListenables) {
	        var cbname = _.callbackName(key),
	            localname = this[cbname] ? cbname : this[key] ? key : undefined;
	        if (localname) {
	            this.listenTo(allListenables[key], localname, this[cbname + "Default"] || this[localname + "Default"] || localname);
	        }
	    }
	};
	
	/**
	 * Checks if the current context can listen to the supplied listenable
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @returns {String|Undefined} An error message, or undefined if there was no problem.
	 */
	var validateListening = exports.validateListening = function validateListening(listenable) {
	    if (listenable === this) {
	        return "Listener is not able to listen to itself";
	    }
	    if (!_.isFunction(listenable.listen)) {
	        return listenable + " is missing a listen method";
	    }
	    if (listenable.hasListener && listenable.hasListener(this)) {
	        return "Listener cannot listen to this listenable because of circular loop";
	    }
	};
	
	/**
	 * Sets up a subscription to the given listenable for the context object
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @param {Function|String} callback The callback to register as event handler
	 * @param {Function|String} defaultCallback The callback to register as default handler
	 * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
	 */
	var listenTo = exports.listenTo = function listenTo(listenable, callback, defaultCallback) {
	    var desub,
	        unsubscriber,
	        subscriptionobj,
	        subs = this.subscriptions = this.subscriptions || [];
	    _.throwIf(this.validateListening(listenable));
	    this.fetchInitialState(listenable, defaultCallback);
	    desub = listenable.listen(this[callback] || callback, this);
	    unsubscriber = function unsubscriber() {
	        var index = subs.indexOf(subscriptionobj);
	        _.throwIf(index === -1, "Tried to remove listen already gone from subscriptions list!");
	        subs.splice(index, 1);
	        desub();
	    };
	    subscriptionobj = {
	        stop: unsubscriber,
	        listenable: listenable
	    };
	    subs.push(subscriptionobj);
	    return subscriptionobj;
	};
	
	/**
	 * Stops listening to a single listenable
	 *
	 * @param {Action|Store} listenable The action or store we no longer want to listen to
	 * @returns {Boolean} True if a subscription was found and removed, otherwise false.
	 */
	var stopListeningTo = exports.stopListeningTo = function stopListeningTo(listenable) {
	    var sub,
	        i = 0,
	        subs = this.subscriptions || [];
	    for (; i < subs.length; i++) {
	        sub = subs[i];
	        if (sub.listenable === listenable) {
	            sub.stop();
	            _.throwIf(subs.indexOf(sub) !== -1, "Failed to remove listen from subscriptions list!");
	            return true;
	        }
	    }
	    return false;
	};
	
	/**
	 * Stops all subscriptions and empties subscriptions array
	 */
	var stopListeningToAll = exports.stopListeningToAll = function stopListeningToAll() {
	    var remaining,
	        subs = this.subscriptions || [];
	    while (remaining = subs.length) {
	        subs[0].stop();
	        _.throwIf(subs.length !== remaining - 1, "Failed to remove listen from subscriptions list!");
	    }
	};
	
	/**
	 * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
	 * @param {Action|Store} listenable The publisher we want to get initial state from
	 * @param {Function|String} defaultCallback The method to receive the data
	 */
	var fetchInitialState = exports.fetchInitialState = function fetchInitialState(listenable, defaultCallback) {
	    defaultCallback = defaultCallback && this[defaultCallback] || defaultCallback;
	    var me = this;
	    if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
	        var data = listenable.getInitialState();
	        if (data && _.isFunction(data.then)) {
	            data.then(function () {
	                defaultCallback.apply(me, arguments);
	            });
	        } else {
	            defaultCallback.call(this, data);
	        }
	    }
	};
	
	/**
	 * The callback will be called once all listenables have triggered at least once.
	 * It will be invoked with the last emission from each listenable.
	 * @param {...Publishers} publishers Publishers that should be tracked.
	 * @param {Function|String} callback The method to call when all publishers have emitted
	 * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	 */
	var joinTrailing = exports.joinTrailing = (0, _joins.instanceJoinCreator)("last");
	
	/**
	 * The callback will be called once all listenables have triggered at least once.
	 * It will be invoked with the first emission from each listenable.
	 * @param {...Publishers} publishers Publishers that should be tracked.
	 * @param {Function|String} callback The method to call when all publishers have emitted
	 * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	 */
	var joinLeading = exports.joinLeading = (0, _joins.instanceJoinCreator)("first");
	
	/**
	 * The callback will be called once all listenables have triggered at least once.
	 * It will be invoked with all emission from each listenable.
	 * @param {...Publishers} publishers Publishers that should be tracked.
	 * @param {Function|String} callback The method to call when all publishers have emitted
	 * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	 */
	var joinConcat = exports.joinConcat = (0, _joins.instanceJoinCreator)("all");
	
	/**
	 * The callback will be called once all listenables have triggered.
	 * If a callback triggers twice before that happens, an error is thrown.
	 * @param {...Publishers} publishers Publishers that should be tracked.
	 * @param {Function|String} callback The method to call when all publishers have emitted
	 * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	 */
	var joinStrict = exports.joinStrict = (0, _joins.instanceJoinCreator)("strict");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.capitalize = capitalize;
	exports.callbackName = callbackName;
	exports.isObject = isObject;
	exports.extend = extend;
	exports.isFunction = isFunction;
	exports.nextTick = nextTick;
	exports.object = object;
	exports.isArguments = isArguments;
	exports.throwIf = throwIf;
	function capitalize(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	function callbackName(string, prefix) {
	    prefix = prefix || "on";
	    return prefix + exports.capitalize(string);
	}
	
	/*
	 * isObject, extend, isFunction, isArguments are taken from underscore/lodash in
	 * order to remove the dependency
	 */
	function isObject(obj) {
	    var type = typeof obj === "undefined" ? "undefined" : _typeof(obj);
	    return type === "function" || type === "object" && !!obj;
	}
	
	function extend(obj) {
	    if (!isObject(obj)) {
	        return obj;
	    }
	    var source, keys, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        keys = Object.keys(source);
	        for (var j = 0; j < keys.length; j++) {
	            prop = keys[j];
	            if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	                var propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
	                Object.defineProperty(obj, prop, propertyDescriptor);
	            } else {
	                obj[prop] = source[prop];
	            }
	        }
	    }
	    return obj;
	}
	
	function isFunction(value) {
	    return typeof value === "function";
	}
	
	exports.EventEmitter = __webpack_require__(9);
	
	function nextTick(callback) {
	    setTimeout(callback, 0);
	}
	
	function object(keys, vals) {
	    var o = {},
	        i = 0;
	    for (; i < keys.length; i++) {
	        o[keys[i]] = vals[i];
	    }
	    return o;
	}
	
	function isArguments(value) {
	    return (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && "callee" in value && typeof value.length === "number";
	}
	
	function throwIf(val, msg) {
	    if (val) {
	        throw Error(msg || val);
	    }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;
	
	  if (!events) return names;
	
	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.staticJoinCreator = staticJoinCreator;
	exports.instanceJoinCreator = instanceJoinCreator;
	
	var _createStore = __webpack_require__(11);
	
	var _utils = __webpack_require__(8);
	
	var _ = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Internal module used to create static and instance join methods
	 */
	
	var slice = Array.prototype.slice,
	    strategyMethodNames = {
	    strict: "joinStrict",
	    first: "joinLeading",
	    last: "joinTrailing",
	    all: "joinConcat"
	};
	
	/**
	 * Used in `index.js` to create the static join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
	 */
	function staticJoinCreator(strategy) {
	    return function () /* listenables... */{
	        var listenables = slice.call(arguments);
	        return (0, _createStore.createStore)({
	            init: function init() {
	                this[strategyMethodNames[strategy]].apply(this, listenables.concat("triggerAsync"));
	            }
	        });
	    };
	}
	
	/**
	 * Used in `ListenerMethods.js` to create the instance join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
	 */
	function instanceJoinCreator(strategy) {
	    return function () /* listenables..., callback*/{
	        _.throwIf(arguments.length < 2, "Cannot create a join with less than 2 listenables!");
	        var listenables = slice.call(arguments),
	            callback = listenables.pop(),
	            numberOfListenables = listenables.length,
	            join = {
	            numberOfListenables: numberOfListenables,
	            callback: this[callback] || callback,
	            listener: this,
	            strategy: strategy
	        },
	            i,
	            cancels = [],
	            subobj;
	        for (i = 0; i < numberOfListenables; i++) {
	            _.throwIf(this.validateListening(listenables[i]));
	        }
	        for (i = 0; i < numberOfListenables; i++) {
	            cancels.push(listenables[i].listen(newListener(i, join), this));
	        }
	        reset(join);
	        subobj = { listenable: listenables };
	        subobj.stop = makeStopper(subobj, cancels, this);
	        this.subscriptions = (this.subscriptions || []).concat(subobj);
	        return subobj;
	    };
	}
	
	// ---- internal join functions ----
	
	function makeStopper(subobj, cancels, context) {
	    return function () {
	        var i,
	            subs = context.subscriptions,
	            index = subs ? subs.indexOf(subobj) : -1;
	        _.throwIf(index === -1, "Tried to remove join already gone from subscriptions list!");
	        for (i = 0; i < cancels.length; i++) {
	            cancels[i]();
	        }
	        subs.splice(index, 1);
	    };
	}
	
	function reset(join) {
	    join.listenablesEmitted = new Array(join.numberOfListenables);
	    join.args = new Array(join.numberOfListenables);
	}
	
	function newListener(i, join) {
	    return function () {
	        var callargs = slice.call(arguments);
	        if (join.listenablesEmitted[i]) {
	            switch (join.strategy) {
	                case "strict":
	                    throw new Error("Strict join failed because listener triggered twice.");
	                case "last":
	                    join.args[i] = callargs;break;
	                case "all":
	                    join.args[i].push(callargs);
	            }
	        } else {
	            join.listenablesEmitted[i] = true;
	            join.args[i] = join.strategy === "all" ? [callargs] : callargs;
	        }
	        emitIfAllListenablesEmitted(join);
	    };
	}
	
	function emitIfAllListenablesEmitted(join) {
	    for (var i = 0; i < join.numberOfListenables; i++) {
	        if (!join.listenablesEmitted[i]) {
	            return;
	        }
	    }
	    join.callback.apply(join.listener, join.args);
	    reset(join);
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createStore = createStore;
	
	var _utils = __webpack_require__(8);
	
	var _ = _interopRequireWildcard(_utils);
	
	var _Keep = __webpack_require__(12);
	
	var Keep = _interopRequireWildcard(_Keep);
	
	var _mixer = __webpack_require__(13);
	
	var _bindMethods = __webpack_require__(14);
	
	var _StoreMethods = __webpack_require__(15);
	
	var StoreMethods = _interopRequireWildcard(_StoreMethods);
	
	var _PublisherMethods = __webpack_require__(16);
	
	var PublisherMethods = _interopRequireWildcard(_PublisherMethods);
	
	var _ListenerMethods = __webpack_require__(7);
	
	var ListenerMethods = _interopRequireWildcard(_ListenerMethods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var allowed = { preEmit: 1, shouldEmit: 1 };
	
	/**
	 * Creates an event emitting Data Store. It is mixed in with functions
	 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
	 * and `shouldEmit` may be overridden in the definition object.
	 *
	 * @param {Object} definition The data store object definition
	 * @returns {Store} A data store instance
	 */
	function createStore(definition) {
	
	    definition = definition || {};
	
	    for (var a in StoreMethods) {
	        if (!allowed[a] && (PublisherMethods[a] || ListenerMethods[a])) {
	            throw new Error("Cannot override API method " + a + " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
	        }
	    }
	
	    for (var d in definition) {
	        if (!allowed[d] && (PublisherMethods[d] || ListenerMethods[d])) {
	            throw new Error("Cannot override API method " + d + " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
	        }
	    }
	
	    definition = (0, _mixer.mix)(definition);
	
	    function Store() {
	        var i = 0,
	            arr;
	        this.subscriptions = [];
	        this.emitter = new _.EventEmitter();
	        this.eventLabel = "change";
	        (0, _bindMethods.bindMethods)(this, definition);
	        if (this.init && _.isFunction(this.init)) {
	            this.init();
	        }
	        if (this.listenables) {
	            arr = [].concat(this.listenables);
	            for (; i < arr.length; i++) {
	                this.listenToMany(arr[i]);
	            }
	        }
	    }
	
	    _.extend(Store.prototype, ListenerMethods, PublisherMethods, StoreMethods, definition);
	
	    var store = new Store();
	    Keep.addStore(store);
	
	    return store;
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	// this needs to be set to true before Keep.js starts storing, done via useKeep
	var use = false;
	
	var createdStores = [];
	
	var createdActions = [];
	
	function useKeep() {
		var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
		use = bool;
	}
	
	function addStore(str) {
		if (use) {
			createdStores.push(str);
		}
	}
	
	function addAction(act) {
		if (use) {
			createdActions.push(act);
		}
	}
	
	function reset() {
		while (createdStores.length) {
			createdStores.pop();
		}
		while (createdActions.length) {
			createdActions.pop();
		}
	}
	
	exports.useKeep = useKeep;
	exports.addStore = addStore;
	exports.addAction = addAction;
	exports.createdStores = createdStores;
	exports.createdActions = createdActions;
	exports.reset = reset;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mix = mix;
	
	var _utils = __webpack_require__(8);
	
	var _ = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function mix(def) {
	    var composed = {
	        init: [],
	        preEmit: [],
	        shouldEmit: []
	    };
	
	    var updated = function mixDef(mixin) {
	        var mixed = {};
	        if (mixin.mixins) {
	            mixin.mixins.forEach(function (subMixin) {
	                _.extend(mixed, mixDef(subMixin));
	            });
	        }
	        _.extend(mixed, mixin);
	        Object.keys(composed).forEach(function (composable) {
	            if (mixin.hasOwnProperty(composable)) {
	                composed[composable].push(mixin[composable]);
	            }
	        });
	        return mixed;
	    }(def);
	
	    if (composed.init.length > 1) {
	        updated.init = function () {
	            var args = arguments;
	            composed.init.forEach(function (init) {
	                init.apply(this, args);
	            }, this);
	        };
	    }
	    if (composed.preEmit.length > 1) {
	        updated.preEmit = function () {
	            return composed.preEmit.reduce(function (args, preEmit) {
	                var newValue = preEmit.apply(this, args);
	                return newValue === undefined ? args : [newValue];
	            }.bind(this), arguments);
	        };
	    }
	    if (composed.shouldEmit.length > 1) {
	        updated.shouldEmit = function () {
	            var args = arguments;
	            return !composed.shouldEmit.some(function (shouldEmit) {
	                return !shouldEmit.apply(this, args);
	            }, this);
	        };
	    }
	    Object.keys(composed).forEach(function (composable) {
	        if (composed[composable].length === 1) {
	            updated[composable] = composed[composable][0];
	        }
	    });
	
	    return updated;
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bindMethods = bindMethods;
	function bindMethods(store, definition) {
	    for (var name in definition) {
	        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	            var propertyDescriptor = Object.getOwnPropertyDescriptor(definition, name);
	
	            if (!propertyDescriptor.value || typeof propertyDescriptor.value !== "function" || !definition.hasOwnProperty(name)) {
	                continue;
	            }
	
	            store[name] = definition[name].bind(store);
	        } else {
	            var property = definition[name];
	
	            if (typeof property !== "function" || !definition.hasOwnProperty(name)) {
	                continue;
	            }
	
	            store[name] = property.bind(store);
	        }
	    }
	
	    return store;
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.deferWith = exports.triggerAsync = exports.trigger = exports.listen = exports.shouldEmit = exports.preEmit = undefined;
	
	var _utils = __webpack_require__(8);
	
	var _ = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * A module of methods for object that you want to be able to listen to.
	 * This module is consumed by `createStore` and `createAction`
	 */
	
	/**
	 * Hook used by the publisher that is invoked before emitting
	 * and before `shouldEmit`. The arguments are the ones that the action
	 * is invoked with. If this function returns something other than
	 * undefined, that will be passed on as arguments for shouldEmit and
	 * emission.
	 */
	var preEmit = exports.preEmit = function preEmit() {};
	
	/**
	 * Hook used by the publisher after `preEmit` to determine if the
	 * event should be emitted with given arguments. This may be overridden
	 * in your application, default implementation always returns true.
	 *
	 * @returns {Boolean} true if event should be emitted
	 */
	var shouldEmit = exports.shouldEmit = function shouldEmit() {
	    return true;
	};
	
	/**
	 * Subscribes the given callback for action triggered
	 *
	 * @param {Function} callback The callback to register as event handler
	 * @param {Mixed} [optional] bindContext The context to bind the callback with
	 * @returns {Function} Callback that unsubscribes the registered event handler
	 */
	var listen = exports.listen = function listen(callback, bindContext) {
	    bindContext = bindContext || this;
	    var eventHandler = function eventHandler(args) {
	        if (aborted) {
	            return;
	        }
	        callback.apply(bindContext, args);
	    },
	        me = this,
	        aborted = false;
	    this.emitter.addListener(this.eventLabel, eventHandler);
	    return function () {
	        aborted = true;
	        me.emitter.removeListener(me.eventLabel, eventHandler);
	    };
	};
	
	/**
	 * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
	 */
	var trigger = exports.trigger = function trigger() {
	    var args = arguments,
	        pre = this.preEmit.apply(this, args);
	    args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
	    if (this.shouldEmit.apply(this, args)) {
	        this.emitter.emit(this.eventLabel, args);
	    }
	};
	
	/**
	 * Tries to publish the event on the next tick
	 */
	var triggerAsync = exports.triggerAsync = function triggerAsync() {
	    var args = arguments,
	        me = this;
	    _.nextTick(function () {
	        me.trigger.apply(me, args);
	    });
	};
	
	/**
	 * Wraps the trigger mechanism with a deferral function.
	 *
	 * @param {Function} callback the deferral function,
	 *        first argument is the resolving function and the
	 *        rest are the arguments provided from the previous
	 *        trigger invocation
	 */
	var deferWith = exports.deferWith = function deferWith(callback) {
	    var oldTrigger = this.trigger,
	        ctx = this,
	        resolver = function resolver() {
	        oldTrigger.apply(ctx, arguments);
	    };
	    this.trigger = function () {
	        callback.apply(ctx, [resolver].concat([].splice.call(arguments, 0)));
	    };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createAction = createAction;
	
	var _utils = __webpack_require__(8);
	
	var _ = _interopRequireWildcard(_utils);
	
	var _ActionMethods = __webpack_require__(6);
	
	var ActionMethods = _interopRequireWildcard(_ActionMethods);
	
	var _PublisherMethods = __webpack_require__(16);
	
	var PublisherMethods = _interopRequireWildcard(_PublisherMethods);
	
	var _Keep = __webpack_require__(12);
	
	var Keep = _interopRequireWildcard(_Keep);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var allowed = { preEmit: 1, shouldEmit: 1 };
	
	/**
	 * Creates an action functor object. It is mixed in with functions
	 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
	 * be overridden in the definition object.
	 *
	 * @param {Object} definition The action object definition
	 */
	function createAction(definition) {
	
	    definition = definition || {};
	    if (!_.isObject(definition)) {
	        definition = { actionName: definition };
	    }
	
	    for (var a in ActionMethods) {
	        if (!allowed[a] && PublisherMethods[a]) {
	            throw new Error("Cannot override API method " + a + " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");
	        }
	    }
	
	    for (var d in definition) {
	        if (!allowed[d] && PublisherMethods[d]) {
	            throw new Error("Cannot override API method " + d + " in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");
	        }
	    }
	
	    definition.children = definition.children || [];
	    if (definition.asyncResult) {
	        definition.children = definition.children.concat(["completed", "failed"]);
	    }
	
	    var i = 0,
	        childActions = {};
	    for (; i < definition.children.length; i++) {
	        var chDef = definition.children[i];
	        var chName = typeof chDef === "string" ? chDef : chDef.actionName;
	        childActions[chName] = createAction(chDef);
	    }
	
	    var context = _.extend({
	        eventLabel: "action",
	        emitter: new _.EventEmitter(),
	        _isAction: true
	    }, PublisherMethods, ActionMethods, definition);
	
	    var functor = function functor() {
	        var hasChildActions = false;
	        /* eslint no-unused-vars:0 */
	        for (var ignore in functor.childActions) {
	            hasChildActions = true;break;
	        }
	        var async = !functor.sync && typeof functor.sync !== "undefined" || hasChildActions;
	        var triggerType = async ? "triggerAsync" : "trigger";
	        return functor[triggerType].apply(functor, arguments);
	    };
	
	    _.extend(functor, childActions, context);
	
	    Keep.addAction(functor);
	
	    return functor;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var ListenerMethods = __webpack_require__(7),
	    ListenerMixin = __webpack_require__(19),
	    _ = __webpack_require__(8);
	
	module.exports = function(listenable, key) {
	
	    _.throwIf(typeof(key) === 'undefined', 'Reflux.connect() requires a key.');
	
	    return {
	        getInitialState: function() {
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            }
	
	            return _.object([key],[listenable.getInitialState()]);
	        },
	        componentDidMount: function() {
	            var me = this;
	
	            _.extend(me, ListenerMethods);
	
	            this.listenTo(listenable, function(v) {
	                me.setState(_.object([key],[v]));
	            });
	        },
	        componentWillUnmount: ListenerMixin.componentWillUnmount
	    };
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(8),
	    ListenerMethods = __webpack_require__(7);
	
	/**
	 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
	 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
	 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
	 * import everything this mixin contains!
	 */
	module.exports = _.extend({
	
	    /**
	     * Cleans up all listener previously registered.
	     */
	    componentWillUnmount: ListenerMethods.stopListeningToAll
	
	}, ListenerMethods);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var ListenerMethods = __webpack_require__(7),
	    ListenerMixin = __webpack_require__(19),
	    _ = __webpack_require__(8);
	
	module.exports = function(listenable, key, filterFunc) {
	
	    _.throwIf(_.isFunction(key), 'Reflux.connectFilter() requires a key.');
	
	    return {
	        getInitialState: function() {
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            }
	
	            // Filter initial payload from store.
	            var result = filterFunc.call(this, listenable.getInitialState());
	            if (typeof(result) !== 'undefined') {
	                return _.object([key], [result]);
	            } else {
	                return {};
	            }
	        },
	        componentDidMount: function() {
	            var me = this;
	
	            _.extend(this, ListenerMethods);
	
	            this.listenTo(listenable, function(value) {
	                var result = filterFunc.call(me, value);
	                me.setState(_.object([key], [result]));
	            });
	        },
	        componentWillUnmount: ListenerMixin.componentWillUnmount
	    };
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var ListenerMethods = __webpack_require__(7);
	
	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method.
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @param {Function|String} callback The callback to register as event handler
	 * @param {Function|String} defaultCallback The callback to register as default handler
	 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
	 */
	module.exports = function(listenable,callback,initial){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in ListenerMethods){
	                if (this[m] !== ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
	                    }
	                    this[m] = ListenerMethods[m];
	                }
	            }
	            this.listenTo(listenable,callback,initial);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var ListenerMethods = __webpack_require__(7);
	
	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method. This version is used
	 * to automatically set up a `listenToMany` call.
	 *
	 * @param {Object} listenables An object of listenables
	 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
	 */
	module.exports = function(listenables){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in ListenerMethods){
	                if (this[m] !== ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenToMany!";
	                    }
	                    this[m] = ListenerMethods[m];
	                }
	            }
	            this.listenToMany(listenables);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	/* globals React: false */
	
	var Reflux = __webpack_require__(5);
	Reflux.defineReact = __webpack_require__(24);
	
	// useful utility for ES6 work, mimics the ability to extend
	Reflux.utils.inherits = function(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) {
			if (Object.setPrototypeOf) {
				Object.setPrototypeOf(subClass, superClass);
			} else {
				/* jshint proto: true */
				subClass.__proto__ = superClass;
			}
		}
	};
	
	// first try to see if there's a global React var and use it
	if (typeof React !== 'undefined' && React) {
		Reflux.defineReact(React);
	// otherwise we're gonna resort to 'try' stuff in case of other environments
	} else {
		try {
			var R = __webpack_require__(1); // we ignore this in browserify manually (see grunt file), so it's more of a doublecheck for in node
			Reflux.defineReact(R);
		} catch (e) {}
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* globals React: false */
	
	var Reflux = __webpack_require__(5);
	
	/**
	 * Reflux.defineReact function where you can manually supply
	 * the React object in order to create in case Reflux needs to load before
	 * React or there is a modular environment where there won't be a global
	 * React variable.
	 * @note The third param is for internal usage only.
	 */
	var _react, _defined = false;
	function defineReact(react, noLongerUsed, extend)
	{
		var proto, _extend;
		
		// if no Reflux object is yet available then return and just wait until defineReact is called manually with it
		try {
			_react  = react  || _react  || React;
			_extend = extend || _react.Component;
		} catch (e) {
			return;
		}
		
		// if Reflux and React aren't present then ignore, wait until they are properly present
		// also ignore if it's been called before UNLESS there's manual extending happening
		if (!_react || !_extend || (_defined && !extend)) {
			return;
		}
		
		// ----------- BEGIN Reflux.Component ------------
		/**
		 * Reflux.Component:
		 * An implementation for idiomatic React.js classes that mix with
		 * Reflux stores. To utilize extend Reflux.Component instead of
		 * React.Component. Then you may hook any Reflux store that has a
		 * `this.state` property containing its state values to the component
		 * via `this.store` or an Array of Reflux stores via `this.stores` in
		 * the component's constructor (similar to how you assign initial state
		 * in the constructor in ES6 style React). The default values of the
		 * stores will automatically reflect in the component's state, and any
		 * further `trigger` calls from that store will update properties passed
		 * in the trigger into the component automatically.
		 */
		var RefluxComponent = function(props, context, updater) {
			_extend.call(this, props, context, updater);
		};
		
		// equivalent of `extends React.Component` or other class if provided via `extend` param
		Reflux.utils.inherits(RefluxComponent, _extend);
		
		proto = RefluxComponent.prototype;
		
		/**
		 * this.storeKeys
		 * When this is a falsey value (null by default) the component mixes in
		 * all properties from the stores attached to it and updates on changes
		 * from all of them. When set to an array of string keys it will only
		 * utilized state property names of those keys in any store attached. This
		 * lets you choose which parts of stores update the component on a component-
		 * by-component basis. If using this it is best set in the constructor.
		 */
		proto.storeKeys = null;
		
		// on the mounting of the component that is where the store/stores are attached and initialized if needed
		proto.componentWillMount = function () {
			// if there is a this.store then simply push it onto the this.stores array or make one if needed
			if (this.store) {
				if (Array.isArray(this.stores)) {
					this.stores.unshift(this.store);
				} else {
					this.stores = [this.store];
				}
			}
			
			if (this.stores) {
				this.__storeunsubscribes__ = this.__storeunsubscribes__ || [];
				var sS = this.setState.bind(this);
				// this handles the triggering of a store, checking what's updated if proto.storeKeys is utilized
				var onStoreTrigger = function(obj){
					var updateObj = filterByStoreKeys(this.storeKeys, obj);
					if (updateObj) {
						sS(updateObj);
					}
				}.bind(this);
				// for each store in this.stores...
				for (var i = 0, ii = this.stores.length; i < ii; i++) {
					var str = this.stores[i];
					// if's a function then we know it's a class getting passed, not an instance
					if (typeof str === 'function') {
						var storeId = str.id;
						// if there is NOT a .singleton property on the store then this store has not been initialized yet, so do so
						if (!str.singleton) {
							str.singleton = new str();
							if (storeId) {
								Reflux.stores[storeId] = str.singleton;
							}
						}
						// before we weren't sure if we were working with an instance or class, so now we know an instance is created set it
						// to the variables we were using so that we can just continue on knowing it's the instance we're working with
						this.stores[i] = str = str.singleton;
						// the instance should have an .id property as well if the class does, so set that here
						str.id = storeId;
						// if there is an id and there is a global state property for this store then merge
						// the properties from that global state into the default state of the store AND then
						// set the global state to that new state (since it may have previously been partial)
						if (storeId && Reflux.GlobalState[storeId]) {
							for (var key in Reflux.GlobalState[storeId]) {
								str.state[key] = Reflux.GlobalState[storeId][key];
							}
							Reflux.GlobalState[storeId] = str.state;
						// otherwise (if it has an id) set the global state to the default state of the store
						} else if (storeId) {
							Reflux.GlobalState[storeId] = str.state;
						}
						// if no id, then no messing with global state
					}
					// listen/subscribe for the ".trigger()" in the store, and track the unsubscribes so that we can unsubscribe on unmount
					if (!Reflux.serverMode) {
						this.__storeunsubscribes__.push(str.listen(onStoreTrigger));
					}
					// run set state so that it mixes in the props from the store with the component
					var updateObj = filterByStoreKeys(this.storeKeys, str.state);
					if (updateObj) {
						this.setState(updateObj);
					}
				}
			}
			
			// mapStoreToState needs to know if is ready to map or must wait
			this.__readytomap__ = true;
			// if there are mappings that were delayed, do them now
			var dmaps = this.__delayedmaps__;
			if (dmaps) {
				for (var j=0,jj=dmaps.length; j<jj; j++) {
					dmaps[j].func( dmaps[j].state );
				}
			}
			this.__delayedmaps__ = null;
		};
		
		// on the unmount phase of the component unsubscribe that which we subscribed earlier to keep our garbage trail clean
		proto.componentWillUnmount = function () {
			if (this.__storeunsubscribes__) {
				for (var i = 0, ii = this.__storeunsubscribes__.length; i < ii; i++) {
					this.__storeunsubscribes__[i]();
				}
			}
			this.__readytomap__ = false;
		};
		
		/**
		 * this.mapStoreToState
		 * This function allow you to supply map the state of a store to the
		 * state of this component manually via your own logic. This method
		 * is completely separate from this.store/this.stores and/or this.storeKeys.
		 * Call this function with an ES6 store (class or singleton instance) as the
		 * first argument and your filter function as the second. Your filter function
		 * will receive an object of the parts of the ES6 store being updated every
		 * time its setState is called. Your filter function then returns an object
		 * which will be merged with the component state (IF it has any properties at all,
		 * should you return a blank object the component will not rerender).
		 */
		proto.mapStoreToState = function(store, filterFunc)
		{
			// make sure we have a proper singleton instance to work with
			if (typeof store === 'function') {
				if (store.singleton) {
					store = store.singleton;
				} else {
					store = Reflux.initStore(store);
				}
			}
			
			// we need a closure so that the called function can remember the proper filter function to use, so function gets defined here
			var self = this;
			function onMapStoreTrigger(obj) {
				// get an object 
				var update = filterFunc.call(self, obj);
				// if no object returned from filter functions do nothing
				if (!update) {
					return;
				}
				// check if the update actually has any mapped props
				/*jshint unused: false */
				var hasProps = false;
				for (var check in update) {
					hasProps = true;
					break;
				}
				// if there were props mapped, then update via setState
				if (hasProps) {
					self.setState(update);
				}
			}
			
			// add the listener to know when the store is triggered
			this.__storeunsubscribes__ = this.__storeunsubscribes__ || [];
			this.__storeunsubscribes__.push(store.listen(onMapStoreTrigger));
			
			// now actually run onMapStoreTrigger with the full store state so that we immediately have all store state mapped to component state
			if (this.__readytomap__) {
				onMapStoreTrigger(store.state);
			} else {
				this.__delayedmaps__ = this.__delayedmaps__ || [];
				this.__delayedmaps__.push({func:onMapStoreTrigger, state:store.state});
			}
		};
		
		/**
		 * Reflux.Component.extend(OtherClass)
		 * This allows you to get classes that extend off of another React.Component
		 * inheriting class. For example if you're using a third party that uses
		 * components that allow `class MyComponent extends LibComponent` (where LibComponent
		 * itself extends React.Component) and you want to use that component with ES6 then
		 * you can make a class `var MyDualComponent = Reflux.Component.extend(LibComponent);`
		 * then you can use `class MyComponent extends MyDualComponent` to get the benefits
		 * of both libraries.
		 */
		RefluxComponent.extend = function(clss) {
			return defineReact(null, null, clss);
		};
		
		// if is being manually called with an `extend` argument present then just return the created class
		if (extend) {
			return RefluxComponent;
		}
		
		// otherwise set as Reflux.Component and continue with other normal definitions
		Reflux.Component = RefluxComponent;
		
		// also set Reflux.PureComponent (if it exists) using the .extend feature
		if (_react.PureComponent) {
			Reflux.PureComponent = RefluxComponent.extend(_react.PureComponent);
		}
		
		// ------------ END Reflux.Component ------------
		
		// --------- BEGIN Reflux.Store ------------
		/**
		 * Reflux.Store:
		 * Also implements optional Reflux.Store class that is idiomatic with
		 * the React ES6 style. You extend Reflux.Store and then the rest works
		 * the same as createStore, except the constructor instead of init, and
		 * it holds state in a state property, and a .setState method is available
		 * which automatically updates state and does a trigger. Then when using
		 * with this.store or this.stores in an ES6 component just plass the class,
		 * it will deal with a singleton instantiation of the class automatically.
		 */
		var RefluxStore = function() {
			// extending doesn't really work well here, so instead we create an internal instance
			// and just loop through its properties/methods and make a getter/setter for each
			// that will actually be getting and setting on that internal instance.
			this.__store__ = Reflux.createStore();
			this.state = {};
			var self = this;
			for (var key in this.__store__) {
				/*jshint loopfunc: true */
				(function (prop) {
					Object.defineProperty(self, prop, {
						get: function () { return self.__store__[prop]; },
						set: function (v) { self.__store__[prop] = v; }
					});
				})(key);
			}
		};
		
		proto = RefluxStore.prototype;
		
		// this defines the listenables property, mostly intended to be set as `this.listenables` in the constructor of the store
		// it is essentially a shortcut to the `listenToMany` method
		Object.defineProperty(proto, "listenables", {
			get: function () {
				return this.__listenables__;
			},
			set: function (v) {
				var Combined = {};
				if (Array.isArray(v)){
					v.forEach(function(obj) {
						for (var key in obj) {
							Combined[key] = obj[key];
						}
					});
				} else {
					Combined = v;
				}
				this.__listenables__ = Combined;
				this.listenToMany(Combined);
			},
			enumerable: true,
			configurable: true
		});
		
		// allows simple usage of `this.setState(obj)` within the store to both update the state and trigger the store to update
		// components that it is attached to in a simple way that is idiomatic with React
		proto.setState = function (obj) {
			// Object.assign(this.state, obj); // later turn this to Object.assign and remove loop once support is good enough
			for (var key in obj) {
				this.state[key] = obj[key];
			}
			// if there's an id (i.e. it's being tracked by the global state) then make sure to update the global state
			if (this.id) {
				Reflux.GlobalState[this.id] = this.state;
			}
			// trigger, because any component it's attached to is listening and will merge the store state into its own on a store trigger
			this.trigger(obj);
		};
		
		// this is a static property so that other code can identify that this is a Reflux.Store class
		// has issues specifically when using babel to transpile your ES6 stores for IE10 and below, not documented and shouldn't use yet
		Object.defineProperty(RefluxStore, "isES6Store", {
			get: function () {
				return true;
			},
			enumerable: true,
			configurable: true
		});
		
		// allows a shortcut for accessing MyStore.singleton.state as MyStore.state (since common usage makes a singleton)
		Object.defineProperty(RefluxStore, "state", {
			get: function () {
				if (!this.singleton) {
					throw new Error('Reflux.Store.state is inaccessible before the store has been initialized.');
				}
				return this.singleton.state;
			},
			enumerable: true,
			configurable: true
		});
		
		/* NOTE:
		If a Reflux.Store definition is given a static id property and used
		properly within a Reflux.Component or with Reflux.initStore then
		it will be added to the Reflux.GlobalState object which automatically tracks the
		current state of all such defined stores in the program. */
		
		Reflux.Store = RefluxStore;
		// ----------- END Reflux.Store -------------
		
		// --------- BEGIN Reflux Static Props/Methods ------------
		/**
		 * Reflux.GlobalState is where data is stored for any Reflux.Store that has a static id property. Each store's
		 * state will be on the Reflux.GlobalState object with the id as the key. So a store with the id "MyStore" and
		 * a state {"color":"red"} will end up with a Reflux.GlobalState of {"MyStore":{"color":"red"}}
		 * Reflux.GlobalState is an accessible part of the API. However, keep in mind that non-primitive properties you
		 * read off of it will continue to mutate and you can only manually mutate Reflux.GlobalState BEFORE any component
		 * mounting of components with ES6 stores. For more functionality look to Reflux.setGlobalState to change the global
		 * state at any point, and Reflux.getGlobalState to return a deep clone of the Reflux.GlobalState object which will
		 * not continue to mutate as Reflux.GlobalState continues to mutate.
		 */
		Reflux.GlobalState = Reflux.GlobalState || {};
		
		/**
		 * Reflux.stores
		 * All initialized stores that have an id will have a reference to their singleton stored here with the key being the id.
		 */
		Reflux.stores = {};
		
		/**
		 * Reflux.getGlobalState takes no arguments, and returns a deep clone of Reflux.GlobalState 
		 * which will not continue to mutate as Reflux.GlobalState does. It can essentially store
		 * snapshots of the global state as the program goes for saving or for in-app time travel.
		 */
		Reflux.getGlobalState = function() {
			return clone(Reflux.GlobalState);
		};
		
		/**
		 * Reflux.setGlobalState takes one argument that is a representation of the a possible
		 * global state. It updates all stores in the program to represent data in that given state.
		 * This includes triggering those stores so that that state is represented in any Reflux.Component
		 * instances they are attached to. Partial states may be given to it, and only the represented
		 * stores/state values will be updated.
		 */
		Reflux.setGlobalState = function(obj) {
			for (var storeID in obj) {
				if (Reflux.stores[storeID]) {
					Reflux.stores[storeID].setState(obj[storeID]);
				} else {
					Reflux.GlobalState[storeID] = obj[storeID];
				}
			}
		};
		
		/**
		 * Reflux.initStore takes one argument (a class that extends Reflux.Store) and returns a singleton
		 * intance of that class. Its main functionality is to be able to mimic what happens to stores attached to
		 * this.store or this.stores during the mounting phase of a component without having to actually attach the
		 * store to a component in order to work properly with the global state.
		 */
		// Reflux.initializeGlobalStore is kept for backwards compatibility, but deprecated since the function is
		// now for more broad instantiation of globally stored AND non-globally stored classes
		Reflux.initializeGlobalStore = Reflux.initStore = function(str) {
			var storeId = str.id;
			// if they're initializing something twice then we're done already, return it
			if (str.singleton) {
				return str.singleton;
			}
			// if no id then it's easy: just make new instance and set to singleton
			if (!storeId) {
				str.singleton = new str();
				return str.singleton;
			}
			// create the singleton and assign it to the class's singleton static property
			var inst = str.singleton = new str();
			// store it on the Reflux.stores array to be accessible later
			Reflux.stores[storeId] = inst;
			// the singleton instance itself should also have the id property of the class
			inst.id = storeId;
			// if the global state has something set for this id, copy it to the state and then
			// make sure to set the global state to the end result, since it may have only been partial
			if (Reflux.GlobalState[storeId]) {
				for (var key in Reflux.GlobalState[storeId]) {
					inst.state[key] = Reflux.GlobalState[storeId][key];
				}
				Reflux.GlobalState[storeId] = inst.state;
			// otherwise just set the global state to the default state of the class
			} else {
				Reflux.GlobalState[storeId] = inst.state;
			}
			// returns the singleton itself, though it will also be accessible as as `MyClass.singleton`
			return inst;
		};
		// --------- END Reflux Static Props/Methods ------------
		
		// so it knows not to redefine Reflux static stuff and stores if called again
		_defined = true;
	}
	
	// filters a state object by storeKeys array (if it exists)
	// if filtering and obj contains no properties to use, returns false to let the component know not to update
	function filterByStoreKeys(storeKeys, obj)
	{
		// if there are not storeKeys defined then simply return the whole original object
		if (!storeKeys) {
			return obj;
		}
		// otherwise go through and only update properties that are in the storeKeys array, and return straight false if there are none
		var doUpdate = false;
		var updateObj = {};
		for (var i = 0, ii = storeKeys.length; i < ii; i++) {
			var prop = storeKeys[i];
			if (obj.hasOwnProperty(prop)) {
				doUpdate = true;
				updateObj[prop] = obj[prop];
			}
		}
		return doUpdate ? updateObj : false;
	}
	
	// this is utilized by some of the global state functionality in order to get a clone that will
	// not continue to be modified as the GlobalState mutates
	function clone(frm, to) {
		if (frm === null || typeof frm !== "object") {
			return frm;
		}
		if (frm.constructor !== Object && frm.constructor !== Array) {
			return frm;
		}
		if (frm.constructor === Date || frm.constructor === RegExp || frm.constructor === Function ||
			frm.constructor === String || frm.constructor === Number || frm.constructor === Boolean) {
			return new frm.constructor(frm);
		}
		to = to || new frm.constructor();
		for (var name in frm) {
			to[name] = typeof to[name] === "undefined" ? clone(frm[name], null) : to[name];
		}
		return to;
	}
	
	module.exports = defineReact;
	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _uiStates = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CounterStore = new _uiStates.DefaultStore("counter");
	CounterStore.update({ count: 0 });
	
	function increment() {
	    CounterStore.update({ count: CounterStore.getModel().count + 1 });
	}
	
	function decrement() {
	    CounterStore.update({ count: CounterStore.getModel().count - 1 });
	}
	
	function changeBy(amount) {
	    CounterStore.update({ count: CounterStore.getModel().count + amount });
	}
	
	var Counter = function (_React$Component) {
	    _inherits(Counter, _React$Component);
	
	    function Counter() {
	        _classCallCheck(this, Counter);
	
	        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
	    }
	
	    _createClass(Counter, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.uiState = new _uiStates.DefaultUIState(this, null, [{ store: CounterStore }]);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.uiState.removeState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.uiState.get('counter.count')
	            );
	        }
	    }]);
	
	    return Counter;
	}(_react2.default.Component);
	
	exports.default = Counter;
	
	
	setInterval(increment, 1000);

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reflux = __webpack_require__(4);
	
	var _reflux2 = _interopRequireDefault(_reflux);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CounterStore = new _reflux2.default.Store();
	CounterStore.setState({ count: 0 });
	
	function increment() {
	    CounterStore.setState({ count: CounterStore.state.count + 1 });
	}
	
	function decrement() {
	    CounterStore.setState({ count: CounterStore.state.count - 1 });
	}
	
	function changeBy(amount) {
	    CounterStore.setState({ count: CounterStore.state.count + amount });
	}
	
	var Counter = function (_Reflux$Component) {
	    _inherits(Counter, _Reflux$Component);
	
	    function Counter(props) {
	        _classCallCheck(this, Counter);
	
	        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
	
	        _this.store = CounterStore;
	        return _this;
	    }
	
	    _createClass(Counter, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.state.count
	            );
	        }
	    }]);
	
	    return Counter;
	}(_reflux2.default.Component);
	
	exports.default = Counter;
	
	
	setInterval(increment, 1000);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sampleArray = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobx = __webpack_require__(29);
	
	var _mobx2 = _interopRequireDefault(_mobx);
	
	var _mobxReact = __webpack_require__(30);
	
	var _mobxReact2 = _interopRequireDefault(_mobxReact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sampleArray = _mobx2.default.observable(["Matt", "Kelly"]);
	
	var ListView = (0, _mobxReact.observer)(function ListView() {
	    return _react2.default.createElement(
	        'ul',
	        null,
	        this.props.list.map(function (item) {
	            return _react2.default.createElement(
	                'div',
	                { key: item },
	                item
	            );
	        })
	    );
	});
	
	exports.default = ListView;
	exports.sampleArray = sampleArray;

/***/ },
/* 29 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	registerGlobals();
	exports.extras = {
	    allowStateChanges: allowStateChanges,
	    deepEqual: deepEqual,
	    getAtom: getAtom,
	    getDebugName: getDebugName,
	    getDependencyTree: getDependencyTree,
	    getAdministration: getAdministration,
	    getGlobalState: getGlobalState,
	    getObserverTree: getObserverTree,
	    isComputingDerivation: isComputingDerivation,
	    isSpyEnabled: isSpyEnabled,
	    onReactionError: onReactionError,
	    resetGlobalState: resetGlobalState,
	    shareGlobalState: shareGlobalState,
	    spyReport: spyReport,
	    spyReportEnd: spyReportEnd,
	    spyReportStart: spyReportStart,
	    setReactionScheduler: setReactionScheduler
	};
	if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx(module.exports);
	}
	module.exports.default = module.exports;
	var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
	    var actionName = (args && args.length === 1) ? args[0] : (value.name || key || "<unnamed action>");
	    var wrappedAction = action(actionName, value);
	    addHiddenProp(target, key, wrappedAction);
	}, function (key) {
	    return this[key];
	}, function () {
	    invariant(false, getMessage("m001"));
	}, false, true);
	var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
	    defineBoundAction(target, key, value);
	}, function (key) {
	    return this[key];
	}, function () {
	    invariant(false, getMessage("m001"));
	}, false, false);
	var action = function action(arg1, arg2, arg3, arg4) {
	    if (arguments.length === 1 && typeof arg1 === "function")
	        return createAction(arg1.name || "<unnamed action>", arg1);
	    if (arguments.length === 2 && typeof arg2 === "function")
	        return createAction(arg1, arg2);
	    if (arguments.length === 1 && typeof arg1 === "string")
	        return namedActionDecorator(arg1);
	    return namedActionDecorator(arg2).apply(null, arguments);
	};
	exports.action = action;
	action.bound = function boundAction(arg1, arg2, arg3) {
	    if (typeof arg1 === "function") {
	        var action_1 = createAction("<not yet bound action>", arg1);
	        action_1.autoBind = true;
	        return action_1;
	    }
	    return boundActionDecorator.apply(null, arguments);
	};
	function namedActionDecorator(name) {
	    return function (target, prop, descriptor) {
	        if (descriptor && typeof descriptor.value === "function") {
	            descriptor.value = createAction(name, descriptor.value);
	            descriptor.enumerable = false;
	            descriptor.configurable = true;
	            return descriptor;
	        }
	        return actionFieldDecorator(name).apply(this, arguments);
	    };
	}
	function runInAction(arg1, arg2, arg3) {
	    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
	    var fn = typeof arg1 === "function" ? arg1 : arg2;
	    var scope = typeof arg1 === "function" ? arg2 : arg3;
	    invariant(typeof fn === "function", getMessage("m002"));
	    invariant(fn.length === 0, getMessage("m003"));
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    return executeAction(actionName, fn, scope, undefined);
	}
	exports.runInAction = runInAction;
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}
	exports.isAction = isAction;
	function defineBoundAction(target, propertyName, fn) {
	    var res = function () {
	        return executeAction(propertyName, fn, target, arguments);
	    };
	    res.isMobxAction = true;
	    addHiddenProp(target, propertyName, res);
	}
	function autorun(arg1, arg2, arg3) {
	    var name, view, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        view = arg2;
	        scope = arg3;
	    }
	    else {
	        name = arg1.name || ("Autorun@" + getNextId());
	        view = arg1;
	        scope = arg2;
	    }
	    invariant(typeof view === "function", getMessage("m004"));
	    invariant(isAction(view) === false, getMessage("m005"));
	    if (scope)
	        view = view.bind(scope);
	    var reaction = new Reaction(name, function () {
	        this.track(reactionRunner);
	    });
	    function reactionRunner() {
	        view(reaction);
	    }
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	exports.autorun = autorun;
	function when(arg1, arg2, arg3, arg4) {
	    var name, predicate, effect, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        predicate = arg2;
	        effect = arg3;
	        scope = arg4;
	    }
	    else {
	        name = ("When@" + getNextId());
	        predicate = arg1;
	        effect = arg2;
	        scope = arg3;
	    }
	    var disposer = autorun(name, function (r) {
	        if (predicate.call(scope)) {
	            r.dispose();
	            var prevUntracked = untrackedStart();
	            effect.call(scope);
	            untrackedEnd(prevUntracked);
	        }
	    });
	    return disposer;
	}
	exports.when = when;
	function autorunAsync(arg1, arg2, arg3, arg4) {
	    var name, func, delay, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        func = arg2;
	        delay = arg3;
	        scope = arg4;
	    }
	    else {
	        name = arg1.name || ("AutorunAsync@" + getNextId());
	        func = arg1;
	        delay = arg2;
	        scope = arg3;
	    }
	    invariant(isAction(func) === false, getMessage("m006"));
	    if (delay === void 0)
	        delay = 1;
	    if (scope)
	        func = func.bind(scope);
	    var isScheduled = false;
	    var r = new Reaction(name, function () {
	        if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                if (!r.isDisposed)
	                    r.track(reactionRunner);
	            }, delay);
	        }
	    });
	    function reactionRunner() { func(r); }
	    r.schedule();
	    return r.getDisposer();
	}
	exports.autorunAsync = autorunAsync;
	function reaction(expression, effect, arg3) {
	    if (arguments.length > 3) {
	        fail(getMessage("m007"));
	    }
	    if (isModifierDescriptor(expression)) {
	        fail(getMessage("m008"));
	    }
	    var opts;
	    if (typeof arg3 === "object") {
	        opts = arg3;
	    }
	    else {
	        opts = {};
	    }
	    opts.name = opts.name || expression.name || effect.name || ("Reaction@" + getNextId());
	    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
	    opts.delay = opts.delay || 0;
	    opts.compareStructural = opts.compareStructural || opts.struct || false;
	    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
	    if (opts.context) {
	        expression = expression.bind(opts.context);
	    }
	    var firstTime = true;
	    var isScheduled = false;
	    var nextValue;
	    var r = new Reaction(opts.name, function () {
	        if (firstTime || opts.delay < 1) {
	            reactionRunner();
	        }
	        else if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                reactionRunner();
	            }, opts.delay);
	        }
	    });
	    function reactionRunner() {
	        if (r.isDisposed)
	            return;
	        var changed = false;
	        r.track(function () {
	            var v = expression(r);
	            changed = valueDidChange(opts.compareStructural, nextValue, v);
	            nextValue = v;
	        });
	        if (firstTime && opts.fireImmediately)
	            effect(nextValue, r);
	        if (!firstTime && changed === true)
	            effect(nextValue, r);
	        if (firstTime)
	            firstTime = false;
	    }
	    r.schedule();
	    return r.getDisposer();
	}
	exports.reaction = reaction;
	function createComputedDecorator(compareStructural) {
	    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
	        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
	        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
	        var adm = asObservableObject(target, "");
	        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, compareStructural, false);
	    }, function (name) {
	        var observable = this.$mobx.values[name];
	        if (observable === undefined)
	            return undefined;
	        return observable.get();
	    }, function (name, value) {
	        this.$mobx.values[name].set(value);
	    }, false, false);
	}
	var computedDecorator = createComputedDecorator(false);
	var computedStructDecorator = createComputedDecorator(true);
	var computed = (function computed(arg1, arg2, arg3) {
	    if (typeof arg2 === "string") {
	        return computedDecorator.apply(null, arguments);
	    }
	    invariant(typeof arg1 === "function", getMessage("m011"));
	    invariant(arguments.length < 3, getMessage("m012"));
	    var opts = typeof arg2 === "object" ? arg2 : {};
	    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
	    return new ComputedValue(arg1, opts.context, opts.compareStructural || opts.struct || false, opts.name || arg1.name || "", opts.setter);
	});
	exports.computed = computed;
	computed.struct = computedStructDecorator;
	function createTransformer(transformer, onCleanup) {
	    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
	    var objectCache = {};
	    var resetId = globalState.resetId;
	    var Transformer = (function (_super) {
	        __extends(Transformer, _super);
	        function Transformer(sourceIdentifier, sourceObject) {
	            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, false, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
	            _this.sourceIdentifier = sourceIdentifier;
	            _this.sourceObject = sourceObject;
	            return _this;
	        }
	        Transformer.prototype.onBecomeUnobserved = function () {
	            var lastValue = this.value;
	            _super.prototype.onBecomeUnobserved.call(this);
	            delete objectCache[this.sourceIdentifier];
	            if (onCleanup)
	                onCleanup(lastValue, this.sourceObject);
	        };
	        return Transformer;
	    }(ComputedValue));
	    return function (object) {
	        if (resetId !== globalState.resetId) {
	            objectCache = {};
	            resetId = globalState.resetId;
	        }
	        var identifier = getMemoizationId(object);
	        var reactiveTransformer = objectCache[identifier];
	        if (reactiveTransformer)
	            return reactiveTransformer.get();
	        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
	        return reactiveTransformer.get();
	    };
	}
	exports.createTransformer = createTransformer;
	function getMemoizationId(object) {
	    if (object === null || typeof object !== "object")
	        throw new Error("[mobx] transform expected some kind of object, got: " + object);
	    var tid = object.$transformId;
	    if (tid === undefined) {
	        tid = getNextId();
	        addHiddenProp(object, "$transformId", tid);
	    }
	    return tid;
	}
	function expr(expr, scope) {
	    if (!isComputingDerivation())
	        console.warn(getMessage("m013"));
	    return computed(expr, { context: scope }).get();
	}
	exports.expr = expr;
	function extendObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    return extendObservableHelper(target, deepEnhancer, properties);
	}
	exports.extendObservable = extendObservable;
	function extendShallowObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    return extendObservableHelper(target, referenceEnhancer, properties);
	}
	exports.extendShallowObservable = extendShallowObservable;
	function extendObservableHelper(target, defaultEnhancer, properties) {
	    invariant(arguments.length >= 2, getMessage("m014"));
	    invariant(typeof target === "object", getMessage("m015"));
	    invariant(!(isObservableMap(target)), getMessage("m016"));
	    properties.forEach(function (propSet) {
	        invariant(typeof propSet === "object", getMessage("m017"));
	        invariant(!isObservable(propSet), getMessage("m018"));
	    });
	    var adm = asObservableObject(target);
	    var definedProps = {};
	    for (var i = properties.length - 1; i >= 0; i--) {
	        var propSet = properties[i];
	        for (var key in propSet)
	            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
	                definedProps[key] = true;
	                if (target === propSet && !isPropertyConfigurable(target, key))
	                    continue;
	                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
	                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
	            }
	    }
	    return target;
	}
	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length > 0)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing, property) {
	    return nodeToObserverTree(getAtom(thing, property));
	}
	function nodeToObserverTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (hasObservers(node))
	        result.observers = getObservers(node).map(nodeToObserverTree);
	    return result;
	}
	function intercept(thing, propOrHandler, handler) {
	    if (typeof handler === "function")
	        return interceptProperty(thing, propOrHandler, handler);
	    else
	        return interceptInterceptable(thing, propOrHandler);
	}
	exports.intercept = intercept;
	function interceptInterceptable(thing, handler) {
	    return getAdministration(thing).intercept(handler);
	}
	function interceptProperty(thing, property, handler) {
	    return getAdministration(thing, property).intercept(handler);
	}
	function isComputed(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableObject(value) === false)
	            return false;
	        var atom = getAtom(value, property);
	        return isComputedValue(atom);
	    }
	    return isComputedValue(value);
	}
	exports.isComputed = isComputed;
	function isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableArray(value) || isObservableMap(value))
	            throw new Error(getMessage("m019"));
	        else if (isObservableObject(value)) {
	            var o = value.$mobx;
	            return o.values && !!o.values[property];
	        }
	        return false;
	    }
	    return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
	}
	exports.isObservable = isObservable;
	var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
	var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
	var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
	var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
	var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
	function createObservable(v) {
	    if (v === void 0) { v = undefined; }
	    if (typeof arguments[1] === "string")
	        return deepDecorator.apply(null, arguments);
	    invariant(arguments.length <= 1, getMessage("m021"));
	    invariant(!isModifierDescriptor(v), getMessage("m020"));
	    if (isObservable(v))
	        return v;
	    var res = deepEnhancer(v, undefined, undefined);
	    if (res !== v)
	        return res;
	    return observable.box(v);
	}
	var IObservableFactories = (function () {
	    function IObservableFactories() {
	    }
	    IObservableFactories.prototype.box = function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("box");
	        return new ObservableValue(value, deepEnhancer, name);
	    };
	    IObservableFactories.prototype.shallowBox = function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowBox");
	        return new ObservableValue(value, referenceEnhancer, name);
	    };
	    IObservableFactories.prototype.array = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("array");
	        return new ObservableArray(initialValues, deepEnhancer, name);
	    };
	    IObservableFactories.prototype.shallowArray = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowArray");
	        return new ObservableArray(initialValues, referenceEnhancer, name);
	    };
	    IObservableFactories.prototype.map = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("map");
	        return new ObservableMap(initialValues, deepEnhancer, name);
	    };
	    IObservableFactories.prototype.shallowMap = function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowMap");
	        return new ObservableMap(initialValues, referenceEnhancer, name);
	    };
	    IObservableFactories.prototype.object = function (props, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("object");
	        var res = {};
	        asObservableObject(res, name);
	        extendObservable(res, props);
	        return res;
	    };
	    IObservableFactories.prototype.shallowObject = function (props, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowObject");
	        var res = {};
	        asObservableObject(res, name);
	        extendShallowObservable(res, props);
	        return res;
	    };
	    IObservableFactories.prototype.ref = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(referenceEnhancer, arguments[0]);
	        }
	        else {
	            return refDecorator.apply(null, arguments);
	        }
	    };
	    IObservableFactories.prototype.shallow = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(shallowEnhancer, arguments[0]);
	        }
	        else {
	            return shallowDecorator.apply(null, arguments);
	        }
	    };
	    IObservableFactories.prototype.deep = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(deepEnhancer, arguments[0]);
	        }
	        else {
	            return deepDecorator.apply(null, arguments);
	        }
	    };
	    IObservableFactories.prototype.struct = function () {
	        if (arguments.length < 2) {
	            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
	        }
	        else {
	            return deepStructDecorator.apply(null, arguments);
	        }
	    };
	    return IObservableFactories;
	}());
	exports.IObservableFactories = IObservableFactories;
	var observable = createObservable;
	exports.observable = observable;
	Object.keys(IObservableFactories.prototype).forEach(function (key) { return observable[key] = IObservableFactories.prototype[key]; });
	observable.deep.struct = observable.struct;
	observable.ref.struct = function () {
	    if (arguments.length < 2) {
	        return createModifierDescriptor(refStructEnhancer, arguments[0]);
	    }
	    else {
	        return refStructDecorator.apply(null, arguments);
	    }
	};
	function incorrectlyUsedAsDecorator(methodName) {
	    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
	}
	function createDecoratorForEnhancer(enhancer) {
	    invariant(!!enhancer, ":(");
	    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
	        assertPropertyConfigurable(target, name);
	        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
	        var adm = asObservableObject(target, undefined);
	        defineObservableProperty(adm, name, baseValue, enhancer);
	    }, function (name) {
	        var observable = this.$mobx.values[name];
	        if (observable === undefined)
	            return undefined;
	        return observable.get();
	    }, function (name, value) {
	        setPropertyValue(this, name, value);
	    }, true, false);
	}
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	exports.observe = observe;
	function observeObservable(thing, listener, fireImmediately) {
	    return getAdministration(thing).observe(listener, fireImmediately);
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    return getAdministration(thing, property).observe(listener, fireImmediately);
	}
	function toJS(source, detectCycles, __alreadySeen) {
	    if (detectCycles === void 0) { detectCycles = true; }
	    if (__alreadySeen === void 0) { __alreadySeen = []; }
	    function cache(value) {
	        if (detectCycles)
	            __alreadySeen.push([source, value]);
	        return value;
	    }
	    if (isObservable(source)) {
	        if (detectCycles && __alreadySeen === null)
	            __alreadySeen = [];
	        if (detectCycles && source !== null && typeof source === "object") {
	            for (var i = 0, l = __alreadySeen.length; i < l; i++)
	                if (__alreadySeen[i][0] === source)
	                    return __alreadySeen[i][1];
	        }
	        if (isObservableArray(source)) {
	            var res = cache([]);
	            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
	            res.length = toAdd.length;
	            for (var i = 0, l = toAdd.length; i < l; i++)
	                res[i] = toAdd[i];
	            return res;
	        }
	        if (isObservableObject(source)) {
	            var res = cache({});
	            for (var key in source)
	                res[key] = toJS(source[key], detectCycles, __alreadySeen);
	            return res;
	        }
	        if (isObservableMap(source)) {
	            var res_1 = cache({});
	            source.forEach(function (value, key) { return res_1[key] = toJS(value, detectCycles, __alreadySeen); });
	            return res_1;
	        }
	        if (isObservableValue(source))
	            return toJS(source.get(), detectCycles, __alreadySeen);
	    }
	    return source;
	}
	exports.toJS = toJS;
	function transaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    deprecated(getMessage("m023"));
	    return runInTransaction.apply(undefined, arguments);
	}
	exports.transaction = transaction;
	function runInTransaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    return executeAction("", action);
	}
	function log(msg) {
	    console.log(msg);
	    return msg;
	}
	function whyRun(thing, prop) {
	    switch (arguments.length) {
	        case 0:
	            thing = globalState.trackingDerivation;
	            if (!thing)
	                return log(getMessage("m024"));
	            break;
	        case 2:
	            thing = getAtom(thing, prop);
	            break;
	    }
	    thing = getAtom(thing);
	    if (isComputedValue(thing))
	        return log(thing.whyRun());
	    else if (isReaction(thing))
	        return log(thing.whyRun());
	    return fail(getMessage("m025"));
	}
	exports.whyRun = whyRun;
	function createAction(actionName, fn) {
	    invariant(typeof fn === "function", getMessage("m026"));
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    var res = function () {
	        return executeAction(actionName, fn, this, arguments);
	    };
	    res.originalFn = fn;
	    res.isMobxAction = true;
	    return res;
	}
	function executeAction(actionName, fn, scope, args) {
	    var runInfo = startAction(actionName, fn, scope, args);
	    try {
	        return fn.apply(scope, args);
	    }
	    finally {
	        endAction(runInfo);
	    }
	}
	function startAction(actionName, fn, scope, args) {
	    var notifySpy = isSpyEnabled() && !!actionName;
	    var startTime = 0;
	    if (notifySpy) {
	        startTime = Date.now();
	        var l = (args && args.length) || 0;
	        var flattendArgs = new Array(l);
	        if (l > 0)
	            for (var i = 0; i < l; i++)
	                flattendArgs[i] = args[i];
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            fn: fn,
	            object: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevDerivation = untrackedStart();
	    startBatch();
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    return {
	        prevDerivation: prevDerivation,
	        prevAllowStateChanges: prevAllowStateChanges,
	        notifySpy: notifySpy,
	        startTime: startTime
	    };
	}
	function endAction(runInfo) {
	    allowStateChangesEnd(runInfo.prevAllowStateChanges);
	    endBatch();
	    untrackedEnd(runInfo.prevDerivation);
	    if (runInfo.notifySpy)
	        spyReportEnd({ time: Date.now() - runInfo.startTime });
	}
	function useStrict(strict) {
	    invariant(globalState.trackingDerivation === null, getMessage("m028"));
	    globalState.strictMode = strict;
	    globalState.allowStateChanges = !strict;
	}
	exports.useStrict = useStrict;
	function isStrictModeEnabled() {
	    return globalState.strictMode;
	}
	exports.isStrictModeEnabled = isStrictModeEnabled;
	function allowStateChanges(allowStateChanges, func) {
	    var prev = allowStateChangesStart(allowStateChanges);
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        allowStateChangesEnd(prev);
	    }
	    return res;
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	var BaseAtom = (function () {
	    function BaseAtom(name) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        this.name = name;
	        this.isPendingUnobservation = true;
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = IDerivationState.NOT_TRACKING;
	    }
	    BaseAtom.prototype.onBecomeUnobserved = function () {
	    };
	    BaseAtom.prototype.reportObserved = function () {
	        reportObserved(this);
	    };
	    BaseAtom.prototype.reportChanged = function () {
	        startBatch();
	        propagateChanged(this);
	        endBatch();
	    };
	    BaseAtom.prototype.toString = function () {
	        return this.name;
	    };
	    return BaseAtom;
	}());
	exports.BaseAtom = BaseAtom;
	var Atom = (function (_super) {
	    __extends(Atom, _super);
	    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
	        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
	        var _this = _super.call(this, name) || this;
	        _this.name = name;
	        _this.onBecomeObservedHandler = onBecomeObservedHandler;
	        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
	        _this.isPendingUnobservation = false;
	        _this.isBeingTracked = false;
	        return _this;
	    }
	    Atom.prototype.reportObserved = function () {
	        startBatch();
	        _super.prototype.reportObserved.call(this);
	        if (!this.isBeingTracked) {
	            this.isBeingTracked = true;
	            this.onBecomeObservedHandler();
	        }
	        endBatch();
	        return !!globalState.trackingDerivation;
	    };
	    Atom.prototype.onBecomeUnobserved = function () {
	        this.isBeingTracked = false;
	        this.onBecomeUnobservedHandler();
	    };
	    return Atom;
	}(BaseAtom));
	exports.Atom = Atom;
	var isAtom = createInstanceofPredicate("Atom", BaseAtom);
	var ComputedValue = (function () {
	    function ComputedValue(derivation, scope, compareStructural, name, setter) {
	        this.derivation = derivation;
	        this.scope = scope;
	        this.compareStructural = compareStructural;
	        this.dependenciesState = IDerivationState.NOT_TRACKING;
	        this.observing = [];
	        this.newObserving = null;
	        this.isPendingUnobservation = false;
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.runId = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = IDerivationState.UP_TO_DATE;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.value = undefined;
	        this.isComputing = false;
	        this.isRunningSetter = false;
	        this.name = name || "ComputedValue@" + getNextId();
	        if (setter)
	            this.setter = createAction(name + "-setter", setter);
	    }
	    ComputedValue.prototype.onBecomeStale = function () {
	        propagateMaybeChanged(this);
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () {
	        invariant(this.dependenciesState !== IDerivationState.NOT_TRACKING, getMessage("m029"));
	        clearObserving(this);
	        this.value = undefined;
	    };
	    ComputedValue.prototype.get = function () {
	        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
	        if (globalState.inBatch === 0) {
	            startBatch();
	            if (shouldCompute(this))
	                this.value = this.computeValue(false);
	            endBatch();
	        }
	        else {
	            reportObserved(this);
	            if (shouldCompute(this))
	                if (this.trackAndCompute())
	                    propagateChangeConfirmed(this);
	        }
	        var result = this.value;
	        if (isCaughtException(result))
	            throw result.cause;
	        return result;
	    };
	    ComputedValue.prototype.peek = function () {
	        var res = this.computeValue(false);
	        if (isCaughtException(res))
	            throw res.cause;
	        return res;
	    };
	    ComputedValue.prototype.set = function (value) {
	        if (this.setter) {
	            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
	            this.isRunningSetter = true;
	            try {
	                this.setter.call(this.scope, value);
	            }
	            finally {
	                this.isRunningSetter = false;
	            }
	        }
	        else
	            invariant(false, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled()) {
	            spyReport({
	                object: this.scope,
	                type: "compute",
	                fn: this.derivation
	            });
	        }
	        var oldValue = this.value;
	        var newValue = this.value = this.computeValue(true);
	        return isCaughtException(newValue) || valueDidChange(this.compareStructural, newValue, oldValue);
	    };
	    ComputedValue.prototype.computeValue = function (track) {
	        this.isComputing = true;
	        globalState.computationDepth++;
	        var res;
	        if (track) {
	            res = trackDerivedFunction(this, this.derivation, this.scope);
	        }
	        else {
	            try {
	                res = this.derivation.call(this.scope);
	            }
	            catch (e) {
	                res = new CaughtException(e);
	            }
	        }
	        globalState.computationDepth--;
	        this.isComputing = false;
	        return res;
	    };
	    ;
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener({
	                    type: "update",
	                    object: _this,
	                    newValue: newValue,
	                    oldValue: prevValue
	                });
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    ;
	    ComputedValue.prototype.whyRun = function () {
	        var isTracking = Boolean(globalState.trackingDerivation);
	        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
	        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
	        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" +
	            (this.dependenciesState === IDerivationState.NOT_TRACKING ? getMessage("m032") :
	                " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this.isComputing && isTracking) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
	    };
	    return ComputedValue;
	}());
	ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
	var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
	var IDerivationState;
	(function (IDerivationState) {
	    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
	    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
	    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
	    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
	})(IDerivationState || (IDerivationState = {}));
	exports.IDerivationState = IDerivationState;
	var CaughtException = (function () {
	    function CaughtException(cause) {
	        this.cause = cause;
	    }
	    return CaughtException;
	}());
	function isCaughtException(e) {
	    return e instanceof CaughtException;
	}
	function shouldCompute(derivation) {
	    switch (derivation.dependenciesState) {
	        case IDerivationState.UP_TO_DATE: return false;
	        case IDerivationState.NOT_TRACKING:
	        case IDerivationState.STALE: return true;
	        case IDerivationState.POSSIBLY_STALE: {
	            var prevUntracked = untrackedStart();
	            var obs = derivation.observing, l = obs.length;
	            for (var i = 0; i < l; i++) {
	                var obj = obs[i];
	                if (isComputedValue(obj)) {
	                    try {
	                        obj.get();
	                    }
	                    catch (e) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                    if (derivation.dependenciesState === IDerivationState.STALE) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                }
	            }
	            changeDependenciesStateTo0(derivation);
	            untrackedEnd(prevUntracked);
	            return false;
	        }
	    }
	}
	function isComputingDerivation() {
	    return globalState.trackingDerivation !== null;
	}
	function checkIfStateModificationsAreAllowed(atom) {
	    var hasObservers = atom.observers.length > 0;
	    if (globalState.computationDepth > 0 && hasObservers)
	        fail(getMessage("m031") + atom.name);
	    if (!globalState.allowStateChanges && hasObservers)
	        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
	}
	function trackDerivedFunction(derivation, f, context) {
	    changeDependenciesStateTo0(derivation);
	    derivation.newObserving = new Array(derivation.observing.length + 100);
	    derivation.unboundDepsCount = 0;
	    derivation.runId = ++globalState.runId;
	    var prevTracking = globalState.trackingDerivation;
	    globalState.trackingDerivation = derivation;
	    var result;
	    try {
	        result = f.call(context);
	    }
	    catch (e) {
	        result = new CaughtException(e);
	    }
	    globalState.trackingDerivation = prevTracking;
	    bindDependencies(derivation);
	    return result;
	}
	function bindDependencies(derivation) {
	    var prevObserving = derivation.observing;
	    var observing = derivation.observing = derivation.newObserving;
	    derivation.newObserving = null;
	    var i0 = 0, l = derivation.unboundDepsCount;
	    for (var i = 0; i < l; i++) {
	        var dep = observing[i];
	        if (dep.diffValue === 0) {
	            dep.diffValue = 1;
	            if (i0 !== i)
	                observing[i0] = dep;
	            i0++;
	        }
	    }
	    observing.length = i0;
	    l = prevObserving.length;
	    while (l--) {
	        var dep = prevObserving[l];
	        if (dep.diffValue === 0) {
	            removeObserver(dep, derivation);
	        }
	        dep.diffValue = 0;
	    }
	    while (i0--) {
	        var dep = observing[i0];
	        if (dep.diffValue === 1) {
	            dep.diffValue = 0;
	            addObserver(dep, derivation);
	        }
	    }
	}
	function clearObserving(derivation) {
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        removeObserver(obs[i], derivation);
	    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
	    obs.length = 0;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    var res = action();
	    untrackedEnd(prev);
	    return res;
	}
	exports.untracked = untracked;
	function untrackedStart() {
	    var prev = globalState.trackingDerivation;
	    globalState.trackingDerivation = null;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.trackingDerivation = prev;
	}
	function changeDependenciesStateTo0(derivation) {
	    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
	        return;
	    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
	}
	var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
	var MobXGlobals = (function () {
	    function MobXGlobals() {
	        this.version = 5;
	        this.trackingDerivation = null;
	        this.computationDepth = 0;
	        this.runId = 0;
	        this.mobxGuid = 0;
	        this.inBatch = 0;
	        this.pendingUnobservations = [];
	        this.pendingReactions = [];
	        this.isRunningReactions = false;
	        this.allowStateChanges = true;
	        this.strictMode = false;
	        this.resetId = 0;
	        this.spyListeners = [];
	        this.globalReactionErrorHandlers = [];
	    }
	    return MobXGlobals;
	}());
	var globalState = new MobXGlobals();
	function shareGlobalState() {
	    var global = getGlobal();
	    var ownState = globalState;
	    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
	        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
	    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
	        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
	    if (global.__mobxGlobal)
	        globalState = global.__mobxGlobal;
	    else
	        global.__mobxGlobal = ownState;
	}
	function getGlobalState() {
	    return globalState;
	}
	function registerGlobals() {
	}
	function resetGlobalState() {
	    globalState.resetId++;
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (persistentKeys.indexOf(key) === -1)
	            globalState[key] = defaultGlobals[key];
	    globalState.allowStateChanges = !globalState.strictMode;
	}
	function hasObservers(observable) {
	    return observable.observers && observable.observers.length > 0;
	}
	function getObservers(observable) {
	    return observable.observers;
	}
	function invariantObservers(observable) {
	    var list = observable.observers;
	    var map = observable.observersIndexes;
	    var l = list.length;
	    for (var i = 0; i < l; i++) {
	        var id = list[i].__mapid;
	        if (i) {
	            invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list");
	        }
	        else {
	            invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldnt be held in map.");
	        }
	    }
	    invariant(list.length === 0 || Object.keys(map).length === list.length - 1, "INTERNAL ERROR there is no junk in map");
	}
	function addObserver(observable, node) {
	    var l = observable.observers.length;
	    if (l) {
	        observable.observersIndexes[node.__mapid] = l;
	    }
	    observable.observers[l] = node;
	    if (observable.lowestObserverState > node.dependenciesState)
	        observable.lowestObserverState = node.dependenciesState;
	}
	function removeObserver(observable, node) {
	    if (observable.observers.length === 1) {
	        observable.observers.length = 0;
	        queueForUnobservation(observable);
	    }
	    else {
	        var list = observable.observers;
	        var map_1 = observable.observersIndexes;
	        var filler = list.pop();
	        if (filler !== node) {
	            var index = map_1[node.__mapid] || 0;
	            if (index) {
	                map_1[filler.__mapid] = index;
	            }
	            else {
	                delete map_1[filler.__mapid];
	            }
	            list[index] = filler;
	        }
	        delete map_1[node.__mapid];
	    }
	}
	function queueForUnobservation(observable) {
	    if (!observable.isPendingUnobservation) {
	        observable.isPendingUnobservation = true;
	        globalState.pendingUnobservations.push(observable);
	    }
	}
	function startBatch() {
	    globalState.inBatch++;
	}
	function endBatch() {
	    if (--globalState.inBatch === 0) {
	        runReactions();
	        var list = globalState.pendingUnobservations;
	        for (var i = 0; i < list.length; i++) {
	            var observable_1 = list[i];
	            observable_1.isPendingUnobservation = false;
	            if (observable_1.observers.length === 0) {
	                observable_1.onBecomeUnobserved();
	            }
	        }
	        globalState.pendingUnobservations = [];
	    }
	}
	function reportObserved(observable) {
	    var derivation = globalState.trackingDerivation;
	    if (derivation !== null) {
	        if (derivation.runId !== observable.lastAccessedBy) {
	            observable.lastAccessedBy = derivation.runId;
	            derivation.newObserving[derivation.unboundDepsCount++] = observable;
	        }
	    }
	    else if (observable.observers.length === 0) {
	        queueForUnobservation(observable);
	    }
	}
	function invariantLOS(observable, msg) {
	    var min = getObservers(observable).reduce(function (a, b) { return Math.min(a, b.dependenciesState); }, 2);
	    if (min >= observable.lowestObserverState)
	        return;
	    throw new Error("lowestObserverState is wrong for " + msg + " because " + min + " < " + observable.lowestObserverState);
	}
	function propagateChanged(observable) {
	    if (observable.lowestObserverState === IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.UP_TO_DATE)
	            d.onBecomeStale();
	        d.dependenciesState = IDerivationState.STALE;
	    }
	}
	function propagateChangeConfirmed(observable) {
	    if (observable.lowestObserverState === IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
	            d.dependenciesState = IDerivationState.STALE;
	        else if (d.dependenciesState === IDerivationState.UP_TO_DATE)
	            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
	    }
	}
	function propagateMaybeChanged(observable) {
	    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
	        return;
	    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
	            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
	            d.onBecomeStale();
	        }
	    }
	}
	var Reaction = (function () {
	    function Reaction(name, onInvalidate) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.observing = [];
	        this.newObserving = [];
	        this.dependenciesState = IDerivationState.NOT_TRACKING;
	        this.diffValue = 0;
	        this.runId = 0;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	    }
	    Reaction.prototype.onBecomeStale = function () {
	        this.schedule();
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this._isScheduled;
	    };
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            startBatch();
	            this._isScheduled = false;
	            if (shouldCompute(this)) {
	                this._isTrackPending = true;
	                this.onInvalidate();
	                if (this._isTrackPending && isSpyEnabled()) {
	                    spyReport({
	                        object: this,
	                        type: "scheduled-reaction"
	                    });
	                }
	            }
	            endBatch();
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        startBatch();
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify) {
	            startTime = Date.now();
	            spyReportStart({
	                object: this,
	                type: "reaction",
	                fn: fn
	            });
	        }
	        this._isRunning = true;
	        var result = trackDerivedFunction(this, fn, undefined);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (this.isDisposed) {
	            clearObserving(this);
	        }
	        if (isCaughtException(result))
	            this.reportExceptionInDerivation(result.cause);
	        if (notify) {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	        endBatch();
	    };
	    Reaction.prototype.reportExceptionInDerivation = function (error) {
	        var _this = this;
	        if (this.errorHandler) {
	            this.errorHandler(error, this);
	            return;
	        }
	        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
	        var messageToUser = getMessage("m037");
	        console.error(message || messageToUser, error);
	        if (isSpyEnabled()) {
	            spyReport({
	                type: "error",
	                message: message,
	                error: error,
	                object: this
	            });
	        }
	        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            if (!this._isRunning) {
	                startBatch();
	                clearObserving(this);
	                endBatch();
	            }
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r.$mobx = this;
	        r.onError = registerErrorHandler;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.whyRun = function () {
	        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
	        return ("\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this._isRunning) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n");
	    };
	    return Reaction;
	}());
	exports.Reaction = Reaction;
	function registerErrorHandler(handler) {
	    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
	    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
	    this.$mobx.errorHandler = handler;
	}
	function onReactionError(handler) {
	    globalState.globalReactionErrorHandlers.push(handler);
	    return function () {
	        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
	        if (idx >= 0)
	            globalState.globalReactionErrorHandlers.splice(idx, 1);
	    };
	}
	var MAX_REACTION_ITERATIONS = 100;
	var reactionScheduler = function (f) { return f(); };
	function runReactions() {
	    if (globalState.inBatch > 0 || globalState.isRunningReactions)
	        return;
	    reactionScheduler(runReactionsHelper);
	}
	function runReactionsHelper() {
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS) {
	            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations."
	                + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
	            allReactions.splice(0);
	        }
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var isReaction = createInstanceofPredicate("Reaction", Reaction);
	function setReactionScheduler(fn) {
	    var baseScheduler = reactionScheduler;
	    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
	}
	function isSpyEnabled() {
	    return !!globalState.spyListeners.length;
	}
	function spyReport(event) {
	    if (!globalState.spyListeners.length)
	        return;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    var change = objectAssign({}, event, { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (change)
	        spyReport(objectAssign({}, change, END_EVENT));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    globalState.spyListeners.push(listener);
	    return once(function () {
	        var idx = globalState.spyListeners.indexOf(listener);
	        if (idx !== -1)
	            globalState.spyListeners.splice(idx, 1);
	    });
	}
	exports.spy = spy;
	function hasInterceptors(interceptable) {
	    return (interceptable.interceptors && interceptable.interceptors.length > 0);
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    try {
	        var interceptors = interceptable.interceptors;
	        if (interceptors)
	            for (var i = 0, l = interceptors.length; i < l; i++) {
	                change = interceptors[i](change);
	                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	                if (!change)
	                    break;
	            }
	        return change;
	    }
	    finally {
	        untrackedEnd(prevU);
	    }
	}
	function hasListeners(listenable) {
	    return listenable.changeListeners && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	        listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}
	function asReference(value) {
	    deprecated("asReference is deprecated, use observable.ref instead");
	    return observable.ref(value);
	}
	exports.asReference = asReference;
	function asStructure(value) {
	    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
	    return observable.struct(value);
	}
	exports.asStructure = asStructure;
	function asFlat(value) {
	    deprecated("asFlat is deprecated, use observable.shallow instead");
	    return observable.shallow(value);
	}
	exports.asFlat = asFlat;
	function asMap(data) {
	    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
	    return observable.map(data || {});
	}
	exports.asMap = asMap;
	function isModifierDescriptor(thing) {
	    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
	}
	exports.isModifierDescriptor = isModifierDescriptor;
	function createModifierDescriptor(enhancer, initialValue) {
	    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
	    return {
	        isMobxModifierDescriptor: true,
	        initialValue: initialValue,
	        enhancer: enhancer
	    };
	}
	function deepEnhancer(v, _, name) {
	    if (isModifierDescriptor(v))
	        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
	    if (isObservable(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.array(v, name);
	    if (isPlainObject(v))
	        return observable.object(v, name);
	    if (isES6Map(v))
	        return observable.map(v, name);
	    return v;
	}
	function shallowEnhancer(v, _, name) {
	    if (isModifierDescriptor(v))
	        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
	    if (v === undefined || v === null)
	        return v;
	    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.shallowArray(v, name);
	    if (isPlainObject(v))
	        return observable.shallowObject(v, name);
	    if (isES6Map(v))
	        return observable.shallowMap(v, name);
	    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
	}
	function referenceEnhancer(newValue) {
	    return newValue;
	}
	function deepStructEnhancer(v, oldValue, name) {
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    if (isObservable(v))
	        return v;
	    if (Array.isArray(v))
	        return new ObservableArray(v, deepStructEnhancer, name);
	    if (isES6Map(v))
	        return new ObservableMap(v, deepStructEnhancer, name);
	    if (isPlainObject(v)) {
	        var res = {};
	        asObservableObject(res, name);
	        extendObservableHelper(res, deepStructEnhancer, [v]);
	        return res;
	    }
	    return v;
	}
	function refStructEnhancer(v, oldValue, name) {
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    return v;
	}
	var MAX_SPLICE_SIZE = 10000;
	var safariPrototypeSetterInheritanceBug = (function () {
	    var v = false;
	    var p = {};
	    Object.defineProperty(p, "0", { set: function () { v = true; } });
	    Object.create(p)["0"] = 1;
	    return v === false;
	})();
	var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
	var StubArray = (function () {
	    function StubArray() {
	    }
	    return StubArray;
	}());
	StubArray.prototype = [];
	var ObservableArrayAdministration = (function () {
	    function ObservableArrayAdministration(name, enhancer, array, owned) {
	        this.array = array;
	        this.owned = owned;
	        this.lastKnownLength = 0;
	        this.interceptors = null;
	        this.changeListeners = null;
	        this.atom = new BaseAtom(name || ("ObservableArray@" + getNextId()));
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
	    }
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.array,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength) {
	            var newItems = new Array(newLength - currentLength);
	            for (var i = 0; i < newLength - currentLength; i++)
	                newItems[i] = undefined;
	            this.spliceWithArray(currentLength, 0, newItems);
	        }
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
	        this.lastKnownLength += delta;
	        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
	            reserveArrayBuffer(oldLength + delta + 1);
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this.atom);
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = [];
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
	        var lengthDelta = newItems.length - deleteCount;
	        this.updateArrayLength(length, lengthDelta);
	        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return res;
	    };
	    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
	        if (newItems.length < MAX_SPLICE_SIZE) {
	            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
	        }
	        else {
	            var res = this.values.slice(index, index + deleteCount);
	            this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
	            return res;
	        }
	        var _a;
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            object: this.array,
	            type: "update",
	            index: index, newValue: newValue, oldValue: oldValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            object: this.array,
	            type: "splice",
	            index: index, removed: removed, added: added,
	            removedCount: removed.length,
	            addedCount: added.length
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var ObservableArray = (function (_super) {
	    __extends(ObservableArray, _super);
	    function ObservableArray(initialValues, enhancer, name, owned) {
	        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
	        if (owned === void 0) { owned = false; }
	        var _this = _super.call(this) || this;
	        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
	        addHiddenFinalProp(_this, "$mobx", adm);
	        if (initialValues && initialValues.length) {
	            adm.updateArrayLength(0, initialValues.length);
	            adm.values = initialValues.map(function (v) { return enhancer(v, undefined, name + "[..]"); });
	            adm.notifyArraySplice(0, adm.values.slice(), EMPTY_ARRAY);
	        }
	        else {
	            adm.values = [];
	        }
	        if (safariPrototypeSetterInheritanceBug) {
	            Object.defineProperty(adm.array, "0", ENTRY_0);
	        }
	        return _this;
	    }
	    ObservableArray.prototype.intercept = function (handler) {
	        return this.$mobx.intercept(handler);
	    };
	    ObservableArray.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        return this.$mobx.observe(listener, fireImmediately);
	    };
	    ObservableArray.prototype.clear = function () {
	        return this.splice(0);
	    };
	    ObservableArray.prototype.concat = function () {
	        var arrays = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arrays[_i] = arguments[_i];
	        }
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return isObservableArray(a) ? a.peek() : a; }));
	    };
	    ObservableArray.prototype.replace = function (newItems) {
	        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
	    };
	    ObservableArray.prototype.toJS = function () {
	        return this.slice();
	    };
	    ObservableArray.prototype.toJSON = function () {
	        return this.toJS();
	    };
	    ObservableArray.prototype.peek = function () {
	        return this.$mobx.values;
	    };
	    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        this.$mobx.atom.reportObserved();
	        var items = this.$mobx.values, l = items.length;
	        for (var i = fromIndex; i < l; i++)
	            if (predicate.call(thisArg, items[i], i, this))
	                return items[i];
	        return undefined;
	    };
	    ObservableArray.prototype.splice = function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return this.$mobx.spliceWithArray(index);
	            case 2:
	                return this.$mobx.spliceWithArray(index, deleteCount);
	        }
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.pop = function () {
	        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
	    };
	    ObservableArray.prototype.shift = function () {
	        return this.splice(0, 1)[0];
	    };
	    ObservableArray.prototype.unshift = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.reverse = function () {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    };
	    ObservableArray.prototype.sort = function (compareFn) {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    };
	    ObservableArray.prototype.remove = function (value) {
	        var idx = this.$mobx.values.indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    };
	    ObservableArray.prototype.move = function (fromIndex, toIndex) {
	        function checkIndex(index) {
	            if (index < 0) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
	            }
	            var length = this.$mobx.values.length;
	            if (index >= length) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
	            }
	        }
	        checkIndex.call(this, fromIndex);
	        checkIndex.call(this, toIndex);
	        if (fromIndex === toIndex) {
	            return;
	        }
	        var oldItems = this.$mobx.values;
	        var newItems;
	        if (fromIndex < toIndex) {
	            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
	        }
	        else {
	            newItems = oldItems.slice(0, toIndex).concat([oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
	        }
	        this.replace(newItems);
	    };
	    ObservableArray.prototype.toString = function () {
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.toString.apply(this.$mobx.values, arguments);
	    };
	    ObservableArray.prototype.toLocaleString = function () {
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.toLocaleString.apply(this.$mobx.values, arguments);
	    };
	    return ObservableArray;
	}(StubArray));
	declareIterator(ObservableArray.prototype, function () {
	    return arrayAsIterator(this.slice());
	});
	makeNonEnumerable(ObservableArray.prototype, [
	    "constructor",
	    "intercept",
	    "observe",
	    "clear",
	    "concat",
	    "replace",
	    "toJS",
	    "toJSON",
	    "peek",
	    "find",
	    "splice",
	    "spliceWithArray",
	    "push",
	    "pop",
	    "shift",
	    "unshift",
	    "reverse",
	    "sort",
	    "remove",
	    "move",
	    "toString",
	    "toLocaleString"
	]);
	Object.defineProperty(ObservableArray.prototype, "length", {
	    enumerable: false,
	    configurable: true,
	    get: function () {
	        return this.$mobx.getArrayLength();
	    },
	    set: function (newLength) {
	        this.$mobx.setArrayLength(newLength);
	    }
	});
	[
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some"
	].forEach(function (funcName) {
	    var baseFunc = Array.prototype[funcName];
	    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
	    addHiddenProp(ObservableArray.prototype, funcName, function () {
	        this.$mobx.atom.reportObserved();
	        return baseFunc.apply(this.$mobx.values, arguments);
	    });
	});
	var ENTRY_0 = {
	    configurable: true,
	    enumerable: false,
	    set: createArraySetter(0),
	    get: createArrayGetter(0)
	};
	function createArrayBufferItem(index) {
	    var set = createArraySetter(index);
	    var get = createArrayGetter(index);
	    Object.defineProperty(ObservableArray.prototype, "" + index, {
	        enumerable: false,
	        configurable: true,
	        set: set, get: get
	    });
	}
	function createArraySetter(index) {
	    return function (newValue) {
	        var adm = this.$mobx;
	        var values = adm.values;
	        if (index < values.length) {
	            checkIfStateModificationsAreAllowed(adm.atom);
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: adm.array,
	                    index: index, newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.enhancer(newValue, oldValue);
	            var changed = newValue !== oldValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	    };
	}
	function createArrayGetter(index) {
	    return function () {
	        var impl = this.$mobx;
	        if (impl) {
	            if (index < impl.values.length) {
	                impl.atom.reportObserved();
	                return impl.values[index];
	            }
	            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
	        }
	        return undefined;
	    };
	}
	function reserveArrayBuffer(max) {
	    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
	        createArrayBufferItem(index);
	    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
	}
	reserveArrayBuffer(1000);
	var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
	function isObservableArray(thing) {
	    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
	}
	exports.isObservableArray = isObservableArray;
	var ObservableMapMarker = {};
	var ObservableMap = (function () {
	    function ObservableMap(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
	        this.enhancer = enhancer;
	        this.name = name;
	        this.$mobx = ObservableMapMarker;
	        this._data = {};
	        this._hasMap = {};
	        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
	        this.interceptors = null;
	        this.changeListeners = null;
	        this.merge(initialData);
	    }
	    ObservableMap.prototype._has = function (key) {
	        return typeof this._data[key] !== "undefined";
	    };
	    ObservableMap.prototype.has = function (key) {
	        if (!this.isValidKey(key))
	            return false;
	        key = "" + key;
	        if (this._hasMap[key])
	            return this._hasMap[key].get();
	        return this._updateHasMapEntry(key, false).get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        this.assertValidKey(key);
	        key = "" + key;
	        var hasKey = this._has(key);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return this;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	        return this;
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        this.assertValidKey(key);
	        key = "" + key;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return false;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy ? {
	                type: "delete",
	                object: this,
	                oldValue: this._data[key].value,
	                name: key
	            } : null;
	            if (notifySpy)
	                spyReportStart(change);
	            runInTransaction(function () {
	                _this._keys.remove(key);
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data[key];
	                observable.setNewValue(undefined);
	                _this._data[key] = undefined;
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        var entry = this._hasMap[key];
	        if (entry) {
	            entry.setNewValue(value);
	        }
	        else {
	            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
	        }
	        return entry;
	    };
	    ObservableMap.prototype._updateValue = function (name, newValue) {
	        var observable = this._data[name];
	        newValue = observable.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy ? {
	                type: "update",
	                object: this,
	                oldValue: observable.value,
	                name: name, newValue: newValue
	            } : null;
	            if (notifySpy)
	                spyReportStart(change);
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (name, newValue) {
	        var _this = this;
	        runInTransaction(function () {
	            var observable = _this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false);
	            newValue = observable.value;
	            _this._updateHasMapEntry(name, true);
	            _this._keys.push(name);
	        });
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            type: "add",
	            object: this,
	            name: name, newValue: newValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        key = "" + key;
	        if (this.has(key))
	            return this._data[key].get();
	        return undefined;
	    };
	    ObservableMap.prototype.keys = function () {
	        return arrayAsIterator(this._keys.slice());
	    };
	    ObservableMap.prototype.values = function () {
	        return arrayAsIterator(this._keys.map(this.get, this));
	    };
	    ObservableMap.prototype.entries = function () {
	        var _this = this;
	        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var _this = this;
	        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
	    };
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        if (isObservableMap(other)) {
	            other = other.toJS();
	        }
	        runInTransaction(function () {
	            if (isPlainObject(other))
	                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
	            else if (Array.isArray(other))
	                other.forEach(function (_a) {
	                    var key = _a[0], value = _a[1];
	                    return _this.set(key, value);
	                });
	            else if (isES6Map(other))
	                other.forEach(function (value, key) { return _this.set(key, value); });
	            else if (other !== null && other !== undefined)
	                fail("Cannot initialize map from " + other);
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        runInTransaction(function () {
	            untracked(function () {
	                _this.keys().forEach(_this.delete, _this);
	            });
	        });
	    };
	    ObservableMap.prototype.replace = function (values) {
	        var _this = this;
	        runInTransaction(function () {
	            _this.clear();
	            _this.merge(values);
	        });
	        return this;
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ObservableMap.prototype.toJS = function () {
	        var _this = this;
	        var res = {};
	        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
	        return res;
	    };
	    ObservableMap.prototype.toJSON = function () {
	        return this.toJS();
	    };
	    ObservableMap.prototype.isValidKey = function (key) {
	        if (key === null || key === undefined)
	            return false;
	        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
	            return true;
	        return false;
	    };
	    ObservableMap.prototype.assertValidKey = function (key) {
	        if (!this.isValidKey(key))
	            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return this.name + "[{ " + this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") + " }]";
	    };
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        invariant(fireImmediately !== true, getMessage("m033"));
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	exports.ObservableMap = ObservableMap;
	declareIterator(ObservableMap.prototype, function () {
	    return this.entries();
	});
	function map(initialValues) {
	    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
	    return observable.map(initialValues);
	}
	exports.map = map;
	var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
	exports.isObservableMap = isObservableMap;
	var ObservableObjectAdministration = (function () {
	    function ObservableObjectAdministration(target, name) {
	        this.target = target;
	        this.name = name;
	        this.values = {};
	        this.changeListeners = null;
	        this.interceptors = null;
	    }
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name) {
	    if (isObservableObject(target))
	        return target.$mobx;
	    invariant(Object.isExtensible(target), getMessage("m035"));
	    if (!isPlainObject(target))
	        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    var adm = new ObservableObjectAdministration(target, name);
	    addHiddenFinalProp(target, "$mobx", adm);
	    return adm;
	}
	function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
	    if (adm.values[propName]) {
	        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
	        adm.target[propName] = descriptor.value;
	        return;
	    }
	    if ("value" in descriptor) {
	        if (isModifierDescriptor(descriptor.value)) {
	            var modifierDescriptor = descriptor.value;
	            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
	        }
	        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
	            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
	        }
	        else if (isComputedValue(descriptor.value)) {
	            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
	        }
	        else {
	            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
	        }
	    }
	    else {
	        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, false, true);
	    }
	}
	function defineObservableProperty(adm, propName, newValue, enhancer) {
	    assertPropertyConfigurable(adm.target, propName);
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            object: adm.target,
	            name: propName,
	            type: "add",
	            newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
	    newValue = observable.value;
	    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
	    notifyPropertyAddition(adm, adm.target, propName, newValue);
	}
	function defineComputedProperty(adm, propName, getter, setter, compareStructural, asInstanceProperty) {
	    if (asInstanceProperty)
	        assertPropertyConfigurable(adm.target, propName);
	    adm.values[propName] = new ComputedValue(getter, adm.target, compareStructural, adm.name + "." + propName, setter);
	    if (asInstanceProperty) {
	        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
	    }
	}
	function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
	    var name = adm.name + "." + propName;
	    computedValue.name = name;
	    if (!computedValue.scope)
	        computedValue.scope = adm.target;
	    adm.values[propName] = computedValue;
	    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
	}
	var observablePropertyConfigs = {};
	var computedPropertyConfigs = {};
	function generateObservablePropConfig(propName) {
	    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
	        configurable: true,
	        enumerable: true,
	        get: function () {
	            return this.$mobx.values[propName].get();
	        },
	        set: function (v) {
	            setPropertyValue(this, propName, v);
	        }
	    });
	}
	function generateComputedPropConfig(propName) {
	    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
	        configurable: true,
	        enumerable: false,
	        get: function () {
	            return this.$mobx.values[propName].get();
	        },
	        set: function (v) {
	            return this.$mobx.values[propName].set(v);
	        }
	    });
	}
	function setPropertyValue(instance, name, newValue) {
	    var adm = instance.$mobx;
	    var observable = adm.values[name];
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            type: "update",
	            object: instance,
	            name: name, newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    newValue = observable.prepareNewValue(newValue);
	    if (newValue !== UNCHANGED) {
	        var notify = hasListeners(adm);
	        var notifySpy = isSpyEnabled();
	        var change = notify || notifySpy ? {
	            type: "update",
	            object: instance,
	            oldValue: observable.value,
	            name: name, newValue: newValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        observable.setNewValue(newValue);
	        if (notify)
	            notifyListeners(adm, change);
	        if (notifySpy)
	            spyReportEnd();
	    }
	}
	function notifyPropertyAddition(adm, object, name, newValue) {
	    var notify = hasListeners(adm);
	    var notifySpy = isSpyEnabled();
	    var change = notify || notifySpy ? {
	        type: "add",
	        object: object, name: name, newValue: newValue
	    } : null;
	    if (notifySpy)
	        spyReportStart(change);
	    if (notify)
	        notifyListeners(adm, change);
	    if (notifySpy)
	        spyReportEnd();
	}
	var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
	function isObservableObject(thing) {
	    if (isObject(thing)) {
	        runLazyInitializers(thing);
	        return isObservableObjectAdministration(thing.$mobx);
	    }
	    return false;
	}
	exports.isObservableObject = isObservableObject;
	var UNCHANGED = {};
	var ObservableValue = (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, enhancer, name, notifySpy) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        var _this = _super.call(this, name) || this;
	        _this.enhancer = enhancer;
	        _this.hasUnreportedChange = false;
	        _this.value = enhancer(value, undefined, name);
	        if (notifySpy && isSpyEnabled()) {
	            spyReport({ type: "create", object: _this, newValue: _this.value });
	        }
	        return _this;
	    }
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy) {
	                spyReportStart({
	                    type: "update",
	                    object: this,
	                    newValue: newValue, oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        checkIfStateModificationsAreAllowed(this);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, { object: this, type: "update", newValue: newValue });
	            if (!change)
	                return UNCHANGED;
	            newValue = change.newValue;
	        }
	        newValue = this.enhancer(newValue, this.value, this.name);
	        return this.value !== newValue
	            ? newValue
	            : UNCHANGED;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this)) {
	            notifyListeners(this, {
	                type: "update",
	                object: this,
	                newValue: newValue,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.value;
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener({
	                object: this,
	                type: "update",
	                newValue: this.value,
	                oldValue: undefined
	            });
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    ObservableValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    return ObservableValue;
	}(BaseAtom));
	ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
	var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
	exports.isBoxedObservable = isObservableValue;
	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            invariant(property === undefined, getMessage("m036"));
	            return thing.$mobx.atom;
	        }
	        if (isObservableMap(thing)) {
	            var anyThing = thing;
	            if (property === undefined)
	                return getAtom(anyThing._keys);
	            var observable_2 = anyThing._data[property] || anyThing._hasMap[property];
	            invariant(!!observable_2, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable_2;
	        }
	        runLazyInitializers(thing);
	        if (isObservableObject(thing)) {
	            if (!property)
	                return fail("please specify a property");
	            var observable_3 = thing.$mobx.values[property];
	            invariant(!!observable_3, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable_3;
	        }
	        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (isReaction(thing.$mobx)) {
	            return thing.$mobx;
	        }
	    }
	    return fail("Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    invariant(thing, "Expecting some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
	        return thing;
	    if (isObservableMap(thing))
	        return thing;
	    runLazyInitializers(thing);
	    if (thing.$mobx)
	        return thing.$mobx;
	    invariant(false, "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing);
	    return named.name;
	}
	function createClassPropertyDecorator(onInitialize, get, set, enumerable, allowCustomArguments) {
	    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
	        if (argLen === void 0) { argLen = 0; }
	        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
	        if (!descriptor) {
	            var newDescriptor = {
	                enumerable: enumerable,
	                configurable: true,
	                get: function () {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
	                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
	                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
	                    }
	                    else {
	                        set.call(this, key, v);
	                    }
	                }
	            };
	            if (arguments.length < 3 || arguments.length === 5 && argLen < 3) {
	                Object.defineProperty(target, key, newDescriptor);
	            }
	            return newDescriptor;
	        }
	        else {
	            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
	                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || []);
	            }
	            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
	            target.__mobxLazyInitializers.push(function (instance) {
	                onInitialize(instance, key, (initializer_1 ? initializer_1.call(instance) : value_1), customArgs, descriptor);
	            });
	            return {
	                enumerable: enumerable, configurable: true,
	                get: function () {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    set.call(this, key, v);
	                }
	            };
	        }
	    }
	    if (allowCustomArguments) {
	        return function () {
	            if (quacksLikeADecorator(arguments))
	                return classPropertyDecorator.apply(null, arguments);
	            var outerArgs = arguments;
	            var argLen = arguments.length;
	            return function (target, key, descriptor) { return classPropertyDecorator(target, key, descriptor, outerArgs, argLen); };
	        };
	    }
	    return classPropertyDecorator;
	}
	function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
	    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
	        addHiddenProp(instance, "__mobxInitializedProps", {});
	    instance.__mobxInitializedProps[key] = true;
	    onInitialize(instance, key, v, customArgs, baseDescriptor);
	}
	function runLazyInitializers(instance) {
	    if (instance.__mobxDidRunLazyInitializers === true)
	        return;
	    if (instance.__mobxLazyInitializers) {
	        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
	        instance.__mobxDidRunLazyInitializers && instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
	    }
	}
	function quacksLikeADecorator(args) {
	    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
	}
	function iteratorSymbol() {
	    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
	}
	var IS_ITERATING_MARKER = "__$$iterating";
	function arrayAsIterator(array) {
	    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
	    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
	    var idx = -1;
	    addHiddenFinalProp(array, "next", function next() {
	        idx++;
	        return {
	            done: idx >= this.length,
	            value: idx < this.length ? this[idx] : undefined
	        };
	    });
	    return array;
	}
	function declareIterator(prototType, iteratorFactory) {
	    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
	}
	var messages = {
	    "m001": "It is not allowed to assign new values to @action fields",
	    "m002": "`runInAction` expects a function",
	    "m003": "`runInAction` expects a function without arguments",
	    "m004": "autorun expects a function",
	    "m005": "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
	    "m006": "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
	    "m007": "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
	    "m008": "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
	    "m009": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
	    "m010": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
	    "m011": "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
	    "m012": "computed takes one or two arguments if used as function",
	    "m013": "[mobx.expr] 'expr' should only be used inside other reactive functions.",
	    "m014": "extendObservable expected 2 or more arguments",
	    "m015": "extendObservable expects an object as first argument",
	    "m016": "extendObservable should not be used on maps, use map.merge instead",
	    "m017": "all arguments of extendObservable should be objects",
	    "m018": "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
	    "m019": "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
	    "m020": "modifiers can only be used for individual object properties",
	    "m021": "observable expects zero or one arguments",
	    "m022": "@observable can not be used on getters, use @computed instead",
	    "m023": "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
	    "m024": "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
	    "m025": "whyRun can only be used on reactions and computed values",
	    "m026": "`action` can only be invoked on functions",
	    "m028": "It is not allowed to set `useStrict` when a derivation is running",
	    "m029": "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
	    "m030a": "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
	    "m030b": "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
	    "m031": "Computed values are not allowed to not cause side effects by changing observables that are already being observed. Tried to modify: ",
	    "m032": "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
	    "m033": "`observe` doesn't support the fire immediately property for observable maps.",
	    "m034": "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
	    "m035": "Cannot make the designated object observable; it is not extensible",
	    "m036": "It is not possible to get index atoms from arrays",
	    "m037": "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
	    "m038": "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
	};
	function getMessage(id) {
	    return messages[id];
	}
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	function getGlobal() {
	    return global;
	}
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function fail(message, thing) {
	    invariant(false, message, thing);
	    throw "X";
	}
	function invariant(check, message, thing) {
	    if (!check)
	        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
	}
	var deprecatedMessages = [];
	function deprecated(msg) {
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return false;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	    return true;
	}
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function joinStrings(things, limit, separator) {
	    if (limit === void 0) { limit = 100; }
	    if (separator === void 0) { separator = " - "; }
	    if (!things)
	        return "";
	    var sliced = things.slice(0, limit);
	    return "" + sliced.join(separator) + (things.length > limit ? " (... and " + (things.length - limit) + "more)" : "");
	}
	function isObject(value) {
	    return value !== null && typeof value === "object";
	}
	function isPlainObject(value) {
	    if (value === null || typeof value !== "object")
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    return proto === Object.prototype || proto === null;
	}
	function objectAssign() {
	    var res = arguments[0];
	    for (var i = 1, l = arguments.length; i < l; i++) {
	        var source = arguments[i];
	        for (var key in source)
	            if (hasOwnProperty(source, key)) {
	                res[key] = source[key];
	            }
	    }
	    return res;
	}
	function valueDidChange(compareStructural, oldValue, newValue) {
	    if (typeof oldValue === 'number' && isNaN(oldValue)) {
	        return typeof newValue !== 'number' || !isNaN(newValue);
	    }
	    return compareStructural
	        ? !deepEqual(oldValue, newValue)
	        : oldValue !== newValue;
	}
	var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwnProperty(object, propName) {
	    return prototypeHasOwnProperty.call(object, propName);
	}
	function makeNonEnumerable(object, propNames) {
	    for (var i = 0; i < propNames.length; i++) {
	        addHiddenProp(object, propNames[i], object[propNames[i]]);
	    }
	}
	function addHiddenProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: true,
	        configurable: true,
	        value: value
	    });
	}
	function addHiddenFinalProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: false,
	        configurable: true,
	        value: value
	    });
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
	}
	function getEnumerableKeys(obj) {
	    var res = [];
	    for (var key in obj)
	        res.push(key);
	    return res;
	}
	function deepEqual(a, b) {
	    if (a === null && b === null)
	        return true;
	    if (a === undefined && b === undefined)
	        return true;
	    if (typeof a !== "object")
	        return a === b;
	    var aIsArray = isArrayLike(a);
	    var aIsMap = isMapLike(a);
	    if (aIsArray !== isArrayLike(b)) {
	        return false;
	    }
	    else if (aIsMap !== isMapLike(b)) {
	        return false;
	    }
	    else if (aIsArray) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = a.length - 1; i >= 0; i--)
	            if (!deepEqual(a[i], b[i]))
	                return false;
	        return true;
	    }
	    else if (aIsMap) {
	        if (a.size !== b.size)
	            return false;
	        var equals_1 = true;
	        a.forEach(function (value, key) {
	            equals_1 = equals_1 && deepEqual(b.get(key), value);
	        });
	        return equals_1;
	    }
	    else if (typeof a === "object" && typeof b === "object") {
	        if (a === null || b === null)
	            return false;
	        if (isMapLike(a) && isMapLike(b)) {
	            if (a.size !== b.size)
	                return false;
	            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
	        }
	        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
	            return false;
	        for (var prop in a) {
	            if (!(prop in b))
	                return false;
	            if (!deepEqual(a[prop], b[prop]))
	                return false;
	        }
	        return true;
	    }
	    return false;
	}
	function createInstanceofPredicate(name, clazz) {
	    var propName = "isMobX" + name;
	    clazz.prototype[propName] = true;
	    return function (x) {
	        return isObject(x) && x[propName] === true;
	    };
	}
	function isArrayLike(x) {
	    return Array.isArray(x) || isObservableArray(x);
	}
	exports.isArrayLike = isArrayLike;
	function isMapLike(x) {
	    return isES6Map(x) || isObservableMap(x);
	}
	function isES6Map(thing) {
	    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
	        return true;
	    return false;
	}
	function primitiveSymbol() {
	    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
	}
	function toPrimitive(value) {
	    return value === null ? null : typeof value === "object" ? ("" + value) : value;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(29), __webpack_require__(1), __webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["mobx", "react", "react-dom"], factory);
		else if(typeof exports === 'object')
			exports["mobxReact"] = factory(require("mobx"), require("react"), require("react-dom"));
		else
			root["mobxReact"] = factory(root["mobx"], root["React"], root["ReactDOM"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
	return /******/ (function(modules) { // webpackBootstrap
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
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.PropTypes = exports.propTypes = exports.inject = exports.Provider = exports.useStaticRendering = exports.trackComponents = exports.componentByNodeRegistery = exports.renderReporter = exports.Observer = exports.observer = undefined;
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
		var _observer = __webpack_require__(1);
	
		Object.defineProperty(exports, 'observer', {
		  enumerable: true,
		  get: function get() {
		    return _observer.observer;
		  }
		});
		Object.defineProperty(exports, 'Observer', {
		  enumerable: true,
		  get: function get() {
		    return _observer.Observer;
		  }
		});
		Object.defineProperty(exports, 'renderReporter', {
		  enumerable: true,
		  get: function get() {
		    return _observer.renderReporter;
		  }
		});
		Object.defineProperty(exports, 'componentByNodeRegistery', {
		  enumerable: true,
		  get: function get() {
		    return _observer.componentByNodeRegistery;
		  }
		});
		Object.defineProperty(exports, 'trackComponents', {
		  enumerable: true,
		  get: function get() {
		    return _observer.trackComponents;
		  }
		});
		Object.defineProperty(exports, 'useStaticRendering', {
		  enumerable: true,
		  get: function get() {
		    return _observer.useStaticRendering;
		  }
		});
	
		var _Provider = __webpack_require__(8);
	
		Object.defineProperty(exports, 'Provider', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Provider).default;
		  }
		});
	
		var _inject = __webpack_require__(6);
	
		Object.defineProperty(exports, 'inject', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_inject).default;
		  }
		});
	
		var _mobx = __webpack_require__(2);
	
		var mobx = _interopRequireWildcard(_mobx);
	
		var _react = __webpack_require__(3);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _reactDom = __webpack_require__(4);
	
		var _reactNative = __webpack_require__(9);
	
		var _propTypes = __webpack_require__(10);
	
		var propTypes = _interopRequireWildcard(_propTypes);
	
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var TARGET_LIB_NAME = void 0;
		if (true) TARGET_LIB_NAME = 'mobx-react';
		if (false) TARGET_LIB_NAME = 'mobx-react/native';
		if (false) TARGET_LIB_NAME = 'mobx-react/custom';
	
		if (!mobx) throw new Error(TARGET_LIB_NAME + ' requires the MobX package');
		if (!_react2.default) throw new Error(TARGET_LIB_NAME + ' requires React to be available');
	
		if (("browser") === 'browser' && typeof _reactDom.unstable_batchedUpdates === "function") mobx.extras.setReactionScheduler(_reactDom.unstable_batchedUpdates);
		if (false) mobx.extras.setReactionScheduler(_reactNative.unstable_batchedUpdates);
	
		exports.propTypes = propTypes;
		exports.PropTypes = propTypes;
		exports.default = module.exports;
	
		/* DevTool support */
	
		if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ? 'undefined' : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === 'object') {
		  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(module.exports, mobx);
		}
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Observer = exports.renderReporter = exports.componentByNodeRegistery = undefined;
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
		exports.trackComponents = trackComponents;
		exports.useStaticRendering = useStaticRendering;
		exports.observer = observer;
	
		var _mobx = __webpack_require__(2);
	
		var _react = __webpack_require__(3);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _reactDom = __webpack_require__(4);
	
		var _reactDom2 = _interopRequireDefault(_reactDom);
	
		var _EventEmitter = __webpack_require__(5);
	
		var _EventEmitter2 = _interopRequireDefault(_EventEmitter);
	
		var _inject = __webpack_require__(6);
	
		var _inject2 = _interopRequireDefault(_inject);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		/**
		 * dev tool support
		 */
		var isDevtoolsEnabled = false;
	
		var isUsingStaticRendering = false;
	
		var warnedAboutObserverInjectDeprecation = false;
	
		// WeakMap<Node, Object>;
		var componentByNodeRegistery = exports.componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
		var renderReporter = exports.renderReporter = new _EventEmitter2.default();
	
		function findDOMNode(component) {
		  if (_reactDom2.default) {
		    try {
		      return _reactDom2.default.findDOMNode(component);
		    } catch (e) {
		      // findDOMNode will throw in react-test-renderer, see:
		      // See https://github.com/mobxjs/mobx-react/issues/216
		      // Is there a better heuristic?
		      return null;
		    }
		  }
		  return null;
		}
	
		function reportRendering(component) {
		  var node = findDOMNode(component);
		  if (node && componentByNodeRegistery) componentByNodeRegistery.set(node, component);
	
		  renderReporter.emit({
		    event: 'render',
		    renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
		    totalTime: Date.now() - component.__$mobRenderStart,
		    component: component,
		    node: node
		  });
		}
	
		function trackComponents() {
		  if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
		  if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
		}
	
		function useStaticRendering(useStaticRendering) {
		  isUsingStaticRendering = useStaticRendering;
		}
	
		/**
		 * Utilities
		 */
	
		function patch(target, funcName) {
		  var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
		  var base = target[funcName];
		  var mixinFunc = reactiveMixin[funcName];
		  if (!base) {
		    target[funcName] = mixinFunc;
		  } else {
		    target[funcName] = runMixinFirst === true ? function () {
		      mixinFunc.apply(this, arguments);
		      base.apply(this, arguments);
		    } : function () {
		      base.apply(this, arguments);
		      mixinFunc.apply(this, arguments);
		    };
		  }
		}
	
		function isObjectShallowModified(prev, next) {
		  if (null == prev || null == next || (typeof prev === 'undefined' ? 'undefined' : _typeof(prev)) !== "object" || (typeof next === 'undefined' ? 'undefined' : _typeof(next)) !== "object") {
		    return prev !== next;
		  }
		  var keys = Object.keys(prev);
		  if (keys.length !== Object.keys(next).length) {
		    return true;
		  }
		  var key = void 0;
		  for (var i = keys.length - 1; i >= 0, key = keys[i]; i--) {
		    if (next[key] !== prev[key]) {
		      return true;
		    }
		  }
		  return false;
		}
	
		/**
		 * ReactiveMixin
		 */
		var reactiveMixin = {
		  componentWillMount: function componentWillMount() {
		    var _this = this;
	
		    if (isUsingStaticRendering === true) return;
		    // Generate friendly name for debugging
		    var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
		    var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID;
	
		    /**
		     * If props are shallowly modified, react will render anyway,
		     * so atom.reportChanged() should not result in yet another re-render
		     */
		    var skipRender = false;
		    /**
		     * forceUpdate will re-assign this.props. We don't want that to cause a loop,
		     * so detect these changes
		     */
		    var isForcingUpdate = false;
	
		    function makePropertyObservableReference(propName) {
		      var valueHolder = this[propName];
		      var atom = new _mobx.Atom("reactive " + propName);
		      Object.defineProperty(this, propName, {
		        configurable: true, enumerable: true,
		        get: function get() {
		          atom.reportObserved();
		          return valueHolder;
		        },
		        set: function set(v) {
		          if (!isForcingUpdate && isObjectShallowModified(valueHolder, v)) {
		            valueHolder = v;
		            skipRender = true;
		            atom.reportChanged();
		            skipRender = false;
		          } else {
		            valueHolder = v;
		          }
		        }
		      });
		    }
	
		    // make this.props an observable reference, see #124
		    makePropertyObservableReference.call(this, "props");
		    // make state an observable reference
		    makePropertyObservableReference.call(this, "state");
	
		    // wire up reactive render
		    var baseRender = this.render.bind(this);
		    var reaction = null;
		    var isRenderingPending = false;
	
		    var initialRender = function initialRender() {
		      reaction = new _mobx.Reaction(initialName + '#' + rootNodeID + '.render()', function () {
		        if (!isRenderingPending) {
		          // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
		          // This unidiomatic React usage but React will correctly warn about this so we continue as usual
		          // See #85 / Pull #44
		          isRenderingPending = true;
		          if (typeof _this.componentWillReact === "function") _this.componentWillReact(); // TODO: wrap in action?
		          if (_this.__$mobxIsUnmounted !== true) {
		            // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
		            // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
		            // However, people also claim this migth happen during unit tests..
		            var hasError = true;
		            try {
		              isForcingUpdate = true;
		              if (!skipRender) _react2.default.Component.prototype.forceUpdate.call(_this);
		              hasError = false;
		            } finally {
		              isForcingUpdate = false;
		              if (hasError) reaction.dispose();
		            }
		          }
		        }
		      });
		      reactiveRender.$mobx = reaction;
		      _this.render = reactiveRender;
		      return reactiveRender();
		    };
	
		    var reactiveRender = function reactiveRender() {
		      isRenderingPending = false;
		      var exception = undefined;
		      var rendering = undefined;
		      reaction.track(function () {
		        if (isDevtoolsEnabled) {
		          _this.__$mobRenderStart = Date.now();
		        }
		        try {
		          rendering = _mobx.extras.allowStateChanges(false, baseRender);
		        } catch (e) {
		          exception = e;
		        }
		        if (isDevtoolsEnabled) {
		          _this.__$mobRenderEnd = Date.now();
		        }
		      });
		      if (exception) throw exception;
		      return rendering;
		    };
	
		    this.render = initialRender;
		  },
	
		  componentWillUnmount: function componentWillUnmount() {
		    if (isUsingStaticRendering === true) return;
		    this.render.$mobx && this.render.$mobx.dispose();
		    this.__$mobxIsUnmounted = true;
		    if (isDevtoolsEnabled) {
		      var node = findDOMNode(this);
		      if (node && componentByNodeRegistery) {
		        componentByNodeRegistery.delete(node);
		      }
		      renderReporter.emit({
		        event: 'destroy',
		        component: this,
		        node: node
		      });
		    }
		  },
	
		  componentDidMount: function componentDidMount() {
		    if (isDevtoolsEnabled) {
		      reportRendering(this);
		    }
		  },
	
		  componentDidUpdate: function componentDidUpdate() {
		    if (isDevtoolsEnabled) {
		      reportRendering(this);
		    }
		  },
	
		  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		    if (isUsingStaticRendering) {
		      console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
		    }
		    // update on any state changes (as is the default)
		    if (this.state !== nextState) {
		      return true;
		    }
		    // update if props are shallowly not equal, inspired by PureRenderMixin
		    // we could return just 'false' here, and avoid the `skipRender` checks etc
		    // however, it is nicer if lifecycle events are triggered like usually,
		    // so we return true here if props are shallowly modified.
		    return isObjectShallowModified(this.props, nextProps);
		  }
		};
	
		/**
		 * Observer function / decorator
		 */
		function observer(arg1, arg2) {
		  if (typeof arg1 === "string") {
		    throw new Error("Store names should be provided as array");
		  }
		  if (Array.isArray(arg1)) {
		    // component needs stores
		    if (!warnedAboutObserverInjectDeprecation) {
		      warnedAboutObserverInjectDeprecation = true;
		      console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
		    }
		    if (!arg2) {
		      // invoked as decorator
		      return function (componentClass) {
		        return observer(arg1, componentClass);
		      };
		    } else {
		      return _inject2.default.apply(null, arg1)(observer(arg2));
		    }
		  }
		  var componentClass = arg1;
	
		  if (componentClass.isMobxInjector === true) {
		    console.warn('Mobx observer: You are trying to use \'observer\' on a component that already has \'inject\'. Please apply \'observer\' before applying \'inject\'');
		  }
	
		  // Stateless function component:
		  // If it is function but doesn't seem to be a react class constructor,
		  // wrap it to a react class automatically
		  if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !_react2.default.Component.isPrototypeOf(componentClass)) {
	
		    return observer(_react2.default.createClass({
		      displayName: componentClass.displayName || componentClass.name,
		      propTypes: componentClass.propTypes,
		      contextTypes: componentClass.contextTypes,
		      getDefaultProps: function getDefaultProps() {
		        return componentClass.defaultProps;
		      },
		      render: function render() {
		        return componentClass.call(this, this.props, this.context);
		      }
		    }));
		  }
	
		  if (!componentClass) {
		    throw new Error("Please pass a valid component to 'observer'");
		  }
	
		  var target = componentClass.prototype || componentClass;
		  mixinLifecycleEvents(target);
		  componentClass.isMobXReactObserver = true;
		  return componentClass;
		}
	
		function mixinLifecycleEvents(target) {
		  patch(target, "componentWillMount", true);
		  ["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
		    patch(target, funcName);
		  });
		  if (!target.shouldComponentUpdate) {
		    target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
		  }
		}
	
		// TODO: support injection somehow as well?
		var Observer = exports.Observer = observer(function (_ref) {
		  var children = _ref.children;
		  return children();
		});
	
		Observer.propTypes = {
		  children: _react2.default.PropTypes.func.isRequired
		};
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		var EventEmitter = function () {
		  function EventEmitter() {
		    _classCallCheck(this, EventEmitter);
	
		    this.listeners = [];
		  }
	
		  _createClass(EventEmitter, [{
		    key: "on",
		    value: function on(cb) {
		      var _this = this;
	
		      this.listeners.push(cb);
		      return function () {
		        var index = _this.listeners.indexOf(cb);
		        if (index !== -1) _this.listeners.splice(index, 1);
		      };
		    }
		  }, {
		    key: "emit",
		    value: function emit(data) {
		      this.listeners.forEach(function (fn) {
		        return fn(data);
		      });
		    }
		  }]);
	
		  return EventEmitter;
		}();
	
		exports.default = EventEmitter;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
		exports.default = inject;
	
		var _react = __webpack_require__(3);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _hoistNonReactStatics = __webpack_require__(7);
	
		var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
		var _observer = __webpack_require__(1);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var injectorContextTypes = {
		  mobxStores: _react.PropTypes.object
		};
		Object.seal(injectorContextTypes);
	
		var proxiedInjectorProps = {
		  contextTypes: {
		    get: function get() {
		      return injectorContextTypes;
		    },
		    set: function set(_) {
		      console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
		    },
		    configurable: true,
		    enumerable: false
		  },
		  isMobxInjector: {
		    value: true,
		    writable: true,
		    configurable: true,
		    enumerable: true
		  }
		};
	
		/**
		 * Store Injection
		 */
		function createStoreInjector(grabStoresFn, component, injectNames) {
		  var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
		  if (injectNames) displayName += "-with-" + injectNames;
	
		  var Injector = _react2.default.createClass({
		    displayName: displayName,
		    storeRef: function storeRef(instance) {
		      this.wrappedInstance = instance;
		    },
		    render: function render() {
		      // Optimization: it might be more efficient to apply the mapper function *outside* the render method
		      // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
		      // See this test: 'using a custom injector is not too reactive' in inject.js
		      var newProps = {};
		      for (var key in this.props) {
		        if (this.props.hasOwnProperty(key)) {
		          newProps[key] = this.props[key];
		        }
		      }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
		      for (var _key in additionalProps) {
		        newProps[_key] = additionalProps[_key];
		      }
		      newProps.ref = this.storeRef;
	
		      return _react2.default.createElement(component, newProps);
		    }
		  });
	
		  // Static fields from component should be visible on the generated Injector
		  (0, _hoistNonReactStatics2.default)(Injector, component);
	
		  Injector.wrappedComponent = component;
		  Object.defineProperties(Injector, proxiedInjectorProps);
	
		  return Injector;
		}
	
		function grabStoresByName(storeNames) {
		  return function (baseStores, nextProps) {
		    storeNames.forEach(function (storeName) {
		      if (storeName in nextProps) // prefer props over stores
		        return;
		      if (!(storeName in baseStores)) throw new Error("MobX observer: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
		      nextProps[storeName] = baseStores[storeName];
		    });
		    return nextProps;
		  };
		}
	
		/**
		 * higher order component that injects stores to a child.
		 * takes either a varargs list of strings, which are stores read from the context,
		 * or a function that manually maps the available stores from the context to props:
		 * storesToProps(mobxStores, props, context) => newProps
		 */
		function inject() /* fn(stores, nextProps) or ...storeNames */{
		  var _arguments = arguments;
	
		  var grabStoresFn = void 0;
		  if (typeof arguments[0] === "function") {
		    grabStoresFn = arguments[0];
		    return function (componentClass) {
		      var injected = createStoreInjector(grabStoresFn, componentClass);
		      injected.isMobxInjector = false; // supress warning
		      // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
		      // see #111
		      injected = (0, _observer.observer)(injected);
		      injected.isMobxInjector = true; // restore warning
		      return injected;
		    };
		  } else {
		    var _ret = function () {
		      var storeNames = [];
		      for (var i = 0; i < _arguments.length; i++) {
		        storeNames[i] = _arguments[i];
		      }grabStoresFn = grabStoresByName(storeNames);
		      return {
		        v: function v(componentClass) {
		          return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
		        }
		      };
		    }();
	
		    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		  }
		}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		/**
		 * Copyright 2015, Yahoo! Inc.
		 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		 */
		'use strict';
	
		var REACT_STATICS = {
		    childContextTypes: true,
		    contextTypes: true,
		    defaultProps: true,
		    displayName: true,
		    getDefaultProps: true,
		    mixins: true,
		    propTypes: true,
		    type: true
		};
	
		var KNOWN_STATICS = {
		    name: true,
		    length: true,
		    prototype: true,
		    caller: true,
		    arguments: true,
		    arity: true
		};
	
		var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
		module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
		    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
		        var keys = Object.getOwnPropertyNames(sourceComponent);
	
		        /* istanbul ignore else */
		        if (isGetOwnPropertySymbolsAvailable) {
		            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
		        }
	
		        for (var i = 0; i < keys.length; ++i) {
		            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
		                try {
		                    targetComponent[keys[i]] = sourceComponent[keys[i]];
		                } catch (error) {
	
		                }
		            }
		        }
		    }
	
		    return targetComponent;
		};
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;
	
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
		var _class, _temp;
	
		var _react = __webpack_require__(3);
	
		var _react2 = _interopRequireDefault(_react);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
		var specialReactKeys = { children: true, key: true, ref: true };
	
		var Provider = (_temp = _class = function (_Component) {
		  _inherits(Provider, _Component);
	
		  function Provider() {
		    _classCallCheck(this, Provider);
	
		    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
		  }
	
		  _createClass(Provider, [{
		    key: "render",
		    value: function render() {
		      return _react2.default.Children.only(this.props.children);
		    }
		  }, {
		    key: "getChildContext",
		    value: function getChildContext() {
		      var stores = {};
		      // inherit stores
		      var baseStores = this.context.mobxStores;
		      if (baseStores) for (var key in baseStores) {
		        stores[key] = baseStores[key];
		      }
		      // add own stores
		      for (var _key in this.props) {
		        if (!specialReactKeys[_key] && _key !== "suppressChangedStoreWarning") stores[_key] = this.props[_key];
		      }return {
		        mobxStores: stores
		      };
		    }
		  }, {
		    key: "componentWillReceiveProps",
		    value: function componentWillReceiveProps(nextProps) {
		      // Maybe this warning is too aggressive?
		      if (Object.keys(nextProps).length !== Object.keys(this.props).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
		      if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
		        if (!specialReactKeys[key] && this.props[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
		      }
		    }
		  }]);
	
		  return Provider;
		}(_react.Component), _class.contextTypes = {
		  mobxStores: _react.PropTypes.object
		}, _class.childContextTypes = {
		  mobxStores: _react.PropTypes.object.isRequired
		}, _temp);
		exports.default = Provider;
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		module.exports = null
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.objectOrObservableObject = exports.arrayOrObservableArrayOf = exports.arrayOrObservableArray = exports.observableObject = exports.observableMap = exports.observableArrayOf = exports.observableArray = undefined;
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
		var _mobx = __webpack_require__(2);
	
		// Copied from React.PropTypes
		function createChainableTypeChecker(validate) {
		  function checkType(isRequired, props, propName, componentName, location, propFullName) {
		    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
		      rest[_key - 6] = arguments[_key];
		    }
	
		    return (0, _mobx.untracked)(function () {
		      componentName = componentName || '<<anonymous>>';
		      propFullName = propFullName || propName;
		      if (props[propName] == null) {
		        if (isRequired) {
		          var actual = props[propName] === null ? 'null' : 'undefined';
		          return new Error('The ' + location + ' `' + propFullName + '` is marked as required ' + 'in `' + componentName + '`, but its value is `' + actual + '`.');
		        }
		        return null;
		      } else {
		        return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
		      }
		    });
		  }
	
		  var chainedCheckType = checkType.bind(null, false);
		  chainedCheckType.isRequired = checkType.bind(null, true);
		  return chainedCheckType;
		}
	
		// Copied from React.PropTypes
		function isSymbol(propType, propValue) {
		  // Native Symbol.
		  if (propType === 'symbol') {
		    return true;
		  }
	
		  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
		  if (propValue['@@toStringTag'] === 'Symbol') {
		    return true;
		  }
	
		  // Fallback for non-spec compliant Symbols which are polyfilled.
		  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
		    return true;
		  }
	
		  return false;
		}
	
		// Copied from React.PropTypes
		function getPropType(propValue) {
		  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
		  if (Array.isArray(propValue)) {
		    return 'array';
		  }
		  if (propValue instanceof RegExp) {
		    // Old webkits (at least until Android 4.0) return 'function' rather than
		    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
		    // passes PropTypes.object.
		    return 'object';
		  }
		  if (isSymbol(propType, propValue)) {
		    return 'symbol';
		  }
		  return propType;
		}
	
		// This handles more types than `getPropType`. Only used for error messages.
		// Copied from React.PropTypes
		function getPreciseType(propValue) {
		  var propType = getPropType(propValue);
		  if (propType === 'object') {
		    if (propValue instanceof Date) {
		      return 'date';
		    } else if (propValue instanceof RegExp) {
		      return 'regexp';
		    }
		  }
		  return propType;
		}
	
		function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
		  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
		    return (0, _mobx.untracked)(function () {
		      if (allowNativeType) {
		        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
		      }
		      var mobxChecker = void 0;
		      switch (mobxType) {
		        case 'Array':
		          mobxChecker = _mobx.isObservableArray;break;
		        case 'Object':
		          mobxChecker = _mobx.isObservableObject;break;
		        case 'Map':
		          mobxChecker = _mobx.isObservableMap;break;
		        default:
		          throw new Error('Unexpected mobxType: ' + mobxType);
		      }
		      var propValue = props[propName];
		      if (!mobxChecker(propValue)) {
		        var preciseType = getPreciseType(propValue);
		        var nativeTypeExpectationMessage = allowNativeType ? ' or javascript `' + mobxType.toLowerCase() + '`' : '';
		        return new Error('Invalid prop `' + propFullName + '` of type `' + preciseType + '` supplied to' + ' `' + componentName + '`, expected `mobx.Observable' + mobxType + '`' + nativeTypeExpectationMessage + '.');
		      }
		      return null;
		    });
		  });
		}
	
		function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
		  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
		    for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
		      rest[_key2 - 5] = arguments[_key2];
		    }
	
		    return (0, _mobx.untracked)(function () {
		      if (typeof typeChecker !== 'function') {
		        return new Error('Property `' + propFullName + '` of component `' + componentName + '` has ' + 'invalid PropType notation.');
		      }
		      var error = createObservableTypeCheckerCreator(allowNativeType, 'Array')(props, propName, componentName);
		      if (error instanceof Error) return error;
		      var propValue = props[propName];
		      for (var i = 0; i < propValue.length; i++) {
		        error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + '[' + i + ']'].concat(rest));
		        if (error instanceof Error) return error;
		      }
		      return null;
		    });
		  });
		}
	
		var observableArray = exports.observableArray = createObservableTypeCheckerCreator(false, 'Array');
		var observableArrayOf = exports.observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
		var observableMap = exports.observableMap = createObservableTypeCheckerCreator(false, 'Map');
		var observableObject = exports.observableObject = createObservableTypeCheckerCreator(false, 'Object');
		var arrayOrObservableArray = exports.arrayOrObservableArray = createObservableTypeCheckerCreator(true, 'Array');
		var arrayOrObservableArrayOf = exports.arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
		var objectOrObservableObject = exports.objectOrObservableObject = createObservableTypeCheckerCreator(true, 'Object');
	
	/***/ }
	/******/ ])
	});
	;

/***/ }
]);
//# sourceMappingURL=index.bundle.js.map