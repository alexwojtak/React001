/* 
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={newItem:"", list:[]}
    }
    updateInput(key, value){
        this.setState({
            [key]: value
        });
    }
    addItem(){
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
    
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
        list,
        newItem:""
    });
    }
    deleteItem(id){
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id != id);
        this.setState({list: updatedList});
    }
    render(){
        return(
            <div className="App">
                Add an Item...<br />
                <input 
                    type="text"
                    placeholder="Type Item here..."
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                />
                <button onClick={()=> this.addItem()}>
                    Add
                </button>
                <br />
                <ul>
                    {this.state.list.map(item => {
                        return(
                            <li key={item.id}>
                                {item.value}
                                <button onClick={() => this.deleteItem(item.id)}>
                                    X
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('target')); */
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      newItem: "",
      list: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "updateInput",
    value: function updateInput(key, value) {
      this.setState(_defineProperty({}, key, value));
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };

      var list = _toConsumableArray(this.state.list);

      list.push(newItem);
      this.setState({
        list: list,
        newItem: ""
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(id) {
      var list = _toConsumableArray(this.state.list);

      var updatedList = list.filter(function (item) {
        return item.id != id;
      });
      this.setState({
        list: updatedList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: "App"
      }, "Add an Item...", React.createElement("br", null), React.createElement("input", {
        type: "text",
        placeholder: "Type Item here...",
        value: this.state.newItem,
        onChange: function onChange(e) {
          return _this2.updateInput("newItem", e.target.value);
        }
      }), React.createElement("button", {
        onClick: function onClick() {
          return _this2.addItem();
        }
      }, "Add"), React.createElement("br", null), React.createElement("ul", null, this.state.list.map(function (item) {
        return React.createElement("li", {
          key: item.id
        }, item.value, React.createElement("button", {
          onClick: function onClick() {
            return _this2.deleteItem(item.id);
          }
        }, "X"));
      })));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('target'));