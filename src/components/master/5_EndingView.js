/**
 * Created by m2wasabi on 2016/07/19.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { initVote, beginVote, stopVote, showResult, showSummary, showEnding } from '../../actions/master'

class EndingView extends Component {
  render() {
    return (
      <div>
        <h1>
          ありがとうございました！
        </h1>
        <div>エフェクト</div>
      </div>
    )
  }

}

export default EndingView;
