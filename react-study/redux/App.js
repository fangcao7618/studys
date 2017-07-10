import React, {Component} from 'react';
import { connect, Provider } from 'react-redux';
import { changeItem } from './actions';
 
class App extends Component{
  constructor(props, context) {
    super(props, context);
  }
  getChildContext() {
    return {
      curItem: this.props.curItem,
      changeItem: this.props.changeItem
    }
  }
  render() {
    return (
      <div>
        <CurItemPanel />
        <List />
      </div>
 
    )
  }
}
 
App.childContextTypes = {
  curItem: React.PropTypes.any,
  changeItem: React.PropTypes.any
};
 
class CurItemPanel extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>The curItem is: {this.context.curItem}</div>
    )
  }
}
CurItemPanel.contextTypes = {
  curItem: React.PropTypes.any
};
 
class List extends Component {
  constructor(props, context) {
    super(props, context);
  }
  onClickItem (item){
    this.context.changeItem(item);
  }
  render() {
    return (
      <ul>
        <li onClick={this.onClickItem.bind(this, 'item1')}>I am item1, click me!</li>
        <li onClick={this.onClickItem.bind(this, 'item2')}>I am item2, click me!</li>
      </ul>
    )
  }
}
 
List.contextTypes = {
  changeItem: React.PropTypes.any
};
 
let select = state => { return state};
 
function mapDispatchToProps(dispatch) {
  return {
    changeItem: function(item) {
      dispatch(changeItem(item));
    }
  };
}
 
export default(connect(select, mapDispatchToProps))(App);