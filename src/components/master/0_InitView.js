/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class InitView extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <div>
        <h1>
          Milkcocoa合戦
        </h1>
        <button onClick={() => dispatch(beginVote())}>投票開始する</button>
      </div>
    )
  }

}

function select(state) {
  return {
    stage: state.stage
  }
}
export default connect(select)(InitView);