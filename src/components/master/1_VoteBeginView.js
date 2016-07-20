/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, liveVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class VoteBeginView extends Component {
  render() {
    var {dispatch, timeLimit, votes} = this.props;

    return (
      <div>
        <h1>
          投票中
        </h1>
        <button id="btnCountDown" onClick={() => {
          var btn = document.getElementById("btnCountDown");
          btn.setAttribute('disabled','disabled');
          var delay = 1000;
          var leftTime = 5000;
          var timer = setInterval( () => {
            leftTime -= delay;
            if(leftTime < 0) {
              clearInterval(timer);
              dispatch(stopVote());

              ds.child('live').off('send');
            }

            var elm = document.getElementById('countdown');
            if(elm) {
              elm.innerHTML = Math.floor(leftTime / 1000);
            }


          } ,delay);
        }}>カウントダウン開始</button>
        <div>カウントダウン <span id="countdown" /></div>
        <div>
          Stars ★
          <ul>
            <li>紅組<span id="votes-0">{votes.live.team0}</span></li>
            <li>白組<span id="votes-1">{votes.live.team1}</span></li>
          </ul>
        </div>

        <div>エフェクト</div>
      </div>
    )
  }
}
VoteBeginView.propTypes = {
  stage: PropTypes.number.isRequired,
  timeLimit: PropTypes.any,
  votes: PropTypes.shape({
    live: PropTypes.shape({
      team0: PropTypes.number.isRequired,
      team1: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

function select(state) {
  return {
    stage: state.stage,
    timeLimit: state.timeLimit,
    votes: {live: state.votes.live}
  }
}

export default connect(select)(VoteBeginView);
