import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ProgressWidget from './components/ProgressWidget'
import store from './store'

ReactDOM.render(<Provider store={store}><ProgressWidget /></Provider>, document.getElementById('app'))