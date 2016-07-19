/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class VoteBeginView extends Component {
  render() {
    const {dispatch, timeLimit, vote} = this.props;
    console.log(vote);
    return (
      <div>
        <h1>
          投票中
        </h1>
        <button onClick={() => {
          var delay = 1000;
          var leftTime = 5000;
          var timer = setInterval( () => {
            leftTime -= delay;
            if(leftTime < 0) {
              clearInterval(timer);
              dispatch(stopVote());
            }

            var elm = document.getElementById('countdown');
            if(elm) {
              elm.innerHTML = Math.floor(leftTime / 1000);
            }


          } ,delay);
        }}>カウントダウン開始</button>
        <div>カウントダウン <span id="countdown" /></div>
        <div>エフェクト</div>
      </div>
    )
  }
}

function select(state) {
  return {
    stage: state.stage,
    timeLimit: state.timeLimit,
    vote: state.votes.live
  }
}

export default connect(select)(VoteBeginView);
