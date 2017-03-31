import React from 'react'

import Money from './Money'

export default class ProgressBar extends React.Component {
  render () {
    const { lastStretch, currentAmount, progress, prevGoals } = this.props.matcherino

    if(!lastStretch) {
      return null
    }

    const innerBarStyle = {
      width: (progress * 100).toFixed(2) + '%'
    }

    const goalPips = prevGoals.length > 0
      ? prevGoals.map((goal, index) => {
          console.log('goal', goal);
          let pipStyle = {
            left: (goal.progressPosition * 100).toFixed(2) + '%',
            color: 'red'
          }
          console.log('pipStyle', pipStyle);
          return <div class="progress-pip" style={pipStyle} key={index}></div>
        })
      : null

    return (
      <div class="progress-bar-container">
        <div class="progress-bar-outer">
          <div class="progress-bar-inner" style={innerBarStyle}></div>
          {goalPips}
        </div>
        <div class="progress-bar-numbers"><Money amount={currentAmount} />/<Money amount={lastStretch.goal} /></div>
      </div>
    )
  }
}