/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, startCountDown, stopVote, showResult, showSummary, showEnding } from '../../actions/master'
import InitView from './0_InitView'
import VoteBeginView from './1_VoteBeginView'
import VoteEndView from './2_VoteEndView'
import ResultView from './3_ResultView'
import SummaryView from './4_SummaryView'
import EndingView from './5_EndingView'
//

class App extends Component {
  render() {
    console.log(this.props.stage);
    let Content;
    switch(this.props.stage) {
      case 0:
        Content = InitView;
        break;
      case 1:
        Content = VoteBeginView;
        break;
      case 2:
        Content = VoteEndView;
        break;
      case 3:
        Content = ResultView;
        break;
      case 4:
        Content = SummaryView;
        break;
      case 5:
        Content = EndingView;
        break;
      default:
        Content = InitView;
    }

    return (
      <div>
        <Content/>
      </div>
    )

  }
}

function select(state) {
  return {
    stage: state.stage
  }
}

export default connect(select)(App);

