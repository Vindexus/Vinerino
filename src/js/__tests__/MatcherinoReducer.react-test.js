import reducer from '../reducers/matcherino'
import * as types from '../actionTypes/matcherino'

import fixtureData from '../data/fakedata'

describe('matcherino reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle FETCH_MATCHERINO_FULFILLED', () => {
    const data = reducer([], {
      type: types.FETCH_MATCHERINO_FULFILLED,
      payload: fixtureData
    })
    expect(data.progress).toEqual(0.8428714285714286)
    expect(data.rawData).toEqual(fixtureData.body[0])
    expect(data.prevGoal).toEqual({ desc: 'Pros vs. Talent - Watch your favorite pro players go head to head against UGC Halo casters! Rewards to winners!', goal: 2900000 })
    expect(data.amountToNextGoal).toEqual(549950)
    expect()
  })
})