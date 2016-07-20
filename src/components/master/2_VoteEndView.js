/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, finalVote, showResult, showSummary, showEnding } from '../../actions/master'

class VoteEndView extends Component {
  render() {
    var {dispatch, votes} = this.props;
    console.log(votes);
    return (
      <div>
        <h1>
          投票締切
        </h1>
        <div>集計中</div>
        <div>
          得票数 ★
          <ul>
            <li>紅組<span id="votes-0">{votes.commit.team0}</span></li>
            <li>白組<span id="votes-1">{votes.commit.team1}</span></li>
          </ul>
        </div>


        <button onClick={() => {
          dispatch(showResult());
          ds.child('commit').off('push');
        }}>そろそろいいかな</button>

      </div>
    )
  }

}
VoteEndView.propTypes = {
  stage: PropTypes.number.isRequired,
  timeLimit: PropTypes.any,
  votes: PropTypes.shape({
    commit: PropTypes.shape({
      team0: PropTypes.number.isRequired,
      team1: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

function select(state) {
  return {
    stage: state.stage,
    timeLimit: state.timeLimit,
    votes: state.votes
  }
}

export default connect(select)(VoteEndView);
