import React, { Component } from 'react'
import { connect } from 'react-redux';

class StocksWatchListComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props);
        const listItems = this.props.WatchList.forEach((value,key) =>
        // Wrong! The key should have been specified here:
        <WatchListItem value={value} key = {key} />
      );
        return (
            <div>
                <div style={{ textAlign: 'center' }}>WatchList</div>
                {listItems}
            </div>
        );
    }
}


function WatchListItem(props) {
    const value = props.value;
    const key = props.key;
    return (<div>{key} WatchList</div>);
  }
  
const mapStateToProps = (state) =>{
    console.log('state');
    console.log(state);
    return {
        WatchList : state.StocksWatchList
    }
}

export const StocksWatchList = connect(mapStateToProps)(StocksWatchListComponent);