/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class ResultView extends Component {
  render() {
    const {dispatch, votes} = this.props;
    var winner;
    var message;
    if(votes.commit.team0 == votes.commit.team1){
      // 引き分け
      winner = -1;
      message = "引き分け";
    } else if (votes.commit.team0 > votes.commit.team1) {
      // 紅組の勝ち
      winner = 0;
      message = "紅組の勝利！";
    } else {
      // 白組の勝ち
      winner = 1;
      message = "白組の勝利！";
    }
    return (
      <div>
        <h1>
          結果
        </h1>
        <div>得票数</div>
        <div>
          <ul>
            <li>紅組<span id="votes-0">{votes.commit.team0}</span></li>
            <li>白組<span id="votes-1">{votes.commit.team1}</span></li>
          </ul>
        </div>
        <h2>{message}</h2>
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
    votes: state.votes
  }
}

export default connect(select)(ResultView);
