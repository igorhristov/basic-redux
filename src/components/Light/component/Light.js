import React from 'react';
import { connect } from 'react-redux';

import './light.css';

class Light extends React.Component {
    switchB = () => {
        this.props.dispatch({ type: 'FLIP' });
    };
    render() {
        return (
            <div className='container'>
                <div className='light'>
                    <h1>{this.props.light ? 'ON' : 'OFF'}</h1>
                    <button onClick={this.switchB}>switchB</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    light: state.light,
});

export default connect(mapStateToProps)(Light);
