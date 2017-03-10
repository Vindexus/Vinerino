import React from 'react'

import NextGoal from './NextGoal'
import PrevGoal from './PrevGoal'

export default class HighlightGoal extends React.Component {
  render () {
    const { nextGoal, prevGoal, amountToNextGoal } = this.props.matcherino
    console.log('nextGoal, prevGoal', nextGoal, prevGoal);

    const goal = nextGoal 
      ? <NextGoal goal={nextGoal} amountToNextGoal={amountToNextGoal} /> 
      : <PrevGoal goal={prevGoal} />

    return (<div class="highlight-goal">{goal}</div>)
  }
}