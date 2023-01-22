import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState(state => ({ count: state.count + 1 }));
        
    }

    render() {
        return (
          <button className="btn btn-primary" onClick={this.handleClick}>
            {this.state.name} {this.state.count}
          </button>
        );
    }
}