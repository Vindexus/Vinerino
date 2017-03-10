import React from 'react'

import Money from './Money'

export default class ProgressBar extends React.Component {
  render () {
    const { lastStretch, currentAmount, progress } = this.props.matcherino

    if(!lastStretch) {
      return null
    }

    const innerBarStyle = {
      width: (progress * 100).toFixed(2) + '%'
    }

    return (
      <div class="progress-bar-container">
        <div class="progress-bar-outer">
          <div class="progress-bar-inner" style={innerBarStyle}></div>
        </div>
        <div class="progress-bar-numbers"><Money amount={currentAmount} />/<Money amount={lastStretch.goal} /></div>
      </div>
    )
  }
}