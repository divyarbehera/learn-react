import React, { Component } from 'react';
import {connect} from 'react-redux';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>I am a counter!</div>
                count : {this.props.count || 0}
                <br/>
                <button onClick={this.props.onIncrementClick}>increment</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {count:state.counterReducer.count};
}

const mapDispatchToProps = (dispatch, props) => {
    return {onIncrementClick:(e)=>{
        console.log(props);

        const action = {type:'COUNTER:INCREMENT'};
        dispatch(action);
    }};
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)