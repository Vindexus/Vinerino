import React from 'react'

import Money from './Money'

export default class PrevGoal extends React.Component {
  render () {
    const { goal } = this.props

    if(!goal) {
      return null
    }

    return (<div class="prev-goal">
      <div class="label">Unlocked: </div>
      <div class="goal-desc">{goal.desc}</div>
    </div>)
  }
}