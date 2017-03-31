import React from 'react'

import Money from './Money'

export default class NextGoal extends React.Component {
  render () {
    const { goal, amountToNextGoal } = this.props

    if(!goal) {
      return null
    }

    return (<div class="next-goal">
      <div class="label">In <Money amount={amountToNextGoal} />:</div>
      <div class="goal-desc">{goal.desc}</div>
    </div>)
  }
}