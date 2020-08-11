import React from 'react';
import { connect } from 'react-redux';
import '../counter.css';

class Counter extends React.Component {
    incament = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrament = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div className='container'>
                <h2>Redux Counter</h2>

                <div className='counter'>
                    <button onClick={this.decrament}>-</button>
                    <span className='count'>{this.props.count}</span>
                    <button onClick={this.incament}>+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};

export default connect(mapStateToProps)(Counter);
