/**
 * Created by m2wasabi on 2016/07/18.
 */
'use strict';

let voteSequence = 0;
export const initVote = () => {
  return {
    type: 'INIT_VOTE',
    seq: voteSequence++
  }
};

export const beginVote = () => {
  return {
    type: 'BEGIN_VOTE',
    seq: voteSequence++
  }
};

export const liveVote = (vote) => {
  return {
    type: 'LIVE_VOTE',
    vote: vote
  }
};

export const stopVote = () => {
  return {
    type: 'STOP_VOTE'
  }
};

export const finalVote = (vote) => {
  return {
    type: 'FINAL_VOTE',
    vote: vote
  }
};

export const showResult = () => {
  return {
    type: 'SHOW_RESULT'
  }
};

export const showSummary = () => {
  return {
    type: 'SHOW_SUMMARY'
  }
};

export const showEnding = () => {
  return {
    type: 'SHOW_ENDING'
  }
};
