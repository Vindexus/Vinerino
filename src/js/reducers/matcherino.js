import * as actionTypes from '../actionTypes/matcherino'

export default function matcherinoReducer (state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_MATCHERINO_FULFILLED:
      const data = action.payload.body[0]
      const currentAmount = state.currentAmount ? state.currentAmount + 200000 : data.balance
      let goals = data.meta.stretchGoals
      const lastStretch = goals && goals.length > 0 ? goals[goals.length - 1] : false
      const latestDonation = data.newtransations && data.newtransactions.length > 0 ? data.newtransactions[0] : false
      const amountToNextGoal = lastStretch ? lastStretch.goal - currentAmount : data.meta.goal
      const progress = Math.min(currentAmount / amountToNextGoal, 1)

      let prevGoals = []
      let nextGoal = false
      let prevGoal = false

      if(goals) {
        goals = goals.map((goal) => {
          goal.progressPosition = Math.min(goal.goal / lastStretch.goal, 1)
          console.log('goal.progressPosition', goal.progressPosition);
          return goal
        })

        for(var i = 0; i < goals.length; i++) {
          let goal = goals[i]
          if(goal.goal > currentAmount) {
            nextGoal = goal
            break
          }
        }
        for(var i = goals.length - 1; i >= 0; i--) {
          let goal = goals[i]
          if(goal.goal < currentAmount) {
            if(prevGoal === false) {
              prevGoal = goal
            }
            prevGoals.push(goal)
          }
        }
      }
      else {
        goals = []
      }

      return {
        rawData: data,
        progress: progress,
        prevGoal: prevGoal,
        prevGoals: prevGoals,
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