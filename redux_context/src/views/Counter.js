import React from 'react';
import PropTypes from 'prop-types';

import * as Actions from '../Actions.js';

const buttonStyle = {
  margin: '10px'
};

class Counter extends React.Component {
  render() {
    const {caption, onIncrement, onDecrement, value} = this.props;

    return (
      <div>
        <button style={buttonStyle} onClick={onIncrement}>+</button>
        <button style={buttonStyle} onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};


class CounterContainer extends React.Component {
  constructor(props, context) {
    debugger
    super(props, context);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
      debugger
    return {
      value: this.context.store.getState()[this.props.caption]
    };
  }

  onIncrement() {
      debugger
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
      debugger
    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange() {
      debugger
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState) {
      debugger
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }

  componentDidMount() {
      debugger
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
      debugger
    this.context.store.unsubscribe(this.onChange);
  }

  render() {    
    return <Counter caption={this.props.caption}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value} />
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer;