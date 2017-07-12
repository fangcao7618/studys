import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props){
        super(props);

        this.onClickIncrementButton=this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton=this.onClickDecrementButton.bind(this);

        this.state= {
            count:props.initValue
        };
    }
    onClickIncrementButton(){
        this.updateCount(true);
    }
    onClickDecrementButton(){
        this.updateCount(false);
    }
    updateCount(isIncrement){
        const previousValue=this.state.count;
        let newValue = 0;
        
        if(isIncrement){
            newValue=previousValue +1
        }else{
            if(previousValue === 0){
                newValue = 0;
            }else{
                newValue=previousValue-1;
            }
        }
        
        this.setState({
            count: newValue
        });
        this.props.onUpdate(newValue,previousValue);
    }
    // componentWillMount() {
    //     console.log(`enter componentWillMount ${this.props.caption}`);
    // }
    // componentDidMount() {
    //     console.log(`enter componentDidMount ${this.props.caption}`);
    // }


    // componentWillReceiveProps(nextProps) {
    //     console.log(`enter componentWillReceiveProps nextProps:${nextProps.caption} this.props.caption:${this.props.caption}`);
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`enter shouldComponentUpdate nextProps.caption:${nextProps.caption} this.props.caption: ${this.props.caption}  nextState.count:${nextState.count} this.state.count:${this.state.count} ${(nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)}`);
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }
    // componentWillUpdate(nextProps, nextState) {
    //     console.log(`enter componentWillUpdate ${nextProps}  ${nextState}`);
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(`enter componentDidUpdate ${nextProps}  ${nextState}`);
    //     return true;
    // }
    render() {
        const {caption}=this.props;
        console.log(`enter render ${caption}`);
        return ( 
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div> 
        );
    }
    
}
Counter.propTypes= {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
}
Counter.defaultProps= {
    initValue: 0,
    onUpdate: f => f //默认是一个什么都不做的函数
}
export default Counter;