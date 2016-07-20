/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class SummaryView extends Component {
  render() {
    const {dispatch, results} = this.props;
    var turn = 1;
    var tbody = results.map((result) => {
      var winner = ((result.team0 > result.team1)? 0:((result.team0 < result.team1)?1:-1));
      console.log(winner);
      return ( <tr><th>{turn++} 回戦</th><td className={(winner === 0)?"team0 winner": "team0"}>{result.team0}</td><td className={(winner === 1)?"team1 winner": "team1"}>{result.team1}</td></tr>)
    });
    return (
      <div>
        <h1>
          累計
        </h1>
        <div>勝敗</div>
        <div>
          <table id="tbl-results">
            <thead>
            <tr><th>-</th><th className="team0">紅組</th><th className="team1">白組</th></tr>
            </thead>
            <tbody>
            {tbody}
            </tbody>
          </table>
        </div>
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
