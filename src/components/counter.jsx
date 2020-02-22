import React, { Component } from 'react';

export default class Counter extends Component {
    componentDidUpdate (prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value){
            // ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }


    render() { 
        // console.log("props", this.props);
        console.log('Counter - Rendered');
        return (
            <div style={{border: "1px #dedede solid", margin: "10px", padding: "10px"}}>
                <p>Product {this.props.counter.id}</p>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2">
                        +
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2">
                        -
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                <br></br>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Saved for Later' : value
    }
}