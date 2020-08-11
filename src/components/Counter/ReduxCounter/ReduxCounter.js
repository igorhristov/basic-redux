import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../../Redux/actions';

import '../counter.css';

class Counter extends React.Component {
    incament = () => {
        this.props.increment();
        // this.props.disptach(increment())
    };

    decrament = () => {
        this.props.decrement();
        // this.props.disptach(decrement())
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

const mapDispatchToProps = {
    increment,
    decrement,
};

// const mapDispatchToProps1 =(dispatch, ownProps) => ({
//     increment: () => dispatch(increment(ownProps)),
//     decrement: () => dispatch(decrement(ownProps))

// });

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
