import React from 'react';
import '../counter.css';

class Counter extends React.Component {
    state = {
        count: 0,
    };

    incament = () => {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    };

    decrament = () => {
        this.setState((state) => ({
            count: state.count - 1,
        }));
    };

    render() {
        return (
            <div className="container">
                <h2>Class Counter</h2>

                <div  className='counter'>
                    <button onClick={this.decrament}>-</button>
                    <span className='count'>{this.state.count}</span>
                    <button onClick={this.incament}>+</button>
                </div>
            </div>
        );
    }
}

export default Counter;
