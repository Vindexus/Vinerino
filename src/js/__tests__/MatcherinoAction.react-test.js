import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/matcherino'
import * as types from '../actionTypes/matcherino'
import nock from 'nock'

import httpAdapter from 'axios/lib/adapters/http'
import axios from 'axios'
axios.defaults.adapter = httpAdapter;

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

//I'm making requests, then just including this as the response
//this will need to be changed once I'm actually hooked up to the API
const fixtureData = require('../data/fakedata')

describe('fetch matcherino information', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_MATCHERINO_PENDING when fetching info has been done', () => {
    const data = { body: { data: {info: 'does not matter'} } }
    nock('https://jsonplaceholder.typicode.com')
      .get('/posts/1')
      .reply(200, fixtureData)

    const expectedActions = [
      { type: types.FETCH_MATCHERINO_PENDING },
      { type: types.FETCH_MATCHERINO_FULFILLED, payload: fixtureData }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchMatcherino())
      .then(() => { // return of async actions
        const actions = store.getActions()
        console.log('actions', actions)
        expect(actions).toEqual(expectedActions)
      })
  })
})