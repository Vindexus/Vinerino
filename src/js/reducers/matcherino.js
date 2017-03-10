import * as actionTypes from '../actionTypes/matcherino'

export default function matcherinoReducer (state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_MATCHERINO_FULFILLED:
      const data = action.payload.body[0]
      const currentAmount = state.currentAmount ? state.currentAmount + 200000 : data.balance
      const goals = data.meta.stretchGoals
      const lastStretch = goals[goals.length - 1]
      const progress = Math.min(currentAmount / lastStretch.goal, 1)
      const latestDonation = data.newtransactions.length > 0 ? data.newtransactions[0] : false
      const amountToNextGoal = lastStretch.goal - currentAmount

      let nextGoal = false
      for(var i = 0; i < goals.length; i++) {
        let goal = goals[i]
        if(goal.goal > currentAmount) {
          nextGoal = goal
          break
        }
      }

      let prevGoal = false
      for(var i = goals.length - 1; i >= 0; i--) {
        let goal = goals[i]
        if(goal.goal < currentAmount) {
          prevGoal = goal
          break
        }
      }

      return {
        rawData: data,
        progress: progress,
        prevGoal: prevGoal,
        nextGoal: nextGoal,
        latestDonation: latestDonation,
        amountToNextGoal: amountToNextGoal,
        currentAmount: currentAmount,
        lastStretch: lastStretch
      }
      break

    default:
      return state
      break
  }
}