import React from 'react'
import { connect } from 'react-redux'

import { fetchMatcherino } from '../actions/matcherino'

import ProgressBar from './ProgressBar'
import LatestDonation from './LatestDonation'
import HighlightGoal from './HighlightGoal'
import Money from './Money'

@connect((store) => {
  return {
    matcherino: store.matcherino
  }
})

export default class ProgressWidget extends React.Component {
  componentWillMount () {
    this.props.dispatch(fetchMatcherino())
  }

  render () {
    const { matcherino } = this.props
    console.log('matcherino', matcherino);
    return (
      <div class="progress-widget">
        <ProgressBar matcherino={matcherino} />
        <HighlightGoal matcherino={matcherino} />
        <LatestDonation donation={matcherino.latestDonation} />
      </div>
    )
  }
}
