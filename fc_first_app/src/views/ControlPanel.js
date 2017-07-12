import React from 'react';
import Counter from './Counter';
import Summary from './Summary';

class ControlPanel extends React.Component{
    render(){
        return(
            <div>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr />
                <Summary />
            </div>
        );
    }
}

export default ControlPanel;