/**
 * Created by m2wasabi on 2016/07/19.
 */
const initialState = {
  'stage':0,
  'timeLimit': null,
  'votes':{
    'live':{0:1,1:0},
    'commit':{0:1,1:0}
  },
  'results': []
};

export default function masterApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'INIT_VOTE':
      return Object.assign({}, state, {
        stage: 0,
        votes: {
          'live': {0:1,1:0},
          'commit': {0:1,1:0}
        }
      });

    case 'BEGIN_VOTE':
      return Object.assign({}, state, {
        stage: 1
      });

    case 'LIVE_VOTE':
      let _live = state.votes.live;
      _live[action.vote.team]++;
      if( action.vote.switch !== null ) {
        _live[action.vote.switch]--;
      }
      return Object.assign({}, state, {
        votes: { live: _live}
      });

    case 'STOP_VOTE':
      return Object.assign({}, state, {
        stage: 2
      });

    case 'FINAL_VOTE':
      let _commit = state.votes.commit;
      _commit[action.vote.team]++;
      return Object.assign({}, state, {
        votes: { commit: _commit}
      });

    case 'SHOW_RESULT':
      let _results = state.results;
      _results.push(state.votes.commit);
      return Object.assign({}, state, {
        stage: 3,
        results: _results
      });

    case 'SHOW_SUMMARY':
      return Object.assign({}, state, {
        stage: 4
      });

    case 'SHOW_ENDING':
      return Object.assign({}, state, {
        stage: 5
      });

    default:
      return state
  }
}