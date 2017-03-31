import * as actionTypes from '../actionTypes/matcherino'
import axios from 'axios'
import * as config from '../config'

export const fetchMatcherino = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_MATCHERINO_PENDING
    })

    return axios.get('https://jsonplaceholder.typicode.com/posts/1', {
        withCredentials: true
      })
      .then((resp) => {
          dispatch({
            type: actionTypes.FETCH_MATCHERINO_FULFILLED,
            payload: require('../data/4145')
          })
      })
      .catch((err, two) => {
        console.log('err', JSON.stringify(err), two);
        dispatch({
          type: actionTypes.FETCH_MATCHERINO_REJECTED,
          payload: err
        })
      })
  }
}