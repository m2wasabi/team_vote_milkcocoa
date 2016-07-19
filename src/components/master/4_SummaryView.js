/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class SummaryView extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <div>
        <h1>
          累計
        </h1>
        <div>勝敗</div>
        <div>エフェクト</div>
        <button onClick={() => dispatch(showEnding())}>エンディング</button>
      </div>
    )
  }

}

function select(state) {
  return {
    stage: state.stage,
    results: state.results
  }
}

export default connect(select)(SummaryView);