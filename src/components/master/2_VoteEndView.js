/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class VoteEndView extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <div>
        <h1>
          投票締切
        </h1>
        <div>集計中</div>
        <button onClick={() => dispatch(showResult())}>そろそろいいかな</button>

      </div>
    )
  }

}

function select(state) {
  return {
    stage: state.stage,
    timeLimit: state.timeLimit,
    vote: state.votes.commit
  }
}

export default connect(select)(VoteEndView);
