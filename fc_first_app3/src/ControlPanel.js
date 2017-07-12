import React from 'react';
import Counter from './Counter';

class ControlPanel extends React.Component {
    constructor(props){
        super(props);

        this.onCountUpdate=this.onCountUpdate.bind(this);

        this.initValue=[0,10,20];
        const initSum= this.initValue.reduce((a,b) => a+b,0);

        this.state={
            sum: initSum
        };
    }
    onCountUpdate(newValue,previousValue){
        console.log(`newValue: ${newValue},previousValue: ${previousValue}`);
        const valueChange=newValue-previousValue;
        this.setState({
            sum: this.state.sum + valueChange
        });
    }
    render() {
        console.log(`enter ControlPanel render`);
        const style={
            margin:'16px'
        };
        return (
            <div style={style}>
                <Counter caption="First" onUpdate={this.onCountUpdate} />
                <Counter caption="Second" initValue={this.initValue[1]} onUpdate={this.onCountUpdate} />
                <Counter caption="Third" initValue={this.initValue[2]} onUpdate={this.onCountUpdate} />
                <button onClick={ ()=> this.forceUpdate() } >Click me repaint!</button>
                <div>Total Count:{this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;