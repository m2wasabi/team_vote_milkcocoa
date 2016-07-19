/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class ResultView extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <div>
        <h1>
          結果
        </h1>
        <div>得票数</div>
        <div>エフェクト</div>
        <button onClick={() => dispatch(initVote())}>戻る</button>
        <button onClick={() => dispatch(showSummary())}>トータル</button>
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

export default connect(select)(ResultView);
